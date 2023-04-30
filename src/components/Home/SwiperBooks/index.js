import React, {useEffect, useState} from 'react';
import swBook from '../../../img/swBook.png'
import swBook2 from '../../../img/swBook2.png'
import swBook3 from '../../../img/swBook3.png'
import swBook4 from '../../../img/swBook4.png'
import swBook5 from '../../../img/swBook5.png'
import swBook6 from '../../../img/Books3.png'
import swBook7 from '../../../img/Books2.png'
import {Link} from "react-router-dom";
import Slider from "react-slick";
import axios from "axios";

const SwiperBooks = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll:2
    };
    console.log(settings)

    const [swBooks,setSwBooks] = useState([])
    const getSwBooks = ()=>{
        axios(`https://www.googleapis.com/books/v1/volumes?q=books-all&key=AIzaSyBBhhQuit1wetBp82EuxuD_6jJKH457OlU`)
            .then(res=>setSwBooks(res.data.items))
    }
useEffect(()=>{
    getSwBooks()
},[])
    console.log(swBooks)
    return (
        <div id="swiperBooks">
            <div className="container">
                <div className="swiperBooks">
                    <div className="swiperBooks--text">
                        <h1>Books</h1>
                        <Link to={'/allBooks'}><h3>View all</h3></Link>
                    </div>

                    <div className="swiperBooks--swiper">
                        <Slider {...settings}>
                            {
                                swBooks.map((el)=>{
                                    const img = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail
                                    return(

                                        <div className="swiperBooks--swiper__card">
                                            <img width={200} height={300} src={img} alt=""/>
                                            <h3>{el.volumeInfo.title}</h3>
                                        </div>

                                    )
                                })
                            }
                    {/*<div className="swiperBooks--swiper__swiper1">*/}
                    {/*    <img src={swBook} alt=""/>*/}
                    {/*    <h2>THE SUBTLE ART OF NOT GIVING A F*CK</h2>*/}
                    {/*    <p>by Tricia Hersey-</p>*/}
                    {/*</div>*/}
                    {/*<div className="swiperBooks--swiper__swiper1">*/}
                    {/*    <img src={swBook2} alt=""/>*/}
                    {/*    <h2>8 RULES OF LOVE</h2>*/}
                    {/*    <p>by Tricia Hersey-</p>*/}
                    {/*</div>*/}
                    {/*<div className="swiperBooks--swiper__swiper1">*/}
                    {/*    <img src={swBook3} alt=""/>*/}
                    {/*    <h2>RTHE CREATIVE ACT</h2>*/}
                    {/*    <p>by Tricia Hersey-</p>*/}
                    {/*</div>*/}
                    {/*<div className="swiperBooks--swiper__swiper1">*/}
                    {/*    <img src={swBook4} alt=""/>*/}
                    {/*    <h2>Rest Is Resistance: <br/> A Manifesto</h2>*/}
                    {/*    <p>by Tricia Hersey-</p>*/}
                    {/*</div>*/}
                    {/*    <div className="swiperBooks--swiper__swiper1">*/}
                    {/*    <img src={swBook5} alt=""/>*/}
                    {/*    <h2>THE BOY, THE MOLE, THE FOX AND THE HORSE</h2>*/}
                    {/*    <p>by Tricia Hersey-</p>*/}
                    {/*</div>*/}
                    {/*    <div className="swiperBooks--swiper__swiper1">*/}
                    {/*        <img src={swBook6} alt=""/>*/}
                    {/*        <h2>HARRY POTTER</h2>*/}
                    {/*        <p>by Tricia Hersey-</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="swiperBooks--swiper__swiper1">*/}
                    {/*        <img src={swBook7} alt=""/>*/}
                    {/*        <h2>Rest Is Resistance: <br/> A Manifesto</h2>*/}
                    {/*        <p>by Tricia Hersey-</p>*/}
                    {/*    </div>*/}
                    {/*    <div className="swiperBooks--swiper__swiper1">*/}
                    {/*        <img src={swBook} alt=""/>*/}
                    {/*        <h2>Rest Is Resistance: <br/> A Manifesto</h2>*/}
                    {/*        <p>by Tricia Hersey-</p>*/}
                    {/*    </div>*/}

                    {/*    <div className="swiperBooks--swiper__swiper1">*/}
                    {/*        <img src={swBook} alt=""/>*/}
                    {/*        <h2>Rest Is Resistance: <br/> A Manifesto</h2>*/}
                    {/*        <p>by Tricia Hersey-</p>*/}
                    {/*    </div>*/}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperBooks;