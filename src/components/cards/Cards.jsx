import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import MainContext from '../../context/MainContext'
import './style.css'

function Cards() {
  const { courses } = useContext(MainContext)
  const history = useHistory()
  // console.log(courses);
  return (
    <div className="cards-flex">
      {
        courses.map((course, i) => {
          return (
            <div key={i} className="card">
              <Link to={`/course/${course._id}`}>
                <div className="card__image">
                  <img src={course.course_img} alt="" />
                </div>
              </Link>
              <div className="card__description">
                <div className="time">
                  <p>{course.course_duration}</p>
                </div>
                <a className="course-title" href={`/course/${course._id}`} onClick={() => history.push(`/course/${course._id}`)}>
                  <h2>{course.course_name}</h2>
                </a>
                <div className="course-intro">
                  <p>{course.course_definition}</p>
                </div>
              </div>
              <div className="course-categories">
                <div className="course-category">
                  <p>{course.course_category}</p>
                </div>
              </div>
            </div>)
        })
      }
    </div>

  )
}

export default Cards
