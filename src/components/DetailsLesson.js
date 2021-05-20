import { useEffect, useContext } from 'react'
import axios from 'axios'
import MainContext from '../context/MainContext'
import { Link } from 'react-router-dom'

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
      {
        lesson &&
        lesson.map((les, key) => {
          return <ul key={key}>
            <Link to="#" className="hyper-lessons">Lessons</Link>
            <Link to={`/course/${detailCourse._id}/lessons/${les.lesson_number}/test`} className="hyper-Quiz">Quiz</Link>
          </ul>
        })


      }

      {lesson && lesson.map((les, i) => {
        // return <h1 key={i} className="lessons-detail-title">{les.lesson_introduction}</h1>
      })}
      <h1 className="lessons-detail-title">Classes and IDs</h1>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XzahodQSRbQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className="video"></iframe>
      {/* <p className="lessons-explination">CSS can select HTML elements by their type, class, and ID. CSS classes and IDs have different purposes,
      which can affect which one you use to style HTML elements.

      CSS classes are meant to be reused over many elements. By writing CSS classes,
      you can style elements in a variety of ways by mixing classes. For instance, imagine
      a page with two headlines. One headline needs to be bold and blue, and the other needs
      to be bold and green. Instead of writing separate CSS rules for each headline that repeat each
      other’s code, it’s better to write a .bold CSS rule, a .green CSS rule, and a .blue CSS rule.
      Then you can give one headline the bold green classes, and the other the bold blue classes.

      While classes are meant to be used many times, an ID is meant to style only one element.
      As you’ll learn in the next exercise, IDs override the styles of types and classes. Since IDs
      override these styles, they should be used sparingly and only on elements that need
to always appear the same.</p> */}
    </div>

  );
}

export default DetailsLesson;
