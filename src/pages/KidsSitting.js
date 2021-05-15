import React from 'react'
import KidsSittingImg from '../images/KidsSitting.png'
import Button from '../components/buttons/index'
import Arrow from '../components/arrow/Index'

const KidsSitting = () => {
    return (
        <div>
            <Arrow />

            <div>
                <img src={KidsSittingImg} alt="" />
            </div>

            <Button />
        </div>
    )
}

export default KidsSitting
