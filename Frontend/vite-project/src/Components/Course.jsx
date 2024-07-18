import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'; // Adjust the import path based on your file structure

function Course() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8000/book");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <>
      <Navbar /> {/* Include Navbar at the top */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?cs=srgb&dl=creative-books-vintage-1370295.jpg&fm=jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className='relative max-w-screen-2xl container mx-auto md:px-20 px-4'>
          <div className='mt-28 items-center justify-center text-center'>
            <h1 className='text-2xl font-semibold md:text-4xl text-white'>
              We're delighted to have you <span className='text-pink-500'>here! :)</span>
            </h1>
            <p className='mt-12 font-semibold text-white'>
              Discover Our Free Book Collection! Enjoy a wide range of books available. Dive into our collection and enrich your reading experience!
            </p>
            <Link to="/">
              <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
              </button>
            </Link>
          </div>
          <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-6'>
            {books.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Course;
