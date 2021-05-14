import './style.css';
import React, { useState } from 'react'
import courseScour from '../../images/coursescour.png';
import profilePerson from '../../images/profileper.png'
import vectorSet from '../../images/Vectorset.png'
import courses from '../../images/courses.png';
import profile from '../../images/profile.png'
import vector from '../../images/Vector.png';



const TabBar = () => {
    const [activCourses, setActiveCourses] = useState(false)
    const [activeProfile, setActiveProfile] = useState(false)
    const [activeSetting, setActiveSetting] = useState(false)

    const changeCoursesStatus = () => {
        setActiveCourses(true)
        setActiveProfile(false)
        setActiveSetting(false)
    }
    const changeProfileStatus = () => {
        setActiveCourses(false)
        setActiveProfile(true)
        setActiveSetting(false)
    }

    const changeSettingStatus = () => {
        setActiveCourses(false)
        setActiveProfile(false)
        setActiveSetting(true)
    }
    return (
        <div className="tab-bar-container">
            <div onClick={changeCoursesStatus}
                className="courses-container">
                <img src={activCourses ? courses : courseScour} alt="course-Scour-svg" />
                <h4 style={{ color: activCourses ? '#E3562A' : '#BEBAB3' }} className="tab-bar-text">Courses</h4>
            </div>

            <div onClick={changeProfileStatus} className="profile-container">
                <img src={activeProfile ? profile : profilePerson} alt="profile-Person-svg" />
                <h4 style={{ color: activeProfile ? '#E3562A' : '#BEBAB3' }} className="tab-bar-text">Profile</h4>
            </div>

            <div onClick={changeSettingStatus} className="setting-container">
                <img src={activeSetting ? vector : vectorSet} alt="vector-Setting-svg" />
                <h4 style={{ color: activeSetting ? '#E3562A' : '#BEBAB3' }} className="tab-bar-text">Setting</h4>
            </div>
        </div>
    )
}

export default TabBar
