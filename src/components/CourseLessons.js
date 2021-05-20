import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'

const CourseLessons = (props) => {
  const { match } = props
  const { setDetailCourse, detailCourse, current_course } = useContext(MainContext)
  useEffect(() => {
    axios.get(`http://localhost:3500/course/${match.params.id}`)
      .then(item => {
        console.log(item.data);
        setDetailCourse(item.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(current_course);
  return (
    <div>
      <h1>{detailCourse.course_name} Lessons</h1>
      <img src={detailCourse.course_img} alt="" />
      <ul>
        {detailCourse.course_lessons && detailCourse.course_lessons.map((lesson, i) => {
          return <li key={i}><Link to={`/course/${detailCourse._id}/lessons/${lesson.lesson_number}`}>{lesson.lesson_name}</Link></li>
        })}
      </ul>
    </div>
  );
}

export default CourseLessons;
