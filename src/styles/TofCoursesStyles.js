import styled from 'styled-components'
import { motion } from "framer-motion"

export const Container = styled.div`
    height: 1000px;
    width: 100%;
    border: 2px solid black;
    background-color: #f8e71c;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-flow: row wrap;
    justify-content: center;

`;
Container.box = styled(motion.div)`
    background-color: #d9d9d9;
    /* background: transparent; */
    /* background: linear-gradient(180deg, #FFFFFF 5%, #ff5722 100%); */
    border: 1px solid black;
    width: 22em;
    height: 25em;
    border-radius: 35px;
    margin: 4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "aktiv-grotesk", sans-serif;
    line-height: 15px;
    font-size: 16px;
    font-weight: bold;
    color: #67625c;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    h1{
        margin-top: 1.5em;
        color: black;
    }
    h4{
        font-family: 'aktiv-grotesk-extended';
    color: #17804e;
    }

`;