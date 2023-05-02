import React, {useEffect, useState} from 'react';
// import mark from "../../img/mark.png"
// import rules from "../../img/rules.png"
// import act from "../../img/act.png"
// import mole from "../../img/mole.png"
// import potter from "../../img/potter.png"
// import us from "../../img/us.png"
// import start from "../../img/start.png"
// import heart from "../../img/heart.png"
// import shoes from "../../img/shoes.png"
import {Link} from "react-router-dom";
import axios from "axios";
import {GoSettings} from "react-icons/go";
import BookCard from "../BookCard";


// import "media.scss"


const AllBooks = () => {
    const [sum,setSum] = useState('popular')
  const [allBooks,setAllBooks] = useState([])
    useEffect(() => {
        axios
            .get(`https://www.googleapis.com/books/v1/volumes?q=${sum}&key=AIzaSyBBhhQuit1wetBp82EuxuD_6jJKH457OlU&maxResults=12`)
            .then((res) => {
                setAllBooks(res.data.items);
            })

    }, [sum]);

    const getBook = (e) => {
        setSum(e.target.value);
    };
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
                <select value={sum} className='selec' onChange={getBook}>
                    <option value='pop'>
                        Popular
                    </option>
                    <option value='чингиз'>
                        Чингиз Айтматов
                    </option>

                    <option value="art">Art</option>
                    <option value="biography">Biography</option>
                    <option value="fiction">Fiction</option>
                    <option value="history">History</option>
                    <option value="humor">Humor</option>
                    <option value="poetry">Poetry</option>
                    <option value="science">Science</option>
                    <option value="self-help">Self-Help</option>
                    <option value="travel">Travel</option>

                </select>
                {/*<div className="here--books__filter--set">*/}
                {/*    <a href="#">*/}
                {/*        <GoSettings/>*/}
                {/*    </a>*/}
                {/*</div>*/}
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
                    {

                        allBooks.map((el)=>{
                            console.log(el)
                            const img = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail
                            return(
                                <div className="genres--photo__table">
                                    <BookCard el={el}/>
                                    {/*<BookShop el={el}/>*/}
                                    {/*<Link to={`/allBooks/bookShop/${el.id}`}>*/}
                                    {/*        <img style={{borderRadius:'10px'}} width={200} height={300} src={img} alt=""/>*/}
                                    {/*<h3 style={{width:'200px'}}>{el.volumeInfo.title}</h3>*/}
                                    {/*</Link>*/}
                                </div>
                            )
                        })
                    }


                {/*<div className="genres--photo__table">*/}
                {/*    <img src={mark} alt=""/>*/}
                {/*    <h4>THE SUBTLE ART OF NOT GIVING A F*CK</h4>*/}
                {/*    <p>by Mark Manson</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={rules} alt=""/>*/}
                {/*    <h4>8 RULES OF LOVE</h4>*/}
                {/*    <p>by Jay Shetty</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={act} alt=""/>*/}
                {/*    <h4>THE CREATIVE ACT</h4>*/}
                {/*    <p>by Rick Rubin with Neil Strauss</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <Link to={'/bookShop'}> <img src={mole} alt=""/></Link>*/}
                {/*    <h4>THE BOY, THE MOLE, THE FOX AND THE HORSE</h4>*/}
                {/*    <p>by Charlie Mackesy</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={potter} alt=""/>*/}
                {/*    <h4>HARRY POTTER</h4>*/}
                {/*    <p>by J.K. Rowling</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={us} alt=""/>*/}
                {/*    <h4>IT ENDS WITH US</h4>*/}
                {/*    <p>by Colleen Hoover</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={start} alt=""/>*/}
                {/*    <h4>IT STARTS WITH US</h4>*/}
                {/*    <p>by Colleen Hoover</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={heart} alt=""/>*/}
                {/*    <h4>HEART BONES</h4>*/}
                {/*    <p>by Colleen Hoover</p>*/}
                {/*</div>*/}
                {/*<div className="genres--photo__table">*/}
                {/*    <img src={shoes} alt=""/>*/}
                {/*    <h4>SOMEONE ELSE'S SHOES</h4>*/}
                {/*    <p>by Jojo Moyes</p>*/}
                {/*</div>*/}
            </div>
        </div>
    </div>
        </div>
    );
};



export default AllBooks;