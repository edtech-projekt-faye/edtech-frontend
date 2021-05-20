import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'

const DetailsLesson = (props) => {
  const { lesson, setLesson, detailCourse, setDetailCourse } = useContext(MainContext)
  const { match } = props

  useEffect(() => {
    axios.get(`http://localhost:3500/course/${match.params.id}`)
      .then(item => {
        // console.log(item.data.course_lessons);
        setLesson(item.data.course_lessons.filter(lesson => lesson.lesson_number === match.params.number))
        setDetailCourse(item.data)
      })
      .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id])

  console.log(lesson);
  return (
    <div>
      {
        lesson &&
        lesson.map((les, key) => {
          return <ul key={key}>
            <Link to="#">Lessons</Link>
            <Link to={`/course/${detailCourse._id}/lessons/${les.lesson_number}/test`}>Quiz</Link>
          </ul>
        })


      }

      {lesson && lesson.map((les, i) => {
        return <h1 key={i}>{les.lesson_introduction}</h1>
      })}

    </div>

  );
}

export default DetailsLesson;
