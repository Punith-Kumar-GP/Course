import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "../css/CourseContainer.css";
import { useNavigate } from "react-router-dom";

const CourseDetails = () => {
 
  const courses = useSelector((state) => state.courses.courses);
  console.log(courses);
  const { id } = useParams();

  const selectedCourse = courses[id - 1];

  if (!selectedCourse) {
    return <div className="not-found">Course not found</div>;
  }


  return (
    <>
      <div className="Header">
        <b>Course Details</b>
        
      </div>
      <div className="course-details-container">
        {console.log(selectedCourse.thumbnail)}
        <div className="Image">
          <img
            src={selectedCourse.thumbnail}
            alt="Course Thumbnail"
            className="course-thumbnail"
          />
        </div>
        <h2 className="course-name">Course: {selectedCourse.name}</h2>
        <p className="instructor">Instructor: {selectedCourse.instructor}</p>
        <p className="description">Description: {selectedCourse.description}</p>
        <p className="duration">Duration: {selectedCourse.duration}</p>
        <p className="location">Location: {selectedCourse.location}</p>
        <p className="enrollment-status">
          Enrollment Status: {selectedCourse.enrollmentStatus}
        </p>

        <h3 className="syllabus-title">Syllabus:</h3>
        <ul className="syllabus-list">
          {selectedCourse.syllabus.map((item, index) => (
            <li key={index}>
              Week {item.week}: {item.topic} - {item.content}
            </li>
          ))}
        </ul>

        <h3 className="prerequisites-title">Prerequisites:</h3>
        <ul className="prerequisites-list">
          {selectedCourse.prerequisites.map((prerequisite, index) => (
            <li key={index}>{prerequisite}</li>
          ))}
        </ul>
        <button className="know-more-button" onClick={""}>
          start
        </button>
      </div>
    </>
  );
};

export default CourseDetails;
