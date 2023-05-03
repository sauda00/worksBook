import React, {useState} from 'react';
import {BiBorderAll, BiSearch} from "react-icons/bi";
import {BsBag} from "react-icons/bs";
import {Navigate, NavLink} from "react-router-dom";
import axios from "axios";
import AllBooks from "../AllBooks";




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
                                        <div className="header--boxAll">
                                            <div className="header--boxAll__box">
                                                <input className='header--boxAll__box--txt' type="text" placeholder="search"/>
                                                <a className="header--boxAll__box--btn" href="#">
                                                    <BiSearch/>
                                                </a>
                                                <NavLink to={'/yourCart'}>
                                                    <BsBag className="point"/>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                 </div>
                                </div>
                    )
                }
export default Header;