import React from 'react';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
 
function App() {
	return (
		<div style={{margin: 0}}>
			<Home />
			<Courses />
			<About />
			<Contact />
		</div>
	);
}

export default App;
