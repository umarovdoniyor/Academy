/* eslint-disable no-unused-vars */
import React, {useState,useEffect, useInterval} from 'react'
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import {Fade} from 'react-reveal';
import { AwesomeButton,} from 'react-awesome-button';
import Options from "./Options"
import {Container,Children,Dot,Dots,Info} from '../styles/SliderStyles'
import {bgImages,content} from '../mock/SliderContent'


const CarouselUI = ({ position, total, handleClick, children }) => {
  var [id, setId] = useState(0)
  const [img, setImage] =useState(bgImages[id])
  
   
  // useEffect(() => {
  //  const interval = setInterval(() => {
  //     if(id===2){
  //       setId(0)
  //     }
  //     else{
  //       setId(id+1);
        
  //     }
  //   }, 2000);
  //   setImage(bgImages[id])
  //   return () => clearInterval(interval);
  // });"styles was in Container tag"->style={{backgroundImage:`url(${img})`  }}
  return(
  <Container >
    <Children>
      {children}
    <Dots>
      {Array(...Array(total)).map( (val, index) =>
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ ' }
        </Dot>
      )}
    </Dots>
    </Children>
  </Container>
  )};
const Carousel = makeCarousel(CarouselUI);

const AnimSlider = ()=>{

  return (
    <>
    <Carousel defaultWait={10000} /*wait for 1000 milliseconds*/ >
    <Slide right>
      <Fade bottom delay={1000}>
         <Info>
          <span className='line1'>{content[0].firstLine}</span>
          <span className='line2'>{content[0].secondLine}</span>
          <p className='paragraph'>Slide Description</p>
          <img src ={content[0].image} alt="Splitter image"/>
          <AwesomeButton
            size="large"
            type="primary"
            className='btn'
          >
            {content[0].button}
          </AwesomeButton>
          {/* <button className='button'>{content[0].button}</button> */}
         </Info>
        </Fade> 
    </Slide>
    <Slide right>
        <Fade delay={1000} bottom >
         <Info>
            <span className='line1'>{content[1].firstLine}</span>
             <span className='line2'>{content[1].secondLine}</span>
             <p className='paragraph'>Slide Description</p>
             <img src ={content[1].image} alt="Splitter image"/>
             <AwesomeButton
            size="large"
            type="primary"
            className='btn'
          >
            {content[1].button}
          </AwesomeButton>
             {/* <button className='button'>{content[1].button}</button> */}
         </Info>
        </Fade> 
    </Slide>
    <Slide right>
        <Fade delay={1000} bottom >
          <Info>
          <span className='line1'>{content[2].firstLine}</span>
          <span className='line2'>{content[2].secondLine}</span>
          <p className='paragraph'>Slide Description</p>
          <img src ={content[2].image} alt="Splitter image"/>
          <AwesomeButton
            size="large"
            type="primary"
            className='btn'
          >
            {content[2].button}
          </AwesomeButton>
          {/* <button className='button'>{content[2].button}</button> */}
          </Info>
        </Fade> 
    </Slide>
  </Carousel>
  <Options />
  </>
  )

}
export default AnimSlider;