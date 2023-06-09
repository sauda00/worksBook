import React, { useEffect} from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
// import book from '../../img/books-hero.png'
import {Link, useParams} from "react-router-dom";
import axios from "axios";



// import axios from "axios";


const BookShop = ({num,sum,increment,decrement,books,setBooks}) => {
const {booksId} = useParams()
    const getBooks =()=>{
        axios(`https://www.googleapis.com/books/v1/volumes/${booksId}`)
            .then((res)=>setBooks(res.data))
    }
    useEffect(()=>{
        getBooks()
    },[])

    console.log(books)
    return (
        <div id='bookShop'>
            <div className="container">
                <div className="bookShop">
                    {/*<h1>{books && books.volumeInfo && books.volumeInfo.title}</h1>*/}
                    <img style={{borderRadius:'10px'}} width={300} height={450}
                         src={`https://books.google.com/books/content?id=${booksId}&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`}
                         alt={books.volumeInfo?.title}
                    />
                    {/*<img src={book} alt=""/>*/}
                    <div className="bookShop--about">
                        <div className="bookShop--about__title">
                            <h1>{books.volumeInfo?.title}</h1>
                            <AiOutlineHeart className='aioutline'/>
                            <AiOutlineShareAlt className='aioutline'/>
                        </div>

                        <span>{books.volumeInfo?.authors}</span>
                        <p>{books.volumeInfo?.description.slice(0,135)}</p>
                        <h4>${sum}</h4>
                        <div className="bookShop--about__btn">
                           <Link to={`/allBooks/bookShop/yourCart/${booksId}`}><button>Add to Cart </button></Link>
                            <h6 className= 'click'><span onClick={decrement}>-</span> {num} <span onClick={increment}>+</span></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default BookShop;