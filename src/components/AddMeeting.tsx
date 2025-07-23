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

interface AddMeetingProps {
  onClose: () => void;
}

function AddMeeting({ onClose }: AddMeetingProps) {
  const [inputs, setInputs] = useState<Inputs>({
    teacher_id: "",
    student_id: "",
    start_time: "",
    end_time: "",
    meeting_link: "",
  });

  const [teachers, setTeachers] = useState<User[]>([]);
  const [students, setStudents] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const token_session = sessionStorage.getItem("token");
      if (!token_session) {
        window.location.href = "/";
        return;
      }
      const token = JSON.parse(token_session);
      try {
        const res = await axios.get(`${BASE_URL}/api/user/allUsers`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const allUsers: User[] = res.data;

        setTeachers(allUsers.filter((user) => user.accesstype === "Admin"));
        setStudents(allUsers.filter((user) => user.accesstype === "User"));
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { teacher_id, student_id, start_time, end_time, meeting_link } =
      inputs;

    if (
      !teacher_id ||
      !student_id ||
      !start_time ||
      !end_time
    ) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const token_session = sessionStorage.getItem("token");
      if (!token_session) {
        window.location.href = "/";
        return;
      }
      const token = JSON.parse(token_session);
      await axios.post(`${BASE_URL}/api/meeting`, {
        teacher_id,
        student_id,
        start_time,
        end_time,
        meeting_link,
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      alert("Meeting created successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Failed to add meeting:", error);
      alert("Failed to create meeting.");
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
        <button
          className="absolute top-2 right-2 text-black font-bold text-xl"
          onClick={onClose}
        >
          ×
        </button>
        <h1 className="font-bold text-2xl mb-4">Add Meeting</h1>
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

export default AddMeeting;
