import React from 'react';
import alien from "../../../assets/imgA/inaplat.svg"
import giraffe from "../../../assets/imgA/jiraf.svg"
import brain from "../../../assets/imgA/brain.svg"
import apple from "../../../assets/imgA/aplle.svg"
import spy from "../../../assets/imgA/uury.svg"
import money from "../../../assets/imgA/money.svg"


const Pagebook = () => {
    return (
        <div id="Page">
            <div className="container">
                <div className="page">
                    <h1>Genres</h1>
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