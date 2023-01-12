import React from "react";
import '../../App.css'
import Cards from "../Cards";

export default function Menu () {
    return (
        <>
        <img src="/images/brickoven.jpg" alt='pizza oven' />
        <h1 className="menu">Menu</h1>
        <Cards />
        </>
    )
}