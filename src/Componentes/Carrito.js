import { css } from '@emotion/css'
import '../ESTILOS/mobile.css'
import '../ESTILOS/mobile.css'
import '../ESTILOS/tablet.css'
import '../ESTILOS/desktop.css'
import FeatureSection from '../Componentes/Featuresection'
import Shoping_Cart_Reducer from '../Componentes/Shoping_Cart_Reducer'
import { useReducer } from 'react';
import { reducerCart, productsInitialState } from '../reducers/Shoping_cart-recuders';
import TYPES from '../reducers/Types_Options';

export default function Section(){

    const [state, dispatch] = useReducer(reducerCart, productsInitialState);

    const deleteFromCart = (id) => {
        dispatch({
          type: TYPES.DELETE_PRODUCT_FROM_CART,
          payload: id
        })
      }


    return(
        <section className='list-body'>

        { 
          state.cart.map((productCart) => {
            return <Shoping_Cart_Reducer key={productCart.id + (Math.random() * 50)} data={productCart} deleteFromCart={deleteFromCart} />
          })
        }


        </section>
    );

}