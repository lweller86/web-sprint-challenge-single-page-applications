import React from "react";
import CardItem from "./CardItem";
import './Cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Pizza Options</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        src='images/cheese_pizza.jpg'
                        alt="cheese Pizza"
                        text='World Famous Three Cheese Pizza'
                        path='/order-form' />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        src='images/pepperoni_pizza.jpg'
                        alt="pepperoni pizza"
                        text='World Famous Pepperoni Pizza'
                        path='/order-form' />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        src='images/BBQ_chicken_pizza.jpg'
                        alt="bbq pizza"
                        text='World Famous BBQ Chicken Pizza'
                        path='/order-form' />
                    </ul>
                    <ul className="cards-items">
                        <CardItem
                        src='images/custom.jpg'
                        alt="pizza dough"
                        text='Design Your Own World Famous Pizza'
                        path='/order-form' />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards