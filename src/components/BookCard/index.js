import React from 'react';
import {Link} from "react-router-dom";



const BookCard = ({el}) => {
    return (
<>
                <div className="bookCard">
                    <Link to={`/allBooks/bookShop/${el.id}`}>
                            <img style={{borderRadius:'10px'}} width={200} height={300} src={el.volumeInfo.imageLinks && el.volumeInfo.imageLinks.smallThumbnail} alt=""/>
                    <h3 style={{width:'200px'}}>{el.volumeInfo.title}</h3>
                    </Link>
                </div>



    </>
    );
};

export default BookCard;