import React from 'react'
import SectionHeader from './SectionHeader'
import Container from '../styles/AboutSubStyles'
import Team from './Team'

import img1 from '../images/careerImages/step1.png'
import img2 from '../images/careerImages/support.png'
import img3 from '../images/careerImages/career.png'


const divStyles = {marginTop: '3em'}

const AboutSub = ()=>{
    return(
        <div style={divStyles}>
            <SectionHeader title = 'About'/>
            <Container>
              <img src = {img1} alt = "Steps picture"/>
              <img src = {img2} alt = "Support picture"/>
              <img src = {img3} alt = " picture"/>
                <Team/>
            </Container>

        </div>
    )
}
export default AboutSub;