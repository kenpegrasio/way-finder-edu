import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://way-finder-edu-api.vercel.app";

interface User {
  _id: string;
  name: string;
  accesstype: string;
}

interface Inputs {
  teacher_id: string;
  student_id: string;
  start_time: string;
  end_time: string;
  meeting_link: string;
}

interface UpdateMeetingProps {
  onClose: () => void;
  meetingId: string;
}

function UpdateMeeting({ onClose, meetingId }: UpdateMeetingProps) {
  const [inputs, setInputs] = useState<Inputs>({
    teacher_id: "",
    student_id: "",
    start_time: "",
    end_time: "",
    meeting_link: "",
  });

  const [teachers, setTeachers] = useState<User[]>([]);
  const [students, setStudents] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInitialData = async () => {
      const token_session = sessionStorage.getItem("token");
      if (!token_session) {
        window.location.href = "/";
        return;
      }
      const token = JSON.parse(token_session);

      try {
        // Fetch users
        const usersRes = await axios.get(`${BASE_URL}/api/user/allUsers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allUsers: User[] = usersRes.data;
        setTeachers(allUsers.filter((user) => user.accesstype === "Admin"));
        setStudents(allUsers.filter((user) => user.accesstype === "User"));

        // Fetch meeting
        const meetingRes = await axios.get(`${BASE_URL}/api/meeting/${meetingId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const meeting = meetingRes.data;
        setInputs({
          teacher_id: meeting.teacher_id,
          student_id: meeting.student_id,
          start_time: meeting.start_time.slice(0, 16),
          end_time: meeting.end_time.slice(0, 16),
          meeting_link: meeting.meeting_link,
        });

        setLoading(false);
      } catch (err) {
        console.error("Failed to load update meeting data:", err);
        alert("Failed to load meeting data.");
      }
    };

    fetchInitialData();
  }, [meetingId]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token_session = sessionStorage.getItem("token");
    if (!token_session) {
      window.location.href = "/";
      return;
    }

    const token = JSON.parse(token_session);

    try {
      await axios.put(`${BASE_URL}/api/meeting/${meetingId}`, inputs, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Meeting updated successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Failed to update meeting:", error);
      alert("Failed to update meeting.");
    }
  };

  const logged_in = sessionStorage.getItem("user");
  if (!logged_in) {
    window.location.href = "/";
    return;
  }
  const user = JSON.parse(logged_in);
  if (user.accesstype !== "Admin") {
    return <h1>Unauthorized</h1>;
  }

  if (loading) return <h1 className="text-center">Loading...</h1>;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <button
          className="absolute top-2 right-2 text-black font-bold text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h1 className="font-bold text-2xl mb-4">Update Meeting</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="flex flex-col text-left">
            Teacher:
            <select
              name="teacher_id"
              value={inputs.teacher_id}
              onChange={handleChange}
              className="mt-1 px-3 py-2 rounded-sm border border-gray-300"
            >
              <option value="">Select a teacher</option>
              {teachers.map((t) => (
                <option key={t._id} value={t._id}>
                  {t.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col text-left">
            Student:
            <select
              name="student_id"
              value={inputs.student_id}
              onChange={handleChange}
              className="mt-1 px-3 py-2 rounded-sm border border-gray-300"
            >
              <option value="">Select a student</option>
              {students.map((s) => (
                <option key={s._id} value={s._id}>
                  {s.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col text-left">
            Start Time:
            <input
              type="datetime-local"
              name="start_time"
              value={inputs.start_time}
              onChange={handleChange}
              className="mt-1 px-3 py-2 rounded-sm border border-gray-300"
            />
          </label>

          <label className="flex flex-col text-left">
            End Time:
            <input
              type="datetime-local"
              name="end_time"
              value={inputs.end_time}
              onChange={handleChange}
              className="mt-1 px-3 py-2 rounded-sm border border-gray-300"
            />
          </label>

          <label className="flex flex-col text-left">
            Meeting Link:
            <input
              type="text"
              name="meeting_link"
              value={inputs.meeting_link}
              onChange={handleChange}
              className="mt-1 px-3 py-2 rounded-sm border border-gray-300"
            />
          </label>

          <div className="flex justify-center gap-4 mt-4">
            <button
              type="submit"
              className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Submit
            </button>
            <button
              type="button"
              className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateMeeting;