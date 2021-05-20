import React from 'react'
import Header from '../components/header'
import Favorites from '../components/favorites'
import {Link} from 'react-router-dom'

function Dashboard() {
    return (
        <div className="dashboard">
            <Header />
            <div className="greeting">
                <h2>Hi there, <span>Super Coder</span>!</h2>
                <p>Welcome back. You may want to have a look at your courses below:</p>
            </div>
            <h2 className="title">Your Favorites</h2>
            <Favorites />
            <br />
            <div className="started">
                <h2 className="title">Courses you have started</h2>
                <p className="not-started">You haven't started any courses (yet!)</p>
                <Link to="/courses"><button className="button button-blue">Start your first course!</button></Link>
            </div>
        </div>
    )
}

export default Dashboard
