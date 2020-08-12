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

    .nav{
        display: flex;
        padding-left: 5%;
    }

    .redes{
        display: flex;
        margin-left: 45%;
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

    img{
        width: 5%;
        margin-left: 2%;
    }
`

export {Container}