import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'
const CourseDetails = (props) => {

  const { match } = props
  const { setDetailCourse, detailCourse } = useContext(MainContext)
  useEffect(() => {
    axios.get(`http://localhost:3500/course/${match.params.id}`)
      .then(item => {
        console.log(item.data);
        setDetailCourse(item.data)
      })
  }, [setDetailCourse, match.params.id])
  return (
    <div>
      <Link to="/">Home</Link>
      <h1>hello hier ist course name {detailCourse.course_name}</h1>
    </div>

  );
}

export default CourseDetails;
