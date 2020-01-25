import styled from 'styled-components'

const Container = styled.div`
   /* border: 1px solid black;
   border-radius: 35px;
   width: 24em;
   height: 20em;
   background-color: #ff6900;
   position:sticky;
   padding-top:85px;
   top:0;left:0; 
   right:0;bottom:0;
   background-size:cover; */

   /* background-color:#65C6BB; */
   /* h1{
       color: white;
   } */
   .carreaux_presentation_light
{
  display:table-cell;
  width:20em; 
  height:20em;
  background-size:cover;
  overflow: hidden;
  position: relative;
  border: 1px solid black;
   border-radius: 35px;
   background-color: red
}
.carreaux_presentation_light .shadow_swhow_mini
{
  background-color:rgba(19,30,33,0.4);
  position: absolute;
  z-index: 1000;
  top:0;left:0;right:0;bottom:0;
  
}
.carreaux_presentation_light:hover .shadow_swhow_mini
{
  background-color:rgba(16,23,41,0);
}
.carreaux_presentation_light .deroul_titre
{
  position: absolute;
  text-transform: uppercase;
  font-family: 'Roboto';
  padding: 7px;
  z-index: 1000;
  top:60%;
  left:-80%;
  color:#ffffff;
  font-weight: 300;
  font-size: 13px; width: 80%;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  -ms-transition: all 0.7s;
  transition: all 0.7s;

}
.carreaux_presentation_light:hover .deroul_titre
{
  background-color:#1e4944; left:0px;
  
}
.carreaux_presentation_light .deroul_soustitre
{
  position: absolute;
  font-family: 'Roboto';
  padding: 5px;
  z-index: 1000;
  top:60%;right:-85%;
  margin-top: 25px;
  color:#ffffff;
  font-weight: 300;
  font-size: 11px; width: 80%;
  -webkit-transition: all 0.7s;
  -moz-transition: all 0.7s;
  -ms-transition: all 0.7s;
  transition: all 0.7s;
}
.carreaux_presentation_light:hover .deroul_soustitre
{
  background-color:#417c74;right:0px;
}

.fond{
    position:absolute;
    padding-top:85px;
    top:0;
    left:0; 
    right:0;
    bottom:0;
  background-color:#65C6BB;}

`;
export default Container;