import React from 'react'
import './style.css'

function Cards() {
    return (
        <div className="card">
            <div className="card__image">
                <img src="https://images.unsplash.com/photo-1610986603166-f78428624e76?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80" alt="" />
            </div>
            <div className="card__description">
                <div className="time">
                    <p>1h 20min</p>
                </div>
                <div className="course-title">
                    <h2>CSS Basics</h2>
                </div>
                <div className="course-intro">
                    <p>Learn basic styling of HTML elements</p>
                </div>
            </div>
            <div className="course-categories">
                <div className="course-category">
                    <p>CSS</p>
                </div>
                <div className="course-category">
                    <p>HTML</p>
                </div>
            </div>
        </div>
    )
}

export default Cards
