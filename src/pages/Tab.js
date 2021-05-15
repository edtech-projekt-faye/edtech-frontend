import React from 'react'
import TabBar from '../components/TabBar'
import SegmentControl from '../components/SegmentControl'
import CoursNotSaved from '../pages/CoursNotSaved'
import CoolKidsAloneTime from '../pages/CoolKidsAloneTime'
import CourseWasSaved from '../pages/CourseWasSaved'
import KidsSitting from '../pages/KidsSitting'
import CourseNotFound from '../pages/CourseNotFound'
const Tab = () => {
    return (
        <div>
            <TabBar />
            <SegmentControl />
            <CoursNotSaved />
            <CoolKidsAloneTime />
            <CourseWasSaved />
            <KidsSitting />
            <CourseNotFound />
        </div>
    )
}

export default Tab
