import React from 'react'
import KidsStandig from '../images/Cool Kids Standing.png'


const CourseNotFound = () => {
    return (
        <div>
            <input type="text"
                placeholder="search"



            />
            <div>
                <img src={KidsStandig} alt="" />
            </div>

            <div>
                <h2>
                    Course not found
                </h2>
            </div>
            <div>
                <h2>
                    Try searching the course with a different keyword
                </h2>
            </div>
        </div>
    )
}

export default CourseNotFound
