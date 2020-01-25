import styled from 'styled-components';
import 'react-awesome-button/dist/themes/theme-blue.css';

const width = '100%', height='700px';
export const Container = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  overflow: hidden;
  width: ${width};
  background-color: #00d084;
  /* padding-bottom: 20px */
  /* display: flex;
  justify-content: center;
  flex-direction: column; */
`;
export const Children  = styled.div`
  /* width:100%; */
  display: flex;
  /* flex-direction: column; */
  position: relative;
  height: ${height};
  color:white;
  /* background: blue; */
 `;

export const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 2px 2px 2px #fff;
  user-select: none;
`;

export const Dots = styled.span`
  text-align: center;
  position: relative;
  width: ${width};
  z-index: 100;
  display: flex;
  justify-content: center;
  top: 510px;
  /* padding-bottom: 50px; */

`;
export const Info = styled.div`
 /* background-color: #0b3652; */
 /* opacity: 1; */
 display: flex;
 flex-direction: column;
 align-items: center;
 align-content: center;
 justify-content: center;
 margin-top:100px;
 /* margin-left: 500px; */

.line1{
  font-size: 30px;
  margin-top: 15px;
  margin-bottom: 25px;
};
.line2{
  font-size: 50px;
  margin-bottom: 25px;
};
.paragraph{
  margin-bottom: 55px;
};
.btn{
  margin-top: 55px;
  margin-bottom: 25px;

--button-default-height: 70px;
--button-default-font-size: 20px;
--button-default-border-radius: 6px;
--button-horizontal-padding: 20px;
--button-raise-level: 5px;
--button-hover-pressure: 2;
--transform-speed: 0.185s;
--button-primary-color: #00b8c4;
--button-primary-color-dark: #d0b400;
--button-primary-color-light: #ffe11d;
--button-primary-color-hover: #00a0ab;
--button-primary-border: 1px solid #ffe11d;

}

`;


