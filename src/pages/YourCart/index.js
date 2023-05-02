import React, {useState} from 'react';

import card from '../../img/books-hero.png'
import card1 from '../../img/cards-1.png'
import card2 from '../../img/cards-2.png'
import {AiOutlineRight} from "react-icons/ai";
import {Link} from "react-router-dom";

import BookShop from "../Bookshop";





const YourCart = () => {
    const [accordion,setAccordion] = useState(true)
    const [selectt,setSelectt] = useState(false)
        return (
        <div id='yourCart'>
            <div className="container">
                <div className="yourCart">
                    <div className="yourCart--about">
                        <h1>YourCart</h1>

                            <p>Not ready to checkout? <Link to={'/allBooks/bookShop/:booksId'}><span>Continue Shopping</span></Link> </p>



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
                                <details>
                                    <div>
                                        <select>
                                            <option>BAI TUSHUM BANK</option>
                                            <option>KEREMET BANK</option>
                                            <option>OPTIMA BANK</option>
                                            <option>KYRZSTAN BANK</option>
                                            <option>MBANK BANK</option>
                                            <option>BAKAI BANK</option>
                                            <option>DEMIR BANK</option>
                                        </select>
                                        <input type={"number"} placeholder="Номер Карты"/> <br/>
                                        <input type={"number"} placeholder="Сумма Перевода"/> <br/>
                                        <input type={"text"} placeholder="Фамилия Имия"/>
                                    </div>
                                    <summary>
                                        <p>transfer by card</p>
                                        <h6 className="h6">Select Method<AiOutlineRight
                                            onClick={() => setAccordion(!accordion)}
                                            style={{
                                                transform: accordion ? "" : "rotate(90deg)",
                                            }}
                                        /></h6>
                                    </summary>
                                </details>
                            </div>
                            <div className="yourCart--cardsAll__summary--shoping">


                                <details>
                                    <div>
                                        <select>
                                            <option>BAI TUSHUM BANK</option>
                                            <option>KEREMET BANK</option>
                                            <option>OPTIMA BANK</option>
                                            <option>KYRZSTAN BANK</option>
                                            <option>MBANK BANK</option>
                                            <option>BAKAI BANK</option>
                                            <option>DEMIR BANK</option>
                                        </select>
                                        <input type={"number"} placeholder="Сумма Перевода"/> <br/>
                                        <input type={"number"} placeholder="Номер Реквизита"/> <br/>
                                        <input type={"text"} placeholder="Фамилия Имия"/>
                                    </div>
                                    <summary>
                                        <p>transfer by card</p>
                                        <h6>Select Method
                                            <AiOutlineRight
                                            onClick={() => setAccordion(!accordion)}
                                            style={{
                                                transform: accordion ? "" : "rotate(90deg)",
                                            }}
                                        />
                                        </h6>
                                    </summary>
                                </details>
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

