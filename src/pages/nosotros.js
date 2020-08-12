import React from 'react'
import perro from '../assets/siberiano.jpg'

const Nosotros = () =>{
    return(
        <div className="contenedorPadre">
             <div className="contenedorImage">
            <img src={perro}/>
            </div>
            
            <h1>¡Hola amigos!</h1>

            <div className="contenedorParrafos">
                <p className='parrafos'>Somos un grupo de personas que <strong>¡amamos a los animales!</strong></p>
                <p className='parrafos'>Creemos que todos los días fortalecemos el <strong>vínculo afectivo</strong> con ellos y que somos parte del proceso de humanización que atraviesan nuestras mascotas.</p>
                <p className='parrafos'>Su <strong>esencia</strong> es lo más valioso que tenemos en nuestras vidas y sabemos lo genial que es considerarlos un miembro más de la familia.</p>
                <h3>¡Queremos escuchar la anécdota que tu mascota y vos tienen para contarle al mundo!</h3>
            </div>
        </div>
    );
}

export default Nosotros