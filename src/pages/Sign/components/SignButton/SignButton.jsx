import React from 'react';
import { Link } from 'react-router-dom';
import { SignButtonStyle } from './SignButton.styled';
const SignButton = ({ text, type, path }) => {
	console.log(path);
	return (
		<SignButtonStyle type={type}>
			<Link to={path} style={{ color: 'inherit' }}>
				{text}
			</Link>
		</SignButtonStyle>
	);
};

export default SignButton;
