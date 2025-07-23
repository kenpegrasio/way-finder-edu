import { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AddMeeting from "../components/AddMeeting";
import UpdateMeeting from "../components/UpdateMeeting";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const BASE_URL = "https://way-finder-edu-api.vercel.app";

interface Meeting {
  _id: string;
  start_time: string;
  end_time: string;
  student_name: string;
  teacher_name: string;
  meeting_link: string;
  materials: string;
}

function Meetings() {
  const [meetings, setMeetings] = useState<Meeting[]>([]);
  const [showAddMeetingForm, setShowAddMeetingForm] = useState(false);
  const [showUpdateFormId, setShowUpdateFormId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const logged_in = sessionStorage.getItem("user");
  if (!logged_in) {
    window.location.href = "/";
    return;
  }
  const user = JSON.parse(logged_in);

  const deleteClicked = async (id: string) => {
    const token_session = sessionStorage.getItem("token") as string;
    const token = JSON.parse(token_session);
    try {
      await axios.delete(`${BASE_URL}/api/meeting/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Meeting deleted successfully!");
      setMeetings((prev) => prev.filter((m) => m._id !== id));
    } catch {
      alert("Failed to delete meeting.");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const token_session = sessionStorage.getItem("token");
      if (!token_session) return;

      const token = JSON.parse(token_session);
      try {
        const response = await axios.get(
          `${BASE_URL}/api/meeting/user`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const raw_meetings = response.data;
        const fetchedMeetings: Meeting[] = [];

        for (const raw of raw_meetings) {
          try {
            const student = await axios.get(
              `${BASE_URL}/api/user/${raw.student_id}`
            );
            const teacher = await axios.get(
              `${BASE_URL}/api/user/${raw.teacher_id}`
            );

            fetchedMeetings.push({
              _id: raw._id,
              start_time: raw.start_time,
              end_time: raw.end_time,
              student_name: student.data.name,
              teacher_name: teacher.data.name,
              meeting_link: raw.meeting_link,
              materials: raw.materials,
            });
          } catch (err) {
            console.error("User fetch failed for meeting:", raw._id);
          }
        }

        setMeetings(fetchedMeetings);
      } catch (err) {
        console.error("Failed to fetch meetings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />

      {loading ? (
        <div className="flex flex-col justify-center items-center min-h-[50vh] bg-custom-cream text-custom-dark-blue">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-custom-dark-blue"></div>
          <span className="mt-4 text-xl font-semibold font-montserrat">
            Loading meetings...
          </span>
        </div>
      ) : (
        <>
          <div className="w-full bg-custom-dark-blue text-custom-cream px-6 py-20 lg:px-24 mt-22 flex justify-center">
            <div className="max-w-5xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
                Want to schedule a new meeting?
              </h2>
              <p className="text-base md:text-lg font-montserrat mb-6">
                Book a personalized session with just one click.
              </p>
              <button
                onClick={() =>
                  (window.location.href = "/book-now")
                }
                className="bg-custom-cream text-custom-dark-blue font-montserrat font-medium text-lg lg:text-2xl px-6 py-3 rounded-lg transform hover:scale-105 transition-all"
              >
                Order Now
              </button>
            </div>
          </div>

          <main className="flex flex-col items-center pt-15 md:pt-20 px-4 bg-custom-cream min-h-[60%] py-20">
            <Card className="w-full max-w-6xl bg-custom-cream shadow-none border-none px-2 md:px-6">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl md:text-4xl font-bold text-custom-dark-blue font-montserrat">
                  Your Meetings
                </CardTitle>
              </CardHeader>

              <CardContent className="overflow-x-auto mt-4">
                {meetings.length > 0 ? (
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#fdf6ee] text-custom-dark-blue/90">
                        <TableHead>Date</TableHead>
                        <TableHead>Start Time</TableHead>
                        <TableHead>End Time</TableHead>
                        <TableHead>Teacher</TableHead>
                        <TableHead>Student</TableHead>
                        <TableHead>Meeting Link</TableHead>
                        {user.accesstype === "Admin" && <TableHead>Actions</TableHead>}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {meetings.map((meeting) => (
                        <TableRow
                          key={meeting._id}
                          className="hover:bg-[#fcf3e8] transition duration-200"
                        >
                          <TableCell>
                            {format(new Date(meeting.start_time), "PP")}
                          </TableCell>
                          <TableCell>
                            {format(new Date(meeting.start_time), "p")}
                          </TableCell>
                          <TableCell>
                            {format(new Date(meeting.end_time), "p")}
                          </TableCell>
                          <TableCell>{meeting.teacher_name}</TableCell>
                          <TableCell>{meeting.student_name}</TableCell>
                          <TableCell>
                            {meeting.meeting_link ===
                            "Meeting link has not been provided" ? (
                              <>{meeting.meeting_link}</>
                            ) : (
                              <a
                                href={meeting.meeting_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-custom-dark-blue font-medium underline hover:text-blue-700"
                              >
                                Link
                              </a>
                            )}
                          </TableCell>
                          {user.accesstype === "Admin" && (
                            <TableCell className="flex gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-custom-dark-blue text-custom-dark-blue hover:bg-custom-dark-blue hover:text-custom-cream rounded-xl"
                                onClick={() => setShowUpdateFormId(meeting._id)}
                              >
                                Edit
                              </Button>
                              <Button
                                variant="destructive"
                                size="sm"
                                className="rounded-xl"
                                onClick={() => deleteClicked(meeting._id)}
                              >
                                Delete
                              </Button>
                            </TableCell>
                          )}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                ) : (
                  <p className="text-center text-custom-dark-blue/70 font-medium py-4 font-montserrat">
                    No meetings available.
                  </p>
                )}
              </CardContent>
            </Card>

            {user.accesstype === "Admin" && (
              <Button
                onClick={() => setShowAddMeetingForm((prev) => !prev)}
                className="mt-6 text-lg px-6 py-3 bg-custom-dark-blue text-custom-cream hover:bg-transparent hover:border hover:border-custom-dark-blue hover:text-custom-dark-blue hover:scale-105 transition rounded-xl"
              >
                {showAddMeetingForm ? "Close Add Meeting" : "Add Meeting"}
              </Button>
            )}
          </main>
        </>
      )}

      {showAddMeetingForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
          <AddMeeting onClose={() => setShowAddMeetingForm(false)} />
        </div>
      )}

      {showUpdateFormId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300">
          <UpdateMeeting
            meetingId={showUpdateFormId}
            onClose={() => setShowUpdateFormId(null)}
          />
        </div>
      )}

      <Footer />
    </>
  );
}

export default Meetings;