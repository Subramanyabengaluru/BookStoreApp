import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')" }}>
      <div className="bg-white bg-opacity-90 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
            <p className="text-lg text-gray-700 mb-6">
              Welcome to our Book Store App! We are passionate about books and aim to provide a wide selection of titles for all readers. Whether you’re looking for the latest bestsellers, timeless classics, or niche genres, we have something for everyone.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our mission is to foster a love of reading and make books accessible to everyone. We believe in the power of stories to inspire, educate, and entertain. Our team is dedicated to curating a diverse collection of books that caters to different tastes and preferences.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              At our Book Store App, we offer more than just a place to purchase books. We host author events, reading groups, and book discussions, both online and in-person. Our community is built around a shared love of literature and lifelong learning.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Thank you for choosing our Book Store App. We hope you enjoy exploring our collection and find your next great read! Feel free to reach out to us with any questions or suggestions.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link to="/" className="text-blue-500 hover:text-blue-700 transition duration-200 underline">
              Go back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
