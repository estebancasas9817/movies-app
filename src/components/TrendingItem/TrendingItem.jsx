import React from 'react';
import DetailsItem from '../DetailsItem/DetailsItem';
import Heading from '../Heading/Heading';
import Icons from '../Icons/Icons';
import {
	TrendingItemStyled,
	TrendingSubContainerStyled,
} from './TrendingItem.styled';
import beyondEarh from '../../assets/thumbnails/beyond-earth/regular/small.jpg';
const TrendingItem = () => {
	return (
		<TrendingItemStyled url={`url(${beyondEarh})`}>
			<div className="algo">
				<Icons name="bookmark-empty" width="35px" height="35px" />
			</div>
			<TrendingSubContainerStyled>
				<DetailsItem />
				<Heading text="Beyond Earth" weight="300" margin="3px" size="2.4rem" />
			</TrendingSubContainerStyled>
		</TrendingItemStyled>
	);
};

export default TrendingItem;
