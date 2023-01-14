import { css } from '@emotion/css'
import '../ESTILOS/mobile.css'
import polo1_front from '../IMG/polo1.jfif'
import '../ESTILOS/mobile.css'
import '../ESTILOS/tablet.css'
import '../ESTILOS/desktop.css'
import FeatureSection from '../Componentes/Featuresection'
import { TasksContext , TasksDispatchContext } from '../Componentes/TaskContext';

export default function Section({data, deleteFromCart}){



    return(

            <section className='list-carrito'>
         
              <div className="content">
                <h2 class="card-title">{data.name}</h2>
                <p class="card-text">Price: {data.price}</p>
                <button className='btn-card' onClick={() => deleteFromCart(data.id)}>Delete from Cart</button>
              </div>
     
            </section>
            
    );

}
