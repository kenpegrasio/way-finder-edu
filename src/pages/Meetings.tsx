import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../UserContextProvider";
import axios from "axios";
import { Link } from "react-router-dom";
import React from "react";
import AddMeeting from "../components/AddMeeting";

interface Meeting {
  _id: string;
  teacher: string;
  student: string;
  date: string;
  meeting_link: string;
  __v: number;
}

function Meetings() {
  const [meetings, setMeetings] = useState<any[]>([]);
  const context = useContext(UserContext);
  const [showAddMeetingForm, setShowAddMeetingForm] = useState(false);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;
  const rows = user.accesstype === "Admin" ? 5 : 4;

  const isUserEmpty = !user || (!user.picture && !user.name && !user.email);

  if (isUserEmpty) {
    window.location.href = "/";
  }

  function deleteClicked(value: string) {
    axios
      .delete(`https://way-finder-edu-api.vercel.app/api/meetings/${value}`)
      .then(() => {
        alert("Data deleted successfully!");
        window.location.href = `/meetings`;
      });
  }

  function addMeetingIsClicked() {
    setShowAddMeetingForm((prev) => !prev);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://way-finder-edu-api.vercel.app/api/meetings`
        );
        setMeetings(
          response.data
            .filter(
              (meeting: Meeting) =>
                meeting.teacher === user.name || meeting.student === user.name
            )
            .sort(
              (a: Meeting, b: Meeting) =>
                new Date(a.date).getTime() - new Date(b.date).getTime()
            )
        );
      } catch (error) {
        console.error("Error fetching meetings:", error);
      }
    };
    fetchData();
  }, []);

  // console.log("Meetings: ", meetings);
  // console.log("User: ", user);

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-28 pb-6 bg-customCream">
        <h1 className="text-center text-customBlack font-montserrat font-bold text-3xl pb-2 md:text-5xl lg:text-[2.5rem] lg:pb-4">
          Your Meetings
        </h1>
        {meetings.length ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${rows}, 1fr)`, // Four columns: Teacher, Student, Date, Meeting Link
              gap: "8px",
              textAlign: "center",
              border: "1px solid #ddd",
            }}
          >
            {/* Header Row */}
            <div
              style={{
                fontWeight: "bold",
                backgroundColor: "#f0f0f0",
                padding: "8px",
              }}
            >
              Date
            </div>
            <div
              style={{
                fontWeight: "bold",
                backgroundColor: "#f0f0f0",
                padding: "8px",
              }}
            >
              Teacher
            </div>
            <div
              style={{
                fontWeight: "bold",
                backgroundColor: "#f0f0f0",
                padding: "8px",
              }}
            >
              Student
            </div>
            <div
              style={{
                fontWeight: "bold",
                backgroundColor: "#f0f0f0",
                padding: "8px",
              }}
            >
              Meeting Link
            </div>
            {user.accesstype === "Admin" ? (
              <div
                style={{
                  fontWeight: "bold",
                  backgroundColor: "#f0f0f0",
                  padding: "8px",
                }}
              ></div>
            ) : (
              <></>
            )}

            {/* Data Rows */}

            {meetings.map((meeting, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center p-2 border-b border-gray-300">
                  <span className="flex-1">{meeting.date}</span>
                </div>
                <div className="flex items-center p-2 border-b border-gray-300">
                  <span className="flex-1">{meeting.teacher}</span>
                </div>
                <div className="flex items-center p-2 border-b border-gray-300">
                  <span className="flex-1">{meeting.student}</span>
                </div>
                <div className="flex items-center p-2 border-b border-gray-300">
                  <span className="flex-1">{meeting.meeting_link}</span>
                </div>
                {user.accesstype === "Admin" ? (
                  <div className="flex items-center justify-center p-2 border-b border-gray-300">
                    <Link to={`/update-meeting/${meeting._id}`}>
                      <img
                        src="edit.png"
                        className="h-10 w-10 ml-2"
                        alt="Edit"
                      />
                    </Link>
                    <button onClick={() => deleteClicked(meeting._id)}>
                      <img
                        src="delete.png"
                        className="h-10 w-10 ml-2"
                        alt="Delete"
                      />
                    </button>
                  </div>
                ) : (
                  <></>
                )}
              </React.Fragment>
            ))}
          </div>
        ) : (
          "No meetings available"
        )}
        {user.accesstype === "Admin" ? (
          <button
            onClick={addMeetingIsClicked}
            className="my-4 flex items-center justify-center text-center text-customCream bg-customDarkBlue rounded-xl px-5 py-3 font-montserrat font-medium text-2xl lg:text-2xl transition-transform duration-100 hover:text-customDarkBlue hover:bg-customCream hover:outline hover:outline-2 hover:outline-customDarkBlue hover:scale-105"
          >
            Add Meeting
          </button>
        ) : (
          <></>
        )}
      </div>
      {showAddMeetingForm ? (
        <AddMeeting onClose={() => setShowAddMeetingForm(false)} />
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
}

export default Meetings;
