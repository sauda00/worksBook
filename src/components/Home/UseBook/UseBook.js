import React from 'react';
import Book4 from "../../../img/book4.png"

const UseBook = () => {
    return (
        <div id="useBook">
            <div className="container">
                <div className="useBook">
                        <h1>About Us</h1>
                    <div className="useBook--testBook">
                        <img src={Book4} alt=""/>
                        <p>We believe that books have the power to change lives, and <br/> we're dedicated to helping our customers find the perfect <br/> book for them. Whether you're looking for an escape from <br/> reality, an educational read, or a book to inspire you, we've <br/> got you covered.
                            Thank you for choosing to shop with us. <br/> We look forward to <br/> helping you discover your next favorite book!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseBook;