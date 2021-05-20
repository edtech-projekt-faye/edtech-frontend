import React from 'react'
import Header from '../components/header'
import { Link } from 'react-router-dom'

function Profile() {
    return (
        <div className="profile">
            <Header />
            <div className="profile-card">
                <div className="profile-card__user-img">
                    <img src="https://images.unsplash.com/photo-1543486958-d783bfbf7f8e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="" />
                </div>
                <div className="profile-card__user-info">
                    <p className="label">Your Name</p>
                    <p className="content">Super Coder</p>
                    <p className="label">Your Email</p>
                    <p className="content">supercoder@supercoder.com</p>
                    <div className="change-info">
                        <a href="#">Change your Details</a>
                    </div>
                </div>
                <div className="profile-card__courses">
                    <p className="label">Your Courses</p>
                    <p className="content">No courses so far.</p>
                    <Link to="/courses"><button className="button button-white">Start your first course!</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Profile
