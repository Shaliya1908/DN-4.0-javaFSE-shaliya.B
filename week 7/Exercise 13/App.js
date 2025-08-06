import React, { useState } from 'react';
import './App.css';

function CourseDetails() {
  const courses = [
    { name: 'Angular', date: '4/5/2021' },
    { name: 'React', date: '6/3/2021' }
  ];

  return (
    <div className="card">
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <strong>{course.name}</strong><br />
          <span>{course.date}</span><br /><br />
        </div>
      ))}
    </div>
  );
}

function BookDetails() {
  const books = [
    { title: 'Master React', price: 670 },
    { title: 'Deep Dive Into Angular 11', price: 800 },
    { title: 'Mongo Essentials', price: 450 }
  ];

  return (
    <div className="card">
      <h2>Book Details</h2>
      {books.map((book, index) => (
        <div key={index}>
          <strong>{book.title}</strong><br />
          <span>{book.price}</span><br /><br />
        </div>
      ))}
    </div>
  );
}

function BlogDetails() {
  const blogs = [
    {
      title: 'React Learning',
      author: 'Stephen Biz',
      description: 'Welcome to learning React!'
    },
    {
      title: 'Installation',
      author: 'Schwezdenier',
      description: 'You can install React from npm.'
    }
  ];

  return (
    <div className="card">
      <h2>Blog Details</h2>
      {blogs.map((blog, index) => (
        <div key={index}>
          <strong>{blog.title}</strong><br />
          <span>{blog.author}</span><br />
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  return (
    <div className="App">
      <h1>Blogger App</h1>

      {/* Toggle buttons */}
      <div className="buttons">
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
      </div>

      {/* Vertical sections */}
      <div className="container">
        {/* Logical AND conditional rendering */}
        {showCourses && <CourseDetails />}

        {/* Ternary operator */}
        {showBooks ? <BookDetails /> : null}

        {/* Plain if-statement style */}
        {showBlogs && <BlogDetails />}
      </div>
    </div>
  );
}

export default App;


