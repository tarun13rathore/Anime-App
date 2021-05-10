import React from 'react';
import './css/style.css';
import {  BrowserRouter, Link } from "react-router-dom";

function Card(props){
    return(
    <>
       <div className="container">
           <div className="row">
           <div className="cards">
        <div className="card">
        <img src={props.imagesrc} alt="myPic" className="card_img" />
        <div className="card_info">  <span className="card_category">{props.sname} </span>
        <h3 className="card_title">{props.title}</h3>
        <BrowserRouter>
        <Link to={{pathname: props.link}} target="_blank" rel="noreferrer" >
        <button>Watch Now</button>
        </Link>
        </BrowserRouter>
        </div>
        </div>
       </div>
           </div>
       </div>
    </>
    );
  
}
export default Card;