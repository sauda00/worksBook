import React from 'react';
import alien from "../../../img/inaplat.svg"
import giraffe from "../../../img/jiraf.svg"
import brain from "../../../img/brain.svg"
import apple from "../../../img/aplle.svg"
import spy from "../../../img/uury.svg"
import money from "../../../img/money.svg"
import {Link} from "react-router-dom";


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
                        <div className="page--photo__photo1">
                            <img src={alien} alt=""/>
                            <p>Sci-Fi</p>
                        </div>
                        <div className="page--photo__photo1">
                            <img src={giraffe} alt=""/>
                            <p>For kids-</p>
                        </div>
                        <div className="page--photo__photo1">
                            <img src={brain} alt=""/>
                            <p>Psychology</p>
                        </div>
                        <div className="page--photo__photo1">
                            <img src={apple} alt=""/>
                            <p>Romantic</p>
                        </div>
                        <div className="page--photo__photo1">
                            <img src={spy} alt=""/>
                            <p>Detective</p>
                        </div>
                        <div className="page--photo__photo1">
                            <img src={money} alt=""/>
                            <p>Finance</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pagebook;