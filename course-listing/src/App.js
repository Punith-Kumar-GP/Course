import React from 'react';
import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import CourseList from './Components/CourseList';
import CourseDetails from './Components/CourseContainer';
import StudentDashboard from './Components/StudentDashboard';

// Your other imports...

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
         <Route path="/" element={<CourseList/> }/>
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/StudentDasboard" element={<StudentDashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
