import React, {useState} from 'react';
import { BiSearch} from "react-icons/bi";
import {BsBag} from "react-icons/bs";
import { NavLink} from "react-router-dom";
import axios from "axios";
import AllBooks from "../AllBooks";
=======
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

    const burger =()=>{
        const burgerMenu = document.querySelector('.burger')
        const w = document.querySelector('.www')
        burgerMenu.style.display='block'
        w.style.display='none'
        }
        const burgerTwo =()=>{
            const w = document.querySelector('.www')
            const burgerMenu = document.querySelector('.burger')
            w.style.display='block'
            burgerMenu.style.display='none'
        }


        const input =(e)=>{
        if(!e.target.classList.contains('active')){
            e.target.classList.add('active')
            const inp = document.querySelector('.header--boxAll__box--txt')
            inp.style.width = '150px'
            inp.style.background = '#19272E'
            inp.style.borderRadius = '30px'
            inp.style.padding = '0 0 0 10px'
        }else {
            e.target.classList.remove('active')
            const inp = document.querySelector('.header--boxAll__box--txt')
            inp.style.width = '0'
            inp.style.background = 'none'
            inp.style.borderRadius = '30px'
            inp.style.padding = '0'
        }
        }
            return (
                <div id="header">
                    <div className="container">
                                    <div className="header">
                                        <div className="header--header1">
                                            <NavLink to={'/'}>Bookshop</NavLink>
                                            <div className="header--header1__menu">
                                            <NavLink to={'/categories'}>Categories</NavLink>
                                            <NavLink to={'/recent'}>Recent</NavLink>
                                            <NavLink to={'/allBooks'}>Books</NavLink>
                                            <NavLink to={'/useBook'}>About Us</NavLink>
                                        </div>
                                        </div>
                                        <div className="header--boxAll">
                                            <div className="header--boxAll__box">
                                                <input className='header--boxAll__box--txt' type="text" placeholder="search"/>
                                                <a className="header--boxAll__box--btn" href="#">
                                                    <BiSearch/>
                                                    <BiSearch onClick={input}/>
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

                                    </div>
                        <div className="www" onClick={burger}>
                            <div className="www--w"></div>
                            <div className="www--w"></div>
                            <div className="www--w"></div>
                        </div>
                        <div className="burger">
                            <h2 onClick={burgerTwo} className='burger--close'>&#x2715;</h2>
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