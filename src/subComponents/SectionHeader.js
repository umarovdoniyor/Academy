import React from 'react'
import {Container} from '../styles/SectionHeaderStyles'

const SectionHeader = (props)=>{
    return (
        <Container>
            <h1>{props.title}</h1>
        </Container>
    )
}
export default SectionHeader;