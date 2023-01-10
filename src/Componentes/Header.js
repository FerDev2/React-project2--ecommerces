import { css } from '@emotion/css'
import { useState, useContext } from 'react';
import { userContext } from '../App';
import logo from '../IMG/logo.png'
import carrito from '../IMG/cart-regular-24.png'
import user from '../IMG/user-circle-regular-24.png'
import menu from '../IMG/menu.png'
import '../ESTILOS/mobile.css'
import '../ESTILOS/tablet.css'
import '../ESTILOS/desktop.css'

const list_links = document.querySelector('#list_links');

export default function Header( {state , stateinit}){

     const clicked = useContext(userContext);

     const enviarEstado =() =>{
        state(true);
     }
     
     const enviarEstado2 = () =>{
        stateinit(false);
     }

    return(
        <header className='nav-bar--main'>
                <div className={css`
                    width: 100px;
                    justify-self: center;
                    align-self: center;
                `}>
                    <img width="100%" src={ logo } onClick={enviarEstado2}></img>
                </div>

                <h1 className={css`
                    text-align: center;
                    justify-self: center;
                    align-self: center;
                
                `}>SHOP CENTER</h1>

                <img id='action-menu' className='list-menu' src={menu} onClick={(e)=>{
                    e.preventDefault();
                    document.querySelector('#list_links').classList.toggle('list-options--no');
                    document.querySelector('#list_links').classList.add('list-options');
                }}></img>
                
                <div id='list_links' className='list-options--no'>
                    <ul className='list-options--links'>
                         <li>Mujer</li>
                         <li>Hombre</li>
                         <li>Marcas</li>
                    </ul>

                     <ul className='list-options--buttons'>
                         <li> <img className={css`
                            cursor:pointer;
                        `} src={carrito} onClick={enviarEstado}></img></li>

                         <li><img src={user}></img></li>
                     </ul>

                     <p className='list-button' onClick={(e)=>{
                        e.preventDefault();
                        document.querySelector('#list_links').classList.toggle('list-options');
                        document.querySelector('#list_links').classList.add('list-options--no');
                    }}>X</p>
                </div>
        </header>
    );
}