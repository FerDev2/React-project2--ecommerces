import { css } from '@emotion/css'
import logo from '../IMG/logo.png'
import carrito from '../IMG/cart-regular-24.png'
import user from '../IMG/user-circle-regular-24.png'
import search from '../IMG/search-regular-24.png'
import menu from '../IMG/menu.png'
import '../ESTILOS/mobile.css'

export default function Header(){
    return(
        <header className='nav-bar--main'>
                <div className={css`
                    width: 100px;
                    justify-self: center;
                `}>
                    <img width="100%" src={ logo }></img>
                </div>

                <h1 className={css`
                    text-align: center;
                
                `}>SHOP CENTER</h1>

                <img className='icon-menu' src={menu}></img>
                
                <div className='list-options'>
                    <ul>
                         <li>Mujer</li>
                         <li>Hombre</li>
                         <li>Marcas</li>
                    </ul>

                     <label>
                         <input type="text"></input>
                         <img src={search}></img>
                     </label>

                     <ul>
                         <li><a><img src={carrito}></img></a></li>
                         <li><a><img src={user}></img></a></li>
                     </ul>
                </div>

        </header>
    );
}