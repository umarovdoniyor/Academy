import styled from 'styled-components'

export const NavContainer = styled.div`
    display: flex;
    /* background-color: #ff6900; */
    height:140px; 
    justify-content:space-evenly;
`;
export const Logo = styled.div`
    /* background-color: #00d084; */
    width: 20%;
    height: 100%;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    /* align-content: center; */
    
    .logo{
        display: inline-block;
        cursor: pointer;
        height: 110px;
    }

`;

export const Nav = styled.nav`
    /* background-color: #8ed1fc; */
    width: 40%;
    padding-top:40px;
    .ul{
        /* background-color: red; */
        height: 30px;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
  
    .li{
        display: inline-block;
        margin-left:50px;
        font-family: Roboto,sans-serif;
        font-size: 18px;
        font-weight: normal;
        line-height: 1.5em;
        text-decoration: none;
        text-transform: none;
        letter-spacing: 0px; 
        text-transform:uppercase;
        cursor: pointer
    }
     li:active{
        color: blue
    }
    
`;
