import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import './Navbar.css'



function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link
                        to="/"
                        className="navbar-logo" 
                        onClick={closeMobileMenu}>
                        BloomTech Pizza
                        <i className="fa-solid fa-pizza-slice"></i>
                    </Link>
                    <div className='menu-icon' 
                        onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link 
                            to='/' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            to='/menu' 
                            className='nav-links' 
                            onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link 
                            to='/pizza' 
                            className='nav-links-mobile' 
                            id='order-pizza' 
                            >
                                order-pizza
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>order-pizza</Button>}
                </div>
            </nav>

        </>
    )
}

export default Navbar