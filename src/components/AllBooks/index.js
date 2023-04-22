import React from 'react';
import mark from "../../image/mark.png"
import rules from "../../image/rules.png"
import act from "../../image/act.png"
import mole from "../../image/mole.png"
import potter from "../../image/potter.png"
import us from "../../image/us.png"
import start from "../../image/start.png"
import heart from "../../image/heart.png"
import shoes from "../../image/shoes.png"

const AllBooks = () => {
    return (
        <div id="genres">
            <div className="container">
                <div className="here">
                    <div className="here--books">
                        <h1>All Books</h1>
                        <p>Here you can find all the books you need</p>
                    </div>
                    <div className="here--books__filter">
                        <div className="here--books__filter--clear">
                            <h2>Filters</h2>
                            <a href="#">Clear filters</a>
                        </div>
                        <select>
                            <option>
                                Popular
                            </option>
                        </select>
                    </div>
                </div>
                <div className="genres">
                    <div className="genres--tab">
                        <div className='genres--tab__theme'>
                            <h3>Genres</h3>
                        </div>
                        <div className="genres--tab__label">
                            <label htmlFor="Autographed Books">Autographed Books</label>
                            <label htmlFor="Sci-Fi">Sci-Fi</label>
                            <label htmlFor="For kids">For kids</label>
                            <label htmlFor="For teenagers">For teenagers</label>
                            <label htmlFor="Finance">Finance</label>
                            <label htmlFor="Detective">Detective</label>
                            <label htmlFor="Romantic">Romantic</label>
                            <label htmlFor="Psychology">Psychology</label>
                            <label htmlFor="Self-Improvement">Self-Improvement</label>
                            <label htmlFor="Educational">Educational</label>
                            <label htmlFor="Literature">Literature</label>
                            <label htmlFor="Religion">Religion</label>

                        </div>
                        <div className="genres--tab__put">
                            <input type="radio" name='tabs' id="Autographed Books"/>
                            <input type="radio" name='tabs' id="Sci-Fi"/>
                            <input type="radio" name='tabs' id="For kids"/>
                            <input type="radio" name='tabs' id="For teenagers"/>
                            <input type="radio" name='tabs' id="Finance"/>
                            <input type="radio" name='tabs' id="Detective"/>
                            <input type="radio" name='tabs' id="Romantic"/>
                            <input type="radio" name='tabs' id="Psychology"/>
                            <input type="radio" name='tabs' id="Self-Improvement"/>
                            <input type="radio" name='tabs' id="Educational"/>
                            <input type="radio" name='tabs' id="Literature"/>
                            <input type="radio" name='tabs' id="Religion"/>
                        </div>

                    </div>
                    <div className="genres--photo">
                        <div className="genres--photo__table">
                            <img src={mark} alt=""/>
                            <h4>THE SUBTLE ART OF NOT GIVING A F*CK</h4>
                            <p>by Mark Manson</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={rules} alt=""/>
                            <h4>8 RULES OF LOVE</h4>
                            <p>by Jay Shetty</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={act} alt=""/>
                            <h4>THE CREATIVE ACT</h4>
                            <p>by Rick Rubin with Neil Strauss</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={mole} alt=""/>
                            <h4>THE BOY, THE MOLE, THE FOX AND THE HORSE</h4>
                            <p>by Charlie Mackesy</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={potter} alt=""/>
                            <h4>HARRY POTTER</h4>
                            <p>by J.K. Rowling</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={us} alt=""/>
                            <h4>IT ENDS WITH US</h4>
                            <p>by Colleen Hoover</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={start} alt=""/>
                            <h4>IT STARTS WITH US</h4>
                            <p>by Colleen Hoover</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={heart} alt=""/>
                            <h4>HEART BONES</h4>
                            <p>by Colleen Hoover</p>
                        </div>
                        <div className="genres--photo__table">
                            <img src={shoes} alt=""/>
                            <h4>SOMEONE ELSE'S SHOES</h4>
                            <p>by Jojo Moyes</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllBooks;