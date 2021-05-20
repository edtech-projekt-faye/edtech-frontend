import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'
const CourseDetails = (props) => {

  const { match } = props
  const { setDetailCourse, detailCourse } = useContext(MainContext)
  useEffect(() => {
    axios.get(`https://dry-fortress-33352.herokuapp.com/course/${match.params.id}`)
      .then(item => {
        console.log(item.data);
        setDetailCourse(item.data)
      })
  }, [setDetailCourse, match.params.id])
  console.log(detailCourse)
  return (
    <div className="detail-container">
      <Link to="/courses" className="home-link">&#8592;</Link>
      <h1 className="course-titel">{detailCourse.course_name}</h1>
      <img src={detailCourse.course_img} alt="" className="Details-img" />
      <h2>About the course</h2>
      <p>{detailCourse.course_definition}</p>
      <h2>Duration</h2>
      <p>{detailCourse.course_duration}</p>
      <Link to={`/course/${detailCourse._id}/lessons`}><button className="get-started">Start</button></Link>

    </div>
  );
}

export default CourseDetails;
