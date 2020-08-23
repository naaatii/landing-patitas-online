import React from 'react'
import {Container} from './styled'
import {Link,withRouter} from 'react-router-dom'
import Facebook from '../../assets/facebook.png'
import Instagram from '../../assets/instagram.png'
import Youtube from '../../assets/youtube.png'

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
                <div id="contenedorSeguinos">
                    <p>Seguinos en nuestras redes</p>
                </div>
               
               <div id="contenedorUl">
                    <ul>
                        <li><a href="www.fabebook.com" target="blank"><img src={Facebook}></img></a></li>
                        <li><a href="www.instagram.com" target="blank"> <img src={Instagram}></img></a></li>
                        <li><a href="www.youtube.com" target="blank"><img src={Youtube}></img></a></li>
                    </ul>
                </div>
            </div>
        </Container>
    )
}

export default NavBar