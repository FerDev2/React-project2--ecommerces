import React from "react";

const Featuresection = ({ imgport ,title, price, text}) => {

    return(

            <div className="content">
                <img className='card-img-top' src={imgport}></img>
                <div class="card-content">
                   <h5 class="card-title">{title}</h5>
                   <p class="card-text">{price}</p>
                   <button className='btn-card' >{text}</button>
                </div>
            </div>
    );

}

export default Featuresection;