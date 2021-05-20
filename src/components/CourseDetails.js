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
      <Link to="/courses">Home</Link>
      <h1>{detailCourse.course_name}</h1>
      <img src={detailCourse.course_img} alt="" />
      <h2>About the course</h2>
      <p>{detailCourse.course_definition}</p>
      <h2>Duration</h2>
      <p>{detailCourse.course_duration}</p>
      <Link to={`/course/${detailCourse._id}/lessons`}><button className="get-started">Start</button></Link>
    </div>
  );
}

export default CourseDetails;
