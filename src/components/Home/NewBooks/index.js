import React, {useEffect, useState} from 'react';
import Books1 from "../../../img/Books1.png"
import Books2 from "../../../img/Books2.png"
import Books3 from "../../../img/Books3.png"


import Slider from "react-slick";
import axios from "axios";


const NewBooks = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    const [newBooks,setNewBooks] = useState([])
    const getNewBooks =()=>{
        axios(`https://www.googleapis.com/books/v1/volumes?q=new-Books&key=AIzaSyAaebEgHTVWHIhfiv--MWYjjxsUNyvn0Hc`)
            .then(res=>setNewBooks(res.data.items))
    }
    useEffect(()=>{
        getNewBooks()
    },[])
    console.log(newBooks)
    return (
        <div id="newBooks">
            <div className="container">
                <div className="newBooks">
                        <h1>New Books</h1>
                   
                    <center><div className="newBooks--books">
                        <Slider {...settings}>
                            {
                                newBooks.map((el)=>{
                                    const img = el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail
                                    return(
                                        <>
                                            <div className="newBooks--books__card">
                                                <img width={200} src={img} alt=""/>
                                                <h3>{el.volumeInfo.title}</h3>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        {/*<div className="newBooks--books__books1">*/}
                        {/*    <img src={Books1} alt=""/>*/}
                        {/*    <h2>The Climate Book: <br/> The Facts and the <br/> Solutions</h2>*/}
                        {/*    <p>by Greta Thunberg</p>*/}
                        {/*</div>*/}
                        {/*<div className="newBooks--books__books2">*/}
                        {/*    <img src={Books2} alt=""/>*/}
                        {/*    <h2>Rest Is Resistance: <br/> A Manifesto</h2>*/}
                        {/*    <p>by Tricia Hersey-</p>*/}
                        {/*</div>*/}
                        {/*<div className="newBooks--books__books1">*/}
                        {/*    <img src={Books3} alt=""/>*/}
                        {/*    <h2>A New Name: <br/> Septology VI-VII</h2>*/}
                        {/*    <p>by Jon Fosse</p>*/}
                        {/*</div>*/}
                        </Slider>
                    </div></center>
                </div>
            </div>
        </div>
    );
};

export default NewBooks;