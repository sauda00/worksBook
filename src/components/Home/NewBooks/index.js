import React from 'react';

import Books1 from "../../../img/Books1.png"
import Books2 from "../../../img/Books2.png"
import Books3 from "../../../img/Books3.png"


const NewBooks = () => {
    return (
        <div id="newBooks">
            <div className="container">
                <div className="newBooks">
                        <h1>New Books</h1>
                    <div className="newBooks--books">
                        <div className="newBooks--books__books1">
                            <img src={Books1} alt=""/>
                            <h2>The Climate Book: <br/> The Facts and the <br/> Solutions</h2>
                            <p>by Greta Thunberg</p>
                        </div>
                        <div className="newBooks--books__books2">
                            <img src={Books2} alt=""/>
                            <h2>Rest Is Resistance: <br/> A Manifesto</h2>
                            <p>by Tricia Hersey-</p>
                        </div>
                        <div className="newBooks--books__books1">
                            <img src={Books3} alt=""/>
                            <h2>A New Name: <br/> Septology VI-VII</h2>
                            <p>by Jon Fosse</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewBooks;