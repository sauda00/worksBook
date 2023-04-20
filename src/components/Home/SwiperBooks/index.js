import React from 'react';
import swBook from "../../../assets/imgA/swBook.png";
import swBook2 from "../../../assets/imgA/swBook2.png";
import swBook3 from "../../../assets/imgA/swBook3.png";
import swBook4 from "../../../assets/imgA/swBook4.png";
import swBook5 from "../../../assets/imgA/swBook5.png";
import swBook6 from "../../../assets/imgA/Books3.png";
import swBook7 from "../../../assets/imgA/Books2.png";



const SwiperBooks = () => {
    return (
        <div id="swiperBooks">
                <div className="swiperBooks">
                    <h1>Books</h1>
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
    );
};

export default SwiperBooks;