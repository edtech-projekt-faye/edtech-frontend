import React from 'react'
import Cards from '../components/cards'
import Search from '../components/search'
// import { Breakpoint, BreakpointProvider } from 'react-socks'

function Courses() {
    return (
        <div className='mobile-overview-wrapper'>
            {/* <Breakpoint large down> */}
                <Search />
            {/* </Breakpoint> */}
            <div className="courses-overview">
                <Cards />
            </div>
        </div>
    )
}

export default Courses
