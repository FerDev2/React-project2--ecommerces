import { css } from '@emotion/css'
import '../ESTILOS/mobile.css'
import FeatureSection from '../Componentes/Featuresection'
import polo1_front from '../IMG/polo1.jfif'
import '../ESTILOS/mobile.css'
import '../ESTILOS/tablet.css'
import '../ESTILOS/desktop.css'

export default function Section(){

    

    return(
        <section className='list-body'>

            <FeatureSection 
            imgport = {polo1_front} 
            title = "Polo Besh"
            price = "S/ 30"
            text = "add cart"
            />

            <FeatureSection 
            imgport = {polo1_front} 
            title = "Polo Besh"
            price = "S/ 30"
            text = "add cart"
            />

           <FeatureSection 
            imgport = {polo1_front} 
            title = "Polo Besh"
            price = "S/ 30"
            text = "add cart"
            />
            
        </section>
    );

}