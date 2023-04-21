import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import book from '../../img/books-hero.png'
import {Link} from "react-router-dom";


const BookShop = () => {
    return (
        <div id='bookShop'>
            <div className="container">
                <div className="bookShop">
                    <img src={book} alt=""/>
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
                        <h4>$99</h4>
                        <div className="bookShop--about__btn">
                           <Link to={'/allBooks/bookShop/yourCart'}><button>Add to Cart </button></Link>
                            <h6 className= 'click'><span>-</span> 1 <span>+</span></h6>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookShop;