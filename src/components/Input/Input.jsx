import React from 'react';
import { InputStyle } from './Input.styled';
const Input = ({ type, placeholder }) => {
	return <InputStyle type={type} placeholder={placeholder} />;
};

export default Input;
