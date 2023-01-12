import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css"

function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-signUp'>
                <p className='footer-subscription-heading'>
                    Keep up to date with our current offers
                </p>
               
                <form>
                    <input type="email" name="email" placeholder="Your Email"
                        className="footer-input" />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                    <p className='footer-unsubscribe'>
                    You can unsubscribe at any time.
                </p>
                </form>
            </section>
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to='/'>Careers</Link>
                        <Link to='/'>Terms of Service</Link>
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo">
                            BloomTech Pizza <i className="fa-solid fa-pizza-slice"></i>
                        </Link>
                    </div>
                    
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link className="social-icon-link twitter"
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <i className="fab fa-twitter"></i>
                        </Link>
                        <Link className="social-icon-link linkedin"
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className="fab fa-linkedin"></i>
                        </Link>
                        </div>
                        <div className="copywrite">
                        <small className="website-rights">BloomTech Pizza © 2023</small>
                        </div>
                </div>
            </section>
        </div >

    )
}

export default Footer