import './style.css';
import Search from '../search'
import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {
    return (
        <>
            <header className="desktop-header">
                <div className="logo">
                    <Link to="/">
                        <img src="/Logo_breit_W_T.png" alt="Logo edtech" />
                    </Link>
                </div>
                <div className="search-section">
                    <Search />
                </div>
                <nav>
                    <Link to="/">
                        <a className="nav-link">Home</a>
                    </Link>
                    <Link to="/courses">
                        <a className="nav-link">All Courses</a>
                    </Link>
                </nav>
            </header>
            <header className="mobile-header">
                <div className="mobile-header-container">
                    <div className="mobile-header-button">
                        <img src="/search-solid.svg" alt="" />
                    </div>
                    <div className="logo">
                        <Link to="/">
                            <img src="/Logo_breit_B_T.png" alt="Logo edtech" />
                        </Link>
                    </div>
                    <nav>
                        <NavLink exact={true} className='link-mobile' activeClassName='active-link' to="/dashboard">
                            <img src="/home-solid.svg" alt="" />
                            <a className="nav-link">Dashboard</a>
                        </NavLink>
                        <NavLink className='link-mobile' activeClassName='active-link' to="/courses">
                            <img src="/list-ul-solid.svg" alt="" />
                            <a className="nav-link">All Courses</a>
                        </NavLink>
                        <NavLink className='link-mobile' activeClassName='active-link' to="/profile">
                            <img src="/user-regular.svg" alt="" />
                            <a className="nav-link">Profile</a>
                        </NavLink>
                    </nav>
                    <div className="mobile-header-button">
                        <img src="/cog-solid.svg" alt="" />
                    </div>
                </div>    
            </header>
        </>
    )
}

export default Header
