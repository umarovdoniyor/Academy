import styled from 'styled-components'
import { motion } from "framer-motion"

export const Container = styled.div`
position: relative;
    width: 100%;
    height: 400px;
    display: flex;
    justify-content:center;
    background-color: transparent;
    top: 600px;
`;
Container.Item = styled(motion.div)`
    width: 20%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #333;
    .icon{
        font-size: 70px;
        padding-top: 30px;
        color:#f44336;
    }
    .header{
        font-size: 25px;
        padding-top: 15px;
        color: #FFFFFF;
    }
    .paragraph{
        padding-left: 45px;
        padding-right: 45px;
        text-align: center;
        display: block;
        font-family:'Roboto',sans-serif;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0.5px;
        line-height: 21px;
        overflow-wrap: break-word;
        text-rendering: optimizeLegibility;
        color: #abb8c3;
    }
    a{
        font: bold 16px/1.8 'Open Sans', arial, sans-serif;
        padding-top: 25px;
        /* font-size: 20px; */
        /* font-weight: 300; */
        text-decoration: none;
        color:#f44336;
        text-transform:uppercase;
        letter-spacing: 0.10em;
        position: relative;
    }
    a:after {    
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
     }
a:hover:after { 
        width: 100%; 
        left: 0; 
    }

`;
export const Item2= styled(Container.Item)`
    background-color: #f44336;
    .icon{
        color: white;
    }
    a{
        color: white;
    }
`;

