import React, { useState } from 'react';
import Input from '../Input/Input';
import SignButton from '../SignButton/SignButton';
import {
	SignContainer,
	FormContainer,
	SignTitle,
	FlexContainer,
	SignSubTitle,
	SignRedButton,
} from './SignIn.styled';
import {
	SIGN_IN_TEXT_BUTTON,
	SIGN_UP_TEXT_BUTTON,
	LOGIN_TEXT,
	SIGN_UP_TEXT,
	NOT_ACCOUNT_TEXT,
	ACCOUNT_TEXT,
} from '../../utils/constants/constants';
const SignIn = () => {
	const [isSignIn, setIsSignIn] = useState(true);

	const handleSign = () => {
		setIsSignIn((prevState) => !prevState);
	};
	return (
		<SignContainer className="signContainer">
			<SignTitle className="signTitle">
				{isSignIn ? LOGIN_TEXT : SIGN_UP_TEXT}
			</SignTitle>
			<FormContainer action="#">
				<Input type="email" placeholder="Email address" />
				<Input type="password" placeholder="Password" />
				{isSignIn || <Input type="password" placeholder="Repeat password" />}
				<SignButton
					text={isSignIn ? SIGN_IN_TEXT_BUTTON : SIGN_UP_TEXT_BUTTON}
					type="submit"
				/>
			</FormContainer>
			<FlexContainer>
				<SignSubTitle>
					{isSignIn ? NOT_ACCOUNT_TEXT : ACCOUNT_TEXT}
				</SignSubTitle>

				<SignRedButton onClick={handleSign}>
					{isSignIn ? SIGN_UP_TEXT : LOGIN_TEXT}
				</SignRedButton>
			</FlexContainer>
		</SignContainer>
	);
};

export default SignIn;
