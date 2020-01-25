import React from 'react'
import {Container} from '../styles/EduPlanStyled'
import {content} from '../mock/EduContent'
import img1 from '../images/slider_separator.png'
import nextImg from '../images/next.png'



const EduPlan = ()=>{
    return(
        <Container>
            <Container.Item1>
                <h2>welcome to BounceCode academy</h2>
                <h1>Unlock the Door of Freedom</h1>
                <img src = {img1}  alt='Separator Image'/>
            
            </Container.Item1>
            <Container.Item2>
                <div>
                    <span className = "spn">{content[0].num}</span>
                    <a href = "#">{content[0].header}</a>
                    <p>{content[0].text}</p>
                </div>
                <img src = {nextImg} alt = "Next Image"/>
                <div>
                    <span className = "spn">{content[1].num}</span>
                    <a href = "#">{content[1].header}</a>
                    <p>{content[1].text}</p>
                </div>
                <img src = {nextImg} alt = "Next Image"/>
                <div>
                    <span className = "spn">{content[2].num}</span>
                    <a href = "#">{content[2].header}</a>
                    <p>{content[2].text}</p>
                </div>
                <img src = {nextImg} alt = "Next Image"/>
                <div>
                    <span className = "spn">{content[3].num}</span>
                    <a href = "#">{content[3].header}</a>
                    <p>{content[3].text}</p>
                </div>
            </Container.Item2>
        </Container>
    )
}
export default EduPlan;