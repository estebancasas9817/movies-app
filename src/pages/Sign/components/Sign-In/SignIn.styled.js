import styled from 'styled-components';

export const LogoContainer = styled.div`
	position: absolute;
	top: 20rem;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const SignContainer = styled.div`
	width: 40rem;
	min-height: 37.4rem;
	background-color: var(--color-dark-blue-secondary);
	position: absolute;
	top: 50rem;
	left: 50%;
	transform: translate(-50%, -50%);
	-webkit-transform: translate(-50%, -50%);
	padding: 3.2rem;
`;

export const SignTitle = styled.h1`
	color: var(--color-white);
	font-size: var(--heading-large);
	font-weight: 300;
	margin-bottom: 3rem;
`;

export const FlexContainer = styled.div`
	display: flex;
	gap: 0.8rem;
	align-items: center;
	justify-content: center;
`;

export const SignSubTitle = styled.h4`
	color: var(--color-white);
	font-size: var(--body-medium);
`;

export const SignRedButton = styled.button`
	color: var(--color-red);
	font-size: var(--body-medium);
	opacity: 70%;
`;
