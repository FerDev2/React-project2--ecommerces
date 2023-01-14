import React from "react";
import Carrito from "../Componentes/Carrito"


const Featuresection = ({ data , addToCart}) => {


    return(


            <div className="content">
                <img className='card-img-top' src={data.img}></img>
                 <h2 class="card-title">{data.name}</h2>
                 <p class="card-text">Price: {data.price}</p>
                 <button className='btn-card' onClick={() => addToCart(data.id)}>Add to Cart</button>
            </div>
            
    
    );

}

export default Featuresection;