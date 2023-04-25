import React from 'react';
import {BsFacebook, BsInstagram, BsLinkedin, BsTelegram, BsTwitter, BsWhatsapp} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <div id="footer">
         <div className="container">
             <div className="footer">
                 <div className="footer--nav">
                     <h1>Sign up for our newsletter</h1>
                     <p>Be the first to know about our special offers, news, and updates.</p>
                     <input type="text" placeholder="Email Address"/>
                 </div>

                <div className="footer--nav2">

                    <div className="footer--nav2__nav3">
                        <NavLink to={'/'}>Bookshop</NavLink>
                        <NavLink to={'/categories'}>Categories</NavLink>
                        <NavLink to={'/recent'}>Recent</NavLink>
                        <NavLink to={'/allBooks'}>Books</NavLink>
                        <NavLink to={'/useBook'}>About Us</NavLink>
                    </div>

                    <div className="footer--nav2__nav4">
                        <div className="footer--nav2__nav4--tel">
                            <h1>contacts</h1>
                            <div><BsWhatsapp className="footer--nav2__nav4--tel__vk"/><a href="tel:+996">0700 232 400</a></div>
                            <div><BsWhatsapp className="footer--nav2__nav4--tel__vk"/><a href="tel:+996">0773 400 551</a></div>
                        </div>
                        <div className='footer--nav2__nav4--in'>
                            <a href="https://www.instagram.com/motion_web/"><BsInstagram/></a>
                            <a href="#"><BsLinkedin/></a>
                            <a href="#"><BsTwitter/></a>
                            <a href="#"><BsFacebook/></a>
                            <a href="#"><BsTelegram/></a>
                        </div>
                    </div>
                </div>



             </div>
         </div>
        </div>
    );
};

export default Footer;