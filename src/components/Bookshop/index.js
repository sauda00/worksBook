import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShareAlt } from "react-icons/ai";
import book from '../../imgsan/books-hero.png'


const BookShop = () => {
    return (

        <div>
            <h2>

            </h2>

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
                            <button>Add to Cart </button>
                            <h6 className= 'click'><span>-</span> 1 <span>+</span></h6>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookShop;