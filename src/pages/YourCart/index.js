import React from 'react';

import card from '../../img/books-hero.png'
import card1 from '../../img/cards-1.png'
import card2 from '../../img/cards-2.png'
import { AiOutlineRight } from "react-icons/ai";
import {Link} from "react-router-dom";



const YourCart = () => {
    return (
        <div id='yourCart'>
            <div className="container">
                <div className="yourCart">
                    <div className="yourCart--about">
                        <h1>YourCart</h1>
                            <p>Not ready to checkout? <Link to={'/allBooks/bookShop'}><span>Continue Shopping</span></Link> </p>
                    </div>
                    <div className="yourCart--cardsAll">
                        <div className="yourCart--cardsAll__cards">
                            <div className="yourCart--cardsAll__cards--card">
                                <img src={card} alt=""/>
                                <div className="yourCart--cardsAll__cards--card__imgTitle">
                                    <h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>
                                    <span>by Charlie Mackesy</span>
                                    <p>Quantity: 1</p>
                                    <h6>$99</h6>
                                </div>
                                <h5>Remove</h5>
                            </div>
                            <div className="yourCart--cardsAll__cards--card">
                                <img src={card1} alt=""/>
                                <div className="yourCart--cardsAll__cards--card__imgTitle">
                                    <h1>THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                                    <span>by Mark Manson</span>
                                    <p>Quantity: 1</p>
                                    <h6>$99</h6>
                                </div>
                                <h5>Remove</h5>
                            </div>
                            <div className="yourCart--cardsAll__cards--card">
                                <img src={card2} alt=""/>
                                <div className="yourCart--cardsAll__cards--card__imgTitle">
                                    <h1>HARRY POTTER</h1>
                                    <span>by J.K. Rowling</span>
                                    <p>Quantity: 1</p>
                                    <h6>$99</h6>
                                </div>
                                <h5>Remove</h5>
                            </div>
                        </div>
                        <div className="yourCart--cardsAll__summary">
                            <h1>Order Summary</h1>
                            <div className="yourCart--cardsAll__summary--shoping">
                                <p>Shipping</p>
                                <h6>Select Method <AiOutlineRight/></h6>
                            </div>
                            <div className="yourCart--cardsAll__summary--shoping">
                                <p>Shipping</p>
                                <h6>Select Method <AiOutlineRight/></h6>
                            </div>
                            <div className="yourCart--cardsAll__summary--total">
                                <p>Total</p>
                                <h6>$188</h6>
                            </div>
                            <button>Continue to checkout</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};




export default YourCart;
