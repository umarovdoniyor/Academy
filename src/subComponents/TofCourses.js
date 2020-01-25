import React from 'react'
import {Container} from '../styles/TofCoursesStyles'
import { motion } from "framer-motion"
import SectionHeader from './SectionHeader'

const TofCourses = ()=>{
    return(
        <>
        <SectionHeader title = "What We Teach?"/>

        <Container>
            <Container.box 
              whileHover={{ scale: 1.2,transition: { duration: 1 }, }} 
              whileTap={{ scale: 0.8 }}>
                <h1>Module 1</h1>
                <h4>Intro to Web Development Part 1 (Weeks 1-2)</h4>
                <p>Introductory JavaScript</p>
                <p>Introductory HTML</p>
                <p>Introductory CSS</p>
            </Container.box>
            <Container.box
              whileHover={{ scale: 1.2,transition: { duration: 1 }, }} 
              whileTap={{ scale: 0.8 }}>
                <h1>Module 2</h1>
                <h4>Intro to Web Development Part 2 (Weeks 2-3)</h4>
                <p>Intermediate JavaScript</p>
                <p>Intermediate HTML</p>
                <p>Intermediate CSS</p>
                <p>Unit Testing</p>
                <p>HTTP and AJAX</p>
            </Container.box>
            <Container.box
              whileHover={{ scale: 1.2,transition: { duration: 1 }, }}
              whileTap={{ scale: 0.8 }}>
                <h1>Module 3</h1>
                <h4>Intro to React (Weeks 4-5)</h4>
                <p>ECMAScript 2015</p>
                <p>Introduction to React</p>
            </Container.box>
            <Container.box
              whileHover={{ scale: 1.2,transition: { duration: 1 }, }}
              whileTap={{ scale: 0.8 }}>
                <h1>Module 4</h1>
                <h4>Intermediate and Advanced React (Week 6)</h4>
                <p>Intermediate React</p>
                <p>Advanced React Patterns</p>
                <p>React API Project</p>
                <p>Portfolio Project</p>
            </Container.box>
            <Container.box
              whileHover={{ scale: 1.2,transition: { duration: 1 }, }}
              whileTap={{ scale: 0.8 }}>
                <h1>Module 5</h1>
                <h4>Servers and Databases (Week 7-8)</h4>
                <p>Node + Express</p>
                <p>MongoDB + Mongoose ODM</p>
                <p>RESTful API design</p>
            </Container.box>
            <Container.box
              whileHover={{ scale: 1.2,transition: { duration: 1 }, }}
              whileTap={{ scale: 0.8 }}>
                <h1>Module 6</h1>
                <h4>Capstones (Weeks 8-12)</h4>
                <p>Individual Full Stack Project</p>
                <p>Group Full Stack Project</p>
            </Container.box>
        
        </Container>
        </>
    )

}
export default TofCourses;