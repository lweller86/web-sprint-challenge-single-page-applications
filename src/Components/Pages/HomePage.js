import React from "react";
import '../../App.css'
import './HomePage.css'
import { Button } from "../Button";




function HomePage () {

    return(
    <div className='menu-container'>
        <img src="/images/brickoven.jpg" alt='pizza oven' />
        <h1>Your Pizza Awaits</h1>
        <div className='home-btns'>
        <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            Menu
        </Button>
        <Button
            id="order-pizza"
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
        >
            order-pizza
        </Button>
        </div>
    </div>
    )
}

export default HomePage