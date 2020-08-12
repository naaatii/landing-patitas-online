import React from 'react'
import gatito from '../assets/gatito.jpg'

const Servicios = () =>{
    return(
        <div  className="contenedorPadre">
            <div className="contenedorImage">
                <img src={gatito}/>
            </div>

            <h1>Tenemos algo para contarte</h1>
            
            <div className="contenedorParrafos">
                <p className='parrafos'>Nuestra app Patitas Online tiene como <strong>objetivo</strong> ofrecer, en el mundo de las mascotas, la posibilidad de llevar al alcance de la mano todos los datos importantes de nuestros peludos amigos a través de su <strong>chapita</strong>.</p>
                <p className='parrafos'>Sabemos que cada animal es <strong>especial</strong>, por eso, podes elegir entre todos nuestros diseños para personalizar y crear la chapita que mejor va con tu mascota. </p>
            </div>
        </div>
    );
}

export default Servicios