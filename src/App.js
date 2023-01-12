import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import {  Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Pages/Home";
import Menu from "./Components/Pages/Menu";
import OrderForm from "./Components/Pages/Pizza";




const App = () => {


  return (


    <div>
      <Navbar />
      <Switch>

        <Route exact path='/' component={Home} />
        <Route exact path='/menu' component={Menu} />
        <Route id="pizza-form" exact path='/pizza' component={OrderForm} />
      </Switch>
    </div>




  );
};
export default App;
