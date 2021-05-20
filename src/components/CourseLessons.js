import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'

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
    <div>
      <h1 className="course-titel">{detailCourse.course_name} Lessons</h1>
      {/* <img src={detailCourse.course_img} alt="" className="Details-img" /> */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6vbgZnQrpbU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
      <ul className="list-container">
        {detailCourse.course_lessons && detailCourse.course_lessons.map((lesson, i) => {
          return <li key={i}><Link to={`/course/${detailCourse._id}/lessons/${lesson.lesson_number}`} className="link-lessons"> {lesson.lesson_name}</Link></li>


        })}

      </ul>

    </div>
  );
}

export default CourseLessons;
