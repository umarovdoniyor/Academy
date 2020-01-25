import * as React from "react";
import { AwesomeButton,} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-blue.css';
import styled from 'styled-components';

export const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <Container>
      {/* <h4>These buttons can be positioned anywhere you want on the screen</h4> */}
      <AwesomeButton 
        size="small"
        type="primary"
        className='btn' 
        action={previous}>
      Prev</AwesomeButton>
      <AwesomeButton
        size="small"
        type="primary"
        className='btn'
        action={next}>
      Next</AwesomeButton>
    </Container>
  );
};

const Container = styled.div`
display: flex;
text-align: "center";
margin-top: 1em;
justify-content: center;
.btn{
  margin: 1em;

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