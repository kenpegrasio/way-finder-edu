import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function UpdateMeeting() {
  const { id } = useParams();
  const [loading, setLoading] = useState<Boolean>(true);

  const [formData, setFormData] = useState({
    _id: "",
    date: "",
    teacher: "",
    student: "",
    meeting_link: "",
    __v: 0,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .put(`https://way-finder-edu-api.vercel.app/api/meetings/${id}`, {
        ...formData
      })
      .then((res) => {
        console.log(res);
        alert('Meeting has been successfully updated!');
        window.location.href = `/meetings`;
      });
  };

  useEffect(() => {
    axios
      .get(`https://way-finder-edu-api.vercel.app/api/meetings/${id}`)
      .then((res) => {
        setFormData(res.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-custom-cream">
      <h1 className="text-3xl font-bold mb-3">Update Meeting Info</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <div>
          <label>Date:</label>
          <input
            type="string"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="border border-black rounded-md ml-1 p-1"
          />
        </div>
        <div>
          <label>Teacher:</label>
          <input
            type="text"
            name="teacher"
            value={formData.teacher}
            onChange={handleChange}
            className="border border-black rounded-md ml-1 p-1"
          />
        </div>
        <div>
          <label>Student:</label>
          <input
            type="text"
            name="student"
            value={formData.student}
            onChange={handleChange}
            className="border border-black rounded-md ml-1 p-1"
          />
        </div>
        <div>
          <label>Meeting Link:</label>
          <textarea
            name="meeting_link"
            value={formData.meeting_link}
            onChange={handleChange}
            className="border border-black rounded-md ml-1 p-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="flex items-center justify-center text-center text-custom-cream bg-custom-dark-blue rounded-xl px-5 py-3 font-montserrat font-medium text-2xl lg:text-2xl transition-transform duration-100 hover:text-custom-dark-blue hover:bg-custom-cream hover:outline-solid hover:outline-2 hover:outline-custom-dark-blue hover:scale-105"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateMeeting;
