import React from 'react';
import alien from "../../../img/inaplat.svg"
import giraffe from "../../../img/jiraf.svg"
import brain from "../../../img/brain.svg"
import apple from "../../../img/aplle.svg"
import spy from "../../../img/uury.svg"
import money from "../../../img/money.svg"
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";





import { Pagination } from "swiper";

const Pagebook = () => {
    return (
        <div id="Page">
            <div className="container">
                <div className="page">
                    <div className="page--text">
                        <h1>Genres</h1>
                        <Link to={'/allBooks'}><h3>View all</h3></Link>
                    </div>
                    <div className="page--photo">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        centeredSlides={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide><div className="page--photo__photo1">
                            <img src={alien} alt=""/>
                            <p>Sci-Fi</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="page--photo__photo1">
                            <img src={giraffe} alt=""/>
                            <p>For kids-</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="page--photo__photo1">
                            <img src={brain} alt=""/>
                            <p>Psychology</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="page--photo__photo1">
                            <img src={apple} alt=""/>
                            <p>Romantic</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="page--photo__photo1">
                            <img src={spy} alt=""/>
                            <p>Detective</p>
                        </div></SwiperSlide>
                        <SwiperSlide><div className="page--photo__photo1">
                            <img src={money} alt=""/>
                            <p>Finance</p>
                        </div></SwiperSlide>
                    </Swiper>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pagebook;