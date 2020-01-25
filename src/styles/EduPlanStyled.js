import styled from 'styled-components'

export const Container = styled.div`
    border: 3px solid black;
    margin-top: 650px;
    width: 70%;
    height: 450px;
    margin-left: 300px;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    align-content: center;
    flex-direction: column;

`;
Container.Item1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /*  */
    background-color: red;

    h2{
        color: #c4c6c6;
        font-family: "Roboto",sans-serif;
        font-size: 0.933em;
        font-style: normal;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0;
        line-height: 1.5em;
        text-align: center;
    }
    h1{
        font-size: 32px;
        margin-top: 0.4em;
        display: block;
        font-family: "Bree Serif", serif;
        font-weight: 400;
        line-height: 38.4px;

    }
    img{
        /* background-color:#969696; */
        /* margin-top: 1.7em;*/ 
        color:rgb(113, 119, 120);  
        font-style:normal;
        font-weight:300;
        height:12px;
        letter-spacing:0.5px;
        line-height:20.93px;
        max-width:100%;
        -webkit-font-smoothing:antialiased;
        -webkit-tap-highlight-color:rgba(0, 0, 0, 0);
    }


`;
Container.Item2 = styled.div`
    display: flex;
    margin-top: 4rem;
    padding-left: 4rem;
    padding-right: 4em;
    line-height: 2em;
    color: rgb(88,88,88);
    overflow-wrap: break-word;
    position: relative;
    text-align: center;
    text-rendering: optimizeLegibility;
    text-size-adjust: 100%;

    .spn{
        display: block;
        padding-bottom: 10px;
        justify-content: center;
        color:#02bdc3;
        font-family: "Bree Serif", serif;
        font-style: normal;
        font-weight: 400;
        font-size: 3.33em;
        letter-spacing: 0.5px;
        line-height: 44px;
        margin-top: 13px;
        overflow-wrap: break-word;
        text-align: center;
        text-rendering: optimizeLegibility;
        text-size-adjust:100%; 
    }
    a{
        cursor: pointer;
        display: block;
        background: transparent;
        font-style: normal;
        font-size: 18px;
        font-family:"Bree Serif", serif;
        font-weight: 400;
        line-height: 24px;
        overflow-wrap: break-word;
        text-align: center;
        color: rgb(33,35,35);
        text-decoration-style: solid;
        text-rendering: optimizeLegibility;
        text-decoration: none;
        transition-duration: 0.3s;
        transition-property: all;
        transition-timing-function: ease;
    }
    a:hover{
        color: #ff5951;
    }
    p{
        padding-left: 15px;
        padding-right: 15px;
        color: rgb(88,88,88);
        display: block;
        font-family: 'Roboto',sans-serif;
        font-size: 13px;
        font-style: normal;
        font-weight: 300;
        letter-spacing: 0.5px;
        line-height: 20px;
        overflow-wrap: break-word;
        text-rendering: optimizeLegibility;
        text-align: center;
        -webkit-font-smoothing: antialiased;


    }
    img{
        display: flex;
        align-content:center;
    }

`;