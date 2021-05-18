import React from 'react'
import Cards from '../components/cards'
import Search from '../components/search'
import { Breakpoint, BreakpointProvider } from 'react-socks'
import Header from '../components/header'

function Courses() {
    return (
        <>
        <Header />
            <div className='mobile-overview-wrapper'>
                <Breakpoint medium down>
                    <Search />
                </Breakpoint>
                <div className="courses-overview">
                    <Cards />
                </div>
            </div>
        </>
    )
}

export default Courses
