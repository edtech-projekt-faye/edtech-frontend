import React from 'react'
import Button from '../components/buttons/Index'
import Arrow from '../components/arrow/Index'
import CoolKids from '../images/Cool Kids On Wheels.png'
const CourseWasSaved = () => {
    return (
        <div>
            <Arrow />
            <div>
                <img src={CoolKids} alt="" />
            </div>
            <div>
                <h2>Course was saved</h2>
            </div>
            <div>
                <h4>
                    You can find this course in your profile
                </h4>
            </div>
            <Button />
        </div>
    )
}

export default CourseWasSaved
