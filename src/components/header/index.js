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

                   <div className="header--box">
                       <a className="header--box__btn" href="#">
                           <BiSearch/>
                       </a>
                           <input className='header--box__txt' type="text" placeholder="search"/>

                       </div>

                          <NavLink to={'/yourCart'}>
                              <BsBag className="header--header1__point"/>
                          </NavLink>
                       </div>
                   </div>
           </div>
    );
};

export default Header;