import React from 'react';
import { SignButtonStyle } from './SignButton.styled';
const SignButton = ({ text, type }) => {
	return <SignButtonStyle type={type}>{text}</SignButtonStyle>;
};

export default SignButton;
