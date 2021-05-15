import React from 'react'
import ColTimeImg from '../images/CoolTime.png'
import Button from '../components/buttons/Index'
import Arrow from '../components/arrow/Index'
const CoursNotSaved = () => {
    return (
        <div>
            <Arrow />
            <div>
                <h2>Saved</h2>
            </div>
            <div>
                <img src={ColTimeImg} alt="" />
            </div>
            <div>
                <h2>
                    Course not saved
                </h2>
            </div>
            <div>
                <h4>
                    Try saving the course again in a few minutes
                </h4>
            </div>
            <Button />
        </div>
    )
}

export default CoursNotSaved
