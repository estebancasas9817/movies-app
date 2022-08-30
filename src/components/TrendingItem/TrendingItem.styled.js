import styled from 'styled-components';

export const TrendingItemStyled = styled.div`
	min-width: 47rem;
	height: 23rem;
	background-color: red;
	border-radius: 15px;
	position: relative;
	background-image: ${(props) => props.url};
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

export const TrendingSubContainerStyled = styled.div`
	position: absolute;
	bottom: 2rem;
	left: 2.3rem;
`;
