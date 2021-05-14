import './style.css';

import React, { useState } from 'react'

const SegmentControl = () => {
    const [lessonsStatus, setLessonsStatus] = useState(false)
    const [testsStatus, setTestsStatus] = useState(false)
    const [discussStatus, setDiscussStatus] = useState(false)

    const changeLessonsStatus = () => {
        setLessonsStatus(true)
        setDiscussStatus(false)
        setTestsStatus(false)
    }
    const changeTestsStatus = () => {
        setTestsStatus(true)
        setLessonsStatus(false)
        setDiscussStatus(false)

    }

    const changeDiscussStatus = () => {
        setDiscussStatus(true)
        setTestsStatus(false)
        setLessonsStatus(false)

    }





    return (
        <div>

            <button onClick={changeLessonsStatus} style={{ color: lessonsStatus ? '#78746D' : '#BEBAB3' }}>Lessons</button>
            <button onClick={changeTestsStatus} style={{ color: testsStatus ? '#78746D' : '#BEBAB3' }}>Tests</button>
            <button onClick={changeDiscussStatus} style={{ color: discussStatus ? '#78746D' : '#BEBAB3' }}>Discuss</button>

        </div>
    )
}

export default SegmentControl
