import styled from 'styled-components';

export const HeadingStyled = styled.h1`
	color: var(--color-white);
	font-size: ${(props) => props.size || '1.8rem'};
	font-weight: ${(props) => props.weight || '500'};
	margin-bottom: ${(props) => props.margin || '0'};
	margin-top: ${(props) => props.margin || '0'};
`;
