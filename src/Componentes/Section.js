import { css } from '@emotion/css'
import '../ESTILOS/mobile.css'
import polo1_front from '../IMG/polo1.jfif'
import '../ESTILOS/mobile.css'
import '../ESTILOS/tablet.css'
import '../ESTILOS/desktop.css'

export default function Section(){

    return(
        <section className='list-body'>
            
            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Polo Volkan</h5>
                   <p class="card-text">S/ 30</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Polo cuello camisa</h5>
                   <p class="card-text">S/50</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Polo cuello redondo</h5>
                   <p class="card-text">S/60</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Polo Blur</h5>
                   <p class="card-text">S/30</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Blusa Blair</h5>
                   <p class="card-text">S/50</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Blusa Blase</h5>
                   <p class="card-text">S/90</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Blusa Cloud</h5>
                   <p class="card-text">S/70</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>

            <div className="content">
                <img className='card-img-top' src={polo1_front}></img>
                <div class="card-content">
                   <h5 class="card-title">Blusa Light</h5>
                   <p class="card-text">S/50</p>
                   <button className='btn-card'>Add Cart</button>
                </div>
            </div>
        </section>
    );

}