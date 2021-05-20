import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'
import Header from './header'

const CourseLessons = (props) => {
  const { match } = props
  const { setDetailCourse, detailCourse, current_course } = useContext(MainContext)
  useEffect(() => {
    axios.get(`https://dry-fortress-33352.herokuapp.com/course/${match.params.id}`)
      .then(item => {
        console.log(item.data);
        setDetailCourse(item.data)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log(current_course);
  return (
    <div className="lessons">
      <Header />
      <h1 className="course-titel">{detailCourse.course_name} Lessons</h1>
      <ul className="list-container">
        {detailCourse.course_lessons && detailCourse.course_lessons.map((lesson, i) => {
          return <li key={i}><Link to={`/course/${detailCourse._id}/lessons/${lesson.lesson_number}`} className="link-lessons"><a className="lesson-name">{lesson.lesson_name}</a></Link></li>


        })}

      </ul>

    </div>
  );
}

export default CourseLessons;
