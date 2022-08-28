import React, { useState } from 'react';
import {
	SignContainer,
	SignTitle,
	FlexContainer,
	SignSubTitle,
	SignRedButton,
	LogoContainer,
} from './SignIn.styled';
import {
	LOGIN_TEXT,
	SIGN_UP_TEXT,
	NOT_ACCOUNT_TEXT,
	ACCOUNT_TEXT,
} from '../../../../utils/constants/constants';
import Form from '../../components/Form/Form';
import Icons from '../../../../components/Icons/Icons';
const SignIn = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [path, setPath] = useState('/sign');
	const [user, setUser] = useState({ email: '', password: '' });

	const clearUser = () => {
		if (user.email !== '' || user.password !== '') {
			setUser((prevState) => {
				return { ...prevState, email: '', password: '' };
			});
		}
	};

	const handleChangeSignOption = () => {
		clearUser();
		setIsSignIn((prevState) => !prevState);
	};
	const handleInput = ({ e, value }) => {
		e.target.type === 'email'
			? setUser((prevState) => {
					return { ...prevState, email: value };
			  })
			: setUser((prevState) => {
					return { ...prevState, password: value };
			  });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!user.email) {
			console.log('email vacio');
			return;
		}
		if (!user.password) {
			console.log('password vacio');
			return;
		}
		if (user.password !== '12345' || user.email !== 'e@gmail.com') {
			console.log('usuario equivocado');
			return;
		}
		console.log('usuario correcto');
		setPath('/home');
		clearUser();
	};
	return (
		<>
			<LogoContainer>
				<Icons name="logo" color="#d87d4a" width="40px" height="40px" />
			</LogoContainer>
			<SignContainer className="signContainer">
				<SignTitle className="signTitle">
					{isSignIn ? LOGIN_TEXT : SIGN_UP_TEXT}
				</SignTitle>
				<Form
					handleInput={handleInput}
					isSignIn={isSignIn}
					handleSubmit={handleSubmit}
					{...user}
					path={path}
				/>
				<FlexContainer>
					<SignSubTitle>
						{isSignIn ? NOT_ACCOUNT_TEXT : ACCOUNT_TEXT}
					</SignSubTitle>

					<SignRedButton onClick={handleChangeSignOption}>
						{isSignIn ? SIGN_UP_TEXT : LOGIN_TEXT}
					</SignRedButton>
				</FlexContainer>
			</SignContainer>
		</>
	);
};

export default SignIn;
