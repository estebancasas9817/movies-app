import React from 'react';
import {
	SIGN_IN_TEXT_BUTTON,
	SIGN_UP_TEXT_BUTTON,
} from '../../../../utils/constants/constants';
import Input from '../Input/Input';
import SignButton from '../SignButton/SignButton';
import { FormContainer } from './Form.styled';

const Form = ({
	isSignIn,
	handleInput,
	handleSubmit,
	email,
	password,
	path,
}) => {
	return (
		<FormContainer onSubmit={(e) => handleSubmit(e)}>
			<Input
				type="email"
				placeholder="Email address"
				handleInput={handleInput}
				value={email}
			/>
			<Input
				type="password"
				placeholder="Password"
				handleInput={handleInput}
				value={password}
			/>
			{isSignIn || <Input type="password" placeholder="Repeat password" />}
			<SignButton
				text={isSignIn ? SIGN_IN_TEXT_BUTTON : SIGN_UP_TEXT_BUTTON}
				type="submit"
				path={path}
			/>
		</FormContainer>
	);
};

export default Form;
