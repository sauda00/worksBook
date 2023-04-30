import React, {useEffect, useState} from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
// import book from '../../img/books-hero.png'
import {Link, NavLink, useParams} from "react-router-dom";
import axios from "axios";




const BookShop = () => {
    const [num, setNum] = useState(1)
    const [sum, setSum] = useState(99)
    const increment=()=>{
        setNum(num + 1)
        setSum(sum + 99)
    }
    const decrement=()=>{
        setNum(num !==1 ? num-1 : 1)
        setSum(sum !==99 ? sum-99 : 99)
    }


    const [books,setBooks] = useState([])
const booksId = useParams()
    const getBooks =(booksId)=>{
        axios(`https://books.google.com/books?id=${booksId}`)
            .then((res)=>setBooks(res))
    }
    useEffect(()=>{
        getBooks(booksId)
    },[])
    console.log(books)

    return (
        <div id='bookShop'>
            <div className="container">
                <div className="bookShop">
                    {
                        books.map((el)=>{
                            console.log(el)
                            // const img = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail
                            // return(
                            //     <img width={300} src={img} alt=""/>
                            //
                            // )
                        })
                    }

                    {/*<img src={book} alt=""/>*/}
                    <div className="bookShop--about">
                        <div className="bookShop--about__title">
                            <h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                            <AiOutlineHeart className='aioutline'/>
                            <AiOutlineShareAlt className='aioutline'/>
                        </div>

                        <span>by Charlie Mackesy</span>
                        <p>Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p>
                        <h4>${sum}</h4>
                        <div className="bookShop--about__btn">
                           <Link to={'/allBooks/bookShop/yourCart'}><button>Add to Cart </button></Link>
                            <h6 className= 'click'><span onClick={decrement}>-</span> {num} <span onClick={increment}>+</span></h6>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookShop;