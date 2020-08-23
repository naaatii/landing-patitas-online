import styled from 'styled-components'

const Container = styled.nav `
    
    display: flex;
    align-items:center;
    justify-content: flex-start;
    padding: 1% 1% 1% 1%;
    background-color: #F8B329;
    color: #ffffff;
    box-shadow: 5px 5px 12px #B8B8B8;
    font-weight: 500;
    width: 98%;
    margin: 0 auto;

    .nav{
        display: flex;
        padding-left: 5%;
        float: left;
        width: 48%;
    }

    .redes{
        display: flex;
        margin: 0px 0px 0px 20em;
        float: right;
        width: 48%;
    }

    a{
        text-decoration: none;
        color: #ffffff;
        padding-right: 30px;
        font-size: 1.3em;
        font-weight: bold;
    }

    a:hover{
        color: #48AF9B;
    }

    a > .active{
        color: #48AF9B;
    }

    img{
        width: 5%;
        margin-left: 2%;
    }

    ul{
        display: flex;
        text-decoration: none;
        list-style: none;
        align-content: space-around;
        margin: 0 auto;
      }
      
      ul li{
        padding: 0px 25px 0 25px;
        font-size: 10px;
        text-align: center;
        margin: 0 auto;
        justify-content: center;
        transition: 0.4s;
      }
      
      ul li a img{
        padding: 0;
        font-size: 10px;
        text-align: center;
        margin: 0 auto;
        justify-content: center;
        transition: 0.4s;
        width: 25px;
      }

      #contenedorSeguinos{
        width: 40%;
      }

      #contenedorUl{
        width: 40%;
        margin-top: 2%;
      }
`

export {Container}