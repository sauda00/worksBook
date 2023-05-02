import React, {useState} from 'react';
import {BiBorderAll, BiSearch} from "react-icons/bi";
import {BsBag} from "react-icons/bs";
import {Navigate, NavLink} from "react-router-dom";
// import axios from "axios";
// import AllBooks from "../AllBooks";




const Header = () => {

    // const [search,setSearch] = useState("")
    // const [books,setBooks] = useState([])
    // const searchBooks =(e)=> {
    //     if (e.key === 'Enter') {
    //         axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBBhhQuit1wetBp82EuxuD_6jJKH457OlU`)
    //
    //         const [search, setSearch] = useState("")
    //         const [books, setBooks] = useState([])
    //         const searchBooks = (e) => {
    //             if (e.key === 'Enter') {
    //                 axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAaebEgHTVWHIhfiv--MWYjjxsUNyvn0Hc`)
    //
    //                     // .then(res=>console.log(res.data.items))
    //                     .then(res => setBooks(res.data.items))
    //             }
    //         }
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
                        <div className="www">
                            <div className="www--w"></div>
                            <div className="www--w"></div>
                            <div className="www--w"></div>
                        </div>
                        <div className="burger">
                            <p className='burger--close'>&#x2715;</p>
                            <div className="burger--menu">
                                <NavLink to={'/'}>Bookshop</NavLink>
                                <NavLink to={'/categories'}>Categories</NavLink>
                                <NavLink to={'/recent'}>Recent</NavLink>
                                <NavLink to={'/allBooks'}>Books</NavLink>
                                <NavLink to={'/useBook'}>About Us</NavLink>
                            </div>
                        </div>
                                </div>
                                </div>
            )


        }



export default Header;