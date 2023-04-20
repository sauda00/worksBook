import React from 'react';
import {BiSearch} from "react-icons/bi";
import {BsBag} from "react-icons/bs";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
            <div className="header">
                   <div className="header--header1">
                       <a href="">Bookshop</a>
                       <a href="">Categories</a>
                       <a href="">Recent</a>
                       <a href="">Books</a>
                       <a href="">About Us</a>
                   </div>
                   <div className="header--header2">
                       <div className="header--header2__icon">
                           <BiSearch/>
                       </div>
                       <div className="header--header2__icon">
                           <BsBag className="icon2"/>
                       </div>
                       </div>
                   </div>
           </div>
        </div>
    );
};

export default Header;