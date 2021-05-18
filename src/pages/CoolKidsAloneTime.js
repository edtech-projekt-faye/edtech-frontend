import React from 'react'
import CoolKids from '../images/CoolKidsAloneTime.png'
import Button from '../components/buttons/Index'
import Arrow from '../components/arrow/Index'
const CoolKidsAloneTime = () => {
    return (
        <div>
            <Arrow />

            <div>
                <img src={CoolKids} alt="" />
            </div>

            <Button />
        </div>
    )
}


export default CoolKidsAloneTime
