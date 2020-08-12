import React from 'react'
import {Container} from './styled'
import {Link,withRouter} from 'react-router-dom'

import logo from '../../assets/patitas-logo.png'

const NavBar = () => {
    return(
        <Container>
            <img src={logo}/>
            <div className = 'nav'> 
                <Link to={'/'}>Home</Link>
                <Link to={'/nosotros'}>Nosotros</Link>
                <Link to={'/servicios'}>Servicios</Link>
            </div>
            
            <div className = 'redes'>
                <p>Seguinos en nuestras redes</p>
            </div>
        </Container>
    )
}

export default NavBar