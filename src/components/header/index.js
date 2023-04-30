import React, {useState} from 'react';
import {BiBorderAll, BiSearch} from "react-icons/bi";
import {BsBag} from "react-icons/bs";
import {Navigate, NavLink} from "react-router-dom";
import axios from "axios";
import AllBooks from "../AllBooks";




const Header = () => {

    const [search,setSearch] = useState("")
    const [books,setBooks] = useState([])
    const searchBooks =(e)=>{
        if(e.key === 'Enter'){
            axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBBhhQuit1wetBp82EuxuD_6jJKH457OlU`)

    const [search, setSearch] = useState("")
    const [books, setBooks] = useState([])
    const searchBooks = (e) => {
        if (e.key === 'Enter') {
            axios(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyAaebEgHTVWHIhfiv--MWYjjxsUNyvn0Hc`)

                // .then(res=>console.log(res.data.items))
                .then(res => setBooks(res.data.items))
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
                    <a className="header--boxAll__box--btn" href="#">
                        <BiSearch/>
                    </a>
                    <input value={search} onChange={e=>setSearch(e.target.value)} className='header--boxAll__box--txt' type="text" placeholder="search" onKeyPress={searchBooks}/>

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
                            <input value={search} onChange={e => setSearch(e.target.value)}
                                   className='header--boxAll__box--txt' type="text" placeholder="search"
                                   onKeyPress={searchBooks}/>
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
    );
};

export default Header;