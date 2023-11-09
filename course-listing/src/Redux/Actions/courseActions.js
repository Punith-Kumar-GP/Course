import axios from 'axios';

export const fetchCourses = () => {
  return (dispatch) => {
    axios.get('https://654bc0e65b38a59f28efa819.mockapi.io/courses/hi')
      .then((response) => {
        const courses = response.data[0].courses;
        dispatch(setCourses(courses));
      })
      .catch((error) => {
        console.error('Error fetching data from the API:', error);
      });
  };
};

export const setCourses = (courses) => {
  return {
    type: 'SET_COURSES',
    payload: courses,
  };
};
