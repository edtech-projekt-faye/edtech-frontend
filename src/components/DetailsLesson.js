import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'
import Header from '../components/header'

const DetailsLesson = (props) => {
  const { lesson, setLesson, detailCourse, setDetailCourse } = useContext(MainContext)
  const { match } = props

  useEffect(() => {
    axios.get(`https://dry-fortress-33352.herokuapp.com/course/${match.params.id}`)
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
    <div className="lessons-quiz">
      <Header />
      {
        lesson &&
        lesson.map((les, key) => {
          return (
          <>
            <ul key={key}>
              <Link to="#" className="hyper-lessons"><a className="lessons-link">Lessons</a></Link>
              <Link to={`/course/${detailCourse._id}/lessons/${les.lesson_number}/test`} className="hyper-Quiz"><a className="quiz-link">Quiz</a></Link>
            </ul>
            <h1 className="lessons-detail-title">{les.lesson_name}</h1>
            <div className="video">
              {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/XzahodQSRbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe> */}
            </div>
            <div className="text-wrapper">
                <div className="text_details" dangerouslySetInnerHTML={{ __html: les.lesson_introduction }} />
              <br />
            </div>
          </>
          )
        })
      }
    </div>
  );
}
export default DetailsLesson;
