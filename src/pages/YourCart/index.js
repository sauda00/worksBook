import React, {useEffect, useState} from 'react';

// import card from '../../img/books-hero.png'
import card1 from '../../img/cards-1.png'
import card2 from '../../img/cards-2.png'
import {AiOutlineRight} from "react-icons/ai";
import {Link, useParams} from "react-router-dom";
// import axios from "axios";


import doneImg from '../../img/done.avif'
import axios from "axios";




const YourCart = ({num,sum,books}) => {
    const [accordion,setAccordion] = useState(true)
    // const [selectt,setSelectt] = useState(false)

    const removeCard=()=>{
        const card = document.querySelector('.yourCart--cardsAll__cards--card')
       card.remove()
    }
const doneModal =()=>{
const doneModals = document.querySelector('.doneModals')
const doneBg = document.querySelector('.doneBg')
doneModals.style.display='block'
doneBg.style.display='block'

}
const doneModalTwo =()=>{
    const doneModals = document.querySelector('.doneModals')
    const doneBg = document.querySelector('.doneBg')
    doneModals.style.display='none'
    doneBg.style.display='none'


}
    const {booksId} = useParams()
    const [bookImg,setBookImg] = useState({})


    const getBooks =()=>{
        axios(`https://www.googleapis.com/books/v1/volumes/${booksId}`)
            .then((res)=>setBookImg(res.data.volumeInfo.imageLinks.thumbnail))
    }
    useEffect(()=>{
        getBooks()
    },[])
   const adapBtn2 =()=>{
        const btn = document.querySelector('.yourCart--cardsAll__summary')
        const btnBg = document.querySelector('.adapBg')
        const btnClose = document.querySelector('.adapBtnClose')
       btn.style.display='block'
       btnBg.style.display='block'
       btnClose.style.display='block'
   }
   const adapBtnClose=()=>{
       const btn = document.querySelector('.yourCart--cardsAll__summary')
       const btnBg = document.querySelector('.adapBg')
       const btnClose = document.querySelector('.adapBtnClose')
       btn.style.display='none'
       btnBg.style.display='none'
       btnClose.style.display='none'
   }
        return (
        <div id='yourCart'>
            <div className="container">
                <div className="yourCart">
                    <div className="yourCart--about">
                        <h1>YourCart</h1>
                            <p>Not ready to checkout? <Link to={`/allBooks}`}><span>Continue Shopping</span></Link> </p>
                    </div>
                    <div className="yourCart--cardsAll">
                        <div className="yourCart--cardsAll__cards">

                            <div className="yourCart--cardsAll__cards--card">
                                {/*<img src={card} alt=""/>*/}
                                <img width={300} height={450}
                                     src={`${bookImg}`}
                                     alt='no img'/>

                                <div className="yourCart--cardsAll__cards--card__imgTitle">
                                    {/*<h1>THE BOY, THE MOLE, THE FOX AND THE HORSE</h1>*/}
                                    <h1>{books.volumeInfo?.title}</h1>
                                    <span>{books.volumeInfo?.authors}</span>
                                    {/*<span>by Charlie Mackesy</span>*/}
                                    <p>Quantity: {num}</p>
                                    <h6>${sum}</h6>
                                </div>
                                <h5 onClick={removeCard}>Remove</h5>
                            </div>
                            <div className="yourCart--cardsAll__cards--card">
                                <img src={card1} alt=""/>
                                <div className="yourCart--cardsAll__cards--card__imgTitle">
                                    <h1>THE SUBTLE ART OF NOT GIVING A F*CK</h1>
                                    <span>by Mark Manson</span>
                                    <p>Quantity: 1</p>
                                    <h6>$99</h6>
                                </div>
                                <h5 onClick={removeCard}>Remove</h5>
                            </div>
                            <div className="yourCart--cardsAll__cards--card">
                                <img src={card2} alt=""/>
                                <div className="yourCart--cardsAll__cards--card__imgTitle">
                                    <h1>HARRY POTTER</h1>
                                    <span>by J.K. Rowling</span>
                                    <p>Quantity: 1</p>
                                    <h6>$99</h6>
                                </div>
                                <h5 onClick={removeCard}>Remove</h5>
                            </div>
                        </div>
                        <div className="yourCart--cardsAll__summary">
                            <h1>Order Summary</h1>
                            <h3 onClick={adapBtnClose} className='adapBtnClose' style={{position:"absolute",margin:'-94px 0 0 350px',display:'none'}}>&#x2715;</h3>
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
                                        <p>Payment card</p>
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
                                        <p>Cash</p>
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
                                <h6>${sum}</h6>
                            </div>
                            <button onClick={doneModal}>Continue to checkout</button>
                        </div>
                    </div>
                </div>
                <div className="doneModals">
                    <img onClick={doneModalTwo} width={500} src={doneImg} style={{cursor:'pointer',borderRadius:'20px'}} alt=""/>
                </div>
                <div className="doneBg" style={{position:'fixed',background:'green',top:'0',left:'0',right:'0',bottom:'0',display:'none',zIndex:2}}></div>
                <center><button onClick={adapBtn2} className='adapBtn'>Continue to checkout</button></center>
                <div className="adapBg" style={{position:"fixed",left:'0',top:'0',right:'0',bottom:'0',background:"white",zIndex:1,display:"none"}}></div>
            </div>
        </div>
    );
};


export default YourCart;

