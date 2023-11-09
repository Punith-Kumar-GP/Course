// CourseList.js
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../Redux/Actions/courseActions";
import "../css/courselist.css";
import { Link, useNavigate } from "react-router-dom";
import SearchComponent from "./Search.js";

const CourseList = () => {
  const navigate = useNavigate();
  const allCourses = useSelector((state) => state.courses.courses);
  const dispatch = useDispatch();
  const [filteredCourses, setFilteredCourses] = useState(allCourses);

  useEffect(() => {
    dispatch(fetchCourses());
    setFilteredCourses(allCourses);
  }, [dispatch]);

  const handleSearch = (searchTerm) => {
    const filtered = allCourses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  };
  const handleStudent = () => {
    navigate("/studentDasboard");
  };

  return (
    <div>
      <div className="Header">
        Courses
        <p onClick={handleStudent}>Student dashboard</p>
      </div>
      <SearchComponent handleSearch={handleSearch} />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <div className="course-card" key={course.id}>
            <h2>Course: {course.name}</h2>
            <p>Instructor: {course.instructor}</p>
            <p>Description: {course.description}</p>
            <p>Enrollment Status: {course.enrollmentStatus}</p>
            <button className="know-more-button">
              <Link to={`/course/${course.id}`}>Know More</Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
