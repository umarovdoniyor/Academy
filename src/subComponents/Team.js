import React from 'react'
import {Container} from '../styles/TeamStyles'
import Carousel from 'react-multi-carousel';
import TeamDiv from './TeamDiv'
import {CustomButtonGroupAsArrows} from './CustomButton'
// import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";

import TeachersInfo from '../mock/TeachersInfo'



const Team  = ()=>{
    return (
        <Container>
          <div className = "teamHeader">
              <h1>Meet Our Team</h1>
          </div>
            <Carousel
            centerMode={true}	
    arrows={false}
    autoPlaySpeed={5000}
    autoPlay={true}
    infinite={true}
    centerMode={false}
    containerClass="container-padding-bottom"
    customButtonGroup={<CustomButtonGroupAsArrows />}
    dotListClass=""
    focusOnSelect={false}
    keyBoardControl
    minimumTouchDrag={80}
    renderButtonGroupOutside
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
      }
    }}
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
  >

            {/* <TeamDiv name ={TeachersInfo.name}/>
            <TeamDiv name ={TeachersInfo.name}/>
            <TeamDiv name ={TeachersInfo.name}/>
            <TeamDiv name ={TeachersInfo.name}/> */}
           {
                TeachersInfo.map((item, index)=>{
                    return (<TeamDiv name = {item.name} profession = {item.profession} image = {item.image} key = {index}/>)
                })
           }
  </Carousel>
        </Container>
    )
}
export default Team;