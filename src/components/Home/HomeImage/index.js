import React from 'react';
import Pagebook from "../Pagebook";
import NewBooks from "../NewBooks";
import SwiperBooks from "../SwiperBooks";
import UseBook from "../UseBook/UseBook";


const HomeImage = () => {
    return (
        <>
        <div id="Image">
            <div className="container">
                <div className="img">
                        <h1>Welcome to our Bookshop</h1>
                        <p>A place where you can get all the books you want!</p>
                </div>
            </div>
        </div>
            <Pagebook/>
            <NewBooks/>
            <SwiperBooks/>
            <UseBook/>
        </>
    );
};

export default HomeImage;