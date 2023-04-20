import React from 'react';
import Main from "../../../assets/imgA/Main.jpg"

const HomeImage = () => {
    return (
        <div id="Image">
             <div className="image">
                 <div className="image--img">
                     <img src={Main} alt="" className="img"/>
                 </div>
                 <div className="image--letters">
                         <h1>Welcome to our Bookshop</h1>
                     <p>A place where you can get all the books you want!</p>
                 </div>

             </div>
        </div>
    );
};

export default HomeImage;