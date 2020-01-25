import React from 'react'
import {Container,Item2} from '../styles/OptionsStyles.js'
import {MdComputer} from 'react-icons/md'
const Options = ()=>{
    return (
        <Container>
			{/* <h1>This is courses section </h1> */}
            <Container.Item
                  whileHover={{ scale: 1.1,transition: { duration: 0.5 }, }}
                  whileTap={{ scale: 0.8 }}
            >
                <MdComputer className='icon'/> 
                <h4 className = 'header'>Online Courses</h4>
                <p className = 'paragraph'>Interdum et malesuada fames ac 
                    ante ipsum primis in faucibus,
                    donec pellentesque lacus vitae dui.
                </p>
                <a href = '#'> Learn more > </a>
            </Container.Item>
            <Item2
               whileHover={{ scale: 1.1,transition: { duration: 0.5 }, }}
               whileTap={{ scale: 0.8 }}
            >
                <MdComputer className='icon'/> 
                <h4 className = 'header'>Online Courses</h4>
                <p className = 'paragraph'>Interdum et malesuada fames ac 
                    ante ipsum primis in faucibus,
                    donec pellentesque lacus vitae dui.
                </p>
                <a href = '#'> Learn more > </a>
            </Item2>
            <Container.Item
               whileHover={{ scale: 1.1,transition: { duration: 0.5 }, }}
               whileTap={{ scale: 0.8 }}
            >
                <MdComputer className='icon'/> 
                <h4 className = 'header'>Online Courses</h4>
                <p className = 'paragraph'>Interdum et malesuada fames ac 
                    ante ipsum primis in faucibus,
                    donec pellentesque lacus vitae dui.
                </p>
                <a href = '#'> Learn more > </a>
            </Container.Item>
		</Container>
    )
}

export default Options;