import React, {useEffect, useState} from 'react';

import swBook from '../../../img/swBook.png'
import swBook2 from '../../../img/swBook2.png'
import swBook3 from '../../../img/swBook3.png'
import swBook4 from '../../../img/swBook4.png'
import swBook5 from '../../../img/swBook5.png'
import swBook6 from '../../../img/Books3.png'
import swBook7 from '../../../img/Books2.png'
import {Link} from "react-router-dom";

const SwiperBooks = () => {
    const [SwiperBooks, setSwiperBooks] = useState([])

    const getAllSwiperBooks = async () => {
        const url = await fetch(`https://64479f0850c253374429d696.mockapi.io/task`)
        const data = await url.json()
        setSwiperBooks(data)
    }
    // const [SwiperBooks, setSwiperBooks] = useState([])
    //
    // const getSwiperBooks = async (key) => {
    //     const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
    //     const data = await response.data
    //     setSwiperBooks(data.results)
    // }

    useEffect(() => {
        getAllSwiperBooks()
    }, [])

    return (
        <div id="swiperBooks">
            <div className="container">
                <div className="swiperBooks">
                    <div className="swiperBooks--text">
                        <h1>Books</h1>
                        <Link to={'/allBooks'}><h3>View all</h3></Link>
                    </div>

                    <div className="swiperBooks--swiper">
                    <div className="swiperBooks--swiper__swiper1">
                        <img src={swBook} alt=""/>
                        <h2>THE SUBTLE ART OF NOT GIVING A F*CK</h2>
                        <p>by Tricia Hersey-</p>
                    </div>
                    <div className="swiperBooks--swiper__swiper1">
                        <img src={swBook2} alt=""/>
                        <h2>8 RULES OF LOVE</h2>
                        <p>by Tricia Hersey-</p>
                    </div>
                    <div className="swiperBooks--swiper__swiper1">
                        <img src={swBook3} alt=""/>
                        <h2>RTHE CREATIVE ACT</h2>
                        <p>by Tricia Hersey-</p>
                    </div>
                    <div className="swiperBooks--swiper__swiper1">
                        <img src={swBook4} alt=""/>
                        <h2>Rest Is Resistance: <br/> A Manifesto</h2>
                        <p>by Tricia Hersey-</p>
                    </div>
                        <div className="swiperBooks--swiper__swiper1">
                        <img src={swBook5} alt=""/>
                        <h2>THE BOY, THE MOLE, THE FOX AND THE HORSE</h2>
                        <p>by Tricia Hersey-</p>
                    </div>
                        <div className="swiperBooks--swiper__swiper1">
                            <img src={swBook6} alt=""/>
                            <h2>HARRY POTTER</h2>
                            <p>by Tricia Hersey-</p>
                        </div>
                        <div className="swiperBooks--swiper__swiper1">
                            <img src={swBook7} alt=""/>
                            <h2>Rest Is Resistance: <br/> A Manifesto</h2>
                            <p>by Tricia Hersey-</p>
                        </div>
                        <div className="swiperBooks--swiper__swiper1">
                            <img src={swBook} alt=""/>
                            <h2>Rest Is Resistance: <br/> A Manifesto</h2>
                            <p>by Tricia Hersey-</p>
                        </div>

                        <div className="swiperBooks--swiper__swiper1">
                            <img src={swBook} alt=""/>
                            <h2>Rest Is Resistance: <br/> A Manifesto</h2>
                            <p>by Tricia Hersey-</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SwiperBooks;