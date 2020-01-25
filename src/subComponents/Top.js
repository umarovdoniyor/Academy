import React from 'react';
import { Container, P } from '../styles/TopStyles';
import { FaPhone, } from 'react-icons/fa';
import { MdEmail, } from 'react-icons/md';

const Top = () => {
	return (
		<Container>
			<Container.Item1>
				<P><FaPhone/> (02)777-777</P>
				<P><MdEmail/> info@bounceCode.com</P>
			</Container.Item1>
			<Container.Item2>
				<P>Seach</P>
				<P>Login</P>
			</Container.Item2>
		</Container>
	);
};

export default Top;
