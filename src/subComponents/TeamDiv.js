import React from 'react'
import Container from '../styles/TeamDivStyles'

import santa from '../images/sliderbgimages/3.jpg'


const TeamDiv = (props)=>{
    return (
 
<Container align="center" class="fond">
  <div class="carreaux_presentation_light" style = {{backgroundImage: `url(${props.image})`}} >
    <div class="shadow_swhow_mini">
        <div class="deroul_titre">{props.name}</div>
    <div class="deroul_soustitre">{props.profession}}</div>
    </div>
  </div>
</Container>
    )
}
export default TeamDiv;