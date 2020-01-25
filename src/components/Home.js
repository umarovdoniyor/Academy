import React from 'react';
import Top from '../subComponents/Top';
import Navbar from '../subComponents/Navbar'
import Slider from '../subComponents/Slider'

function Home() {
	return (
		<div style={{margin: 0}}>
			<Top />
			<Navbar/>
			<Slider/>
			{/* <h1>HOME page </h1> */}
		</div>
	);
}
export default Home;
