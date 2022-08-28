import styled from 'styled-components';

export const InputStyle = styled.input`
	border-bottom: 1px solid var(--color-white);
	padding: 1.8rem 1.5rem;
	font-weight: 300;
	color: var(--color-white);
	caret-color: var(--color-red);

	::placeholder {
		color: var(--color-white);
		opacity: 50%;
		font-weight: 300;
		font-size: var(--body-medium);
	}
	:focus {
		outline: none;
	}
`;
