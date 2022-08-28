import React from 'react';
import { InputStyle } from './Input.styled';
const Input = ({ type, placeholder, handleInput, value }) => {
	const handleTypo = (e) => {
		handleInput({ e: e, value: e.target.value });
	};
	return (
		<InputStyle
			type={type}
			placeholder={placeholder}
			onChange={handleTypo}
			value={value}
		/>
	);
};

export default Input;
