// StudentDashboard.js

import React from 'react';
import '../css/StudentDasboard.css';

const StudentDashboard = () => {
  const studentData = {
    name: 'John Doe',
    courses: [
      { name: 'React Native', progress: 70 },
      { name: 'Python', progress: 45 },
      { name: 'Machine Learning', progress: 90 },
    ],
  };

  return (
    <div className="student-dashboard">
      <h2 className="welcome-message">Welcome, {studentData.name}!</h2>
      <h3 className="courses-header">Your Courses:</h3>
      <ul className="course-list">
        {studentData.courses.map((course, index) => (
          <li key={index} className="course-item">
            <strong>{course.name}</strong> - Progress: {course.progress}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
