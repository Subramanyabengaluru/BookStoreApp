import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };
    try {
      const res = await axios.post("http://localhost:8000/contactus", msg);
      toast.success(res.data);
    } catch (err) {
      console.log(err);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        id="contact-form"
        onSubmit={handleSubmit}
        method="POST"
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            name="message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200 mb-4"
        >
          Submit
        </button>
        <Link
          to="/"
          className="w-full inline-block text-center bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition duration-200"
        >
          Go to Home
        </Link>
      </form>
    </div>
  );
};

export default Contact;
