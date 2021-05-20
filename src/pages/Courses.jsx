import React from 'react'
import Cards from '../components/cards'
import Search from '../components/search'
import { Breakpoint, BreakpointProvider } from 'react-socks'
import Header from '../components/header'
import { HidingHeader } from 'hiding-header-react'


function Courses() {
    return (
        <>
            <Header />
            <div className='mobile-overview-wrapper'>
                <Breakpoint medium down>
                    <Search />
                </Breakpoint>
                <div className="courses-title">
                    <h2>Start learning today!</h2>
                    <p>Choose one of our free courses and learn web development on the go</p>
                </div>
                <div className="courses-overview">
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Courses
