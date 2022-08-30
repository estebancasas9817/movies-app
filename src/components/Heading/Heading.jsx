import React from 'react';
import { HeadingStyled } from './Heading.styled';

const Heading = ({ text, size, weight, margin }) => {
	return (
		<HeadingStyled size={size} weight={weight} margin={margin}>
			{text}
		</HeadingStyled>
	);
};

export default Heading;
