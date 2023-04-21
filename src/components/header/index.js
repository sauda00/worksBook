import React from 'react';
import {BiSearch} from "react-icons/bi";
import {BsBag} from "react-icons/bs";
import {Navigate, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
            <div className="header">
                   <div className="header--header1">
                       <NavLink to={'/'}>Bookshop</NavLink>
                       <NavLink to={'/categories'}>Categories</NavLink>
                       <NavLink to={'/recent'}>Recent</NavLink>
                       <NavLink to={'/allBooks'}>Books</NavLink>
                       <NavLink to={'/useBook'}>About Us</NavLink>
                   </div>
                   <div className="header--header2">
                       <div className="header--header2__icon">
                           <BiSearch/>
                       </div>
                       <div className="header--header2__icon">
                          <NavLink to={'/yourCart'}><BsBag className="header--header2__icon--icon2"/></NavLink>
                       </div>
                       </div>
                   </div>
           </div>
        </div>
    );
};

export default Header;