import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../UserContextProvider";

interface Inputs {
  teacher: string;
  student: string;
  date: string;
}

interface AddMeetingProps {
  onClose: () => void;
}

function AddMeeting({ onClose }: AddMeetingProps) {
  const [inputs, setInputs] = useState<Inputs>({
    teacher: "",
    student: "",
    date: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputs);
    if (inputs.teacher === "" || inputs.date === "" || inputs.student === "") {
      alert("One of the inputs is empty!");
      return;
    }
    axios
      .post(`https://way-finder-edu-api.vercel.app/api/meetings`, {
        teacher: inputs.teacher,
        student: inputs.student,
        date: inputs.date,
      })
      .then((res) => {
        console.log(res);
        alert("Data saved!");
        window.location.href = `/meetings`;
      });
  };

  const context = useContext(UserContext);

  if (!context) {
    throw new Error("UserContext must be used within a UserContextProvider");
  }

  const { user } = context;

  if (user.accesstype !== "Admin") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-6 w-full max-w-md text-center">
      <button className="absolute top-2 right-2 text-black font-bold text-xl" onClick={onClose}>
            ×
          </button>
        <h1 className="font-bold text-2xl mb-4">Add Meeting</h1>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="flex flex-col">
            Teacher:
            <input
              className="mt-1 px-3 py-2 rounded border border-gray-300"
              type="text"
              name="teacher"
              value={inputs.teacher}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            Student:
            <input
              className="mt-1 px-3 py-2 rounded border border-gray-300"
              type="text"
              name="student"
              value={inputs.student}
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col">
            Date:
            <input
              className="mt-1 px-3 py-2 rounded border border-gray-300"
              type="date"
              name="date"
              value={inputs.date}
              onChange={handleChange}
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
