import React from 'react';
import Icons from '../Icons/Icons';
import Heading from '../Heading/Heading';
import { ItemContainerStyled } from './RecommendItem.styled';
import small from '../../assets/thumbnails/1998/regular/small.jpg';
import { DetailsItemStyled } from '../DetailsItem/DetailsItem.styled';
console.log(small);
const RecommendItem = () => {
	return (
		<>
			<ItemContainerStyled>
				<div
					style={{
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						position: 'relative',
						width: '100%',
						borderRadius: '10px',
						height: '17.4rem',
						backgroundImage: `url(${small})`,
					}}
				>
					<div className="algo">
						<Icons name="bookmark-empty" width="35px" height="35px" />
					</div>
				</div>

				<DetailsItemStyled>
					<h5>2019</h5>
					<h5>Movie</h5>
					<h5>PG</h5>
				</DetailsItemStyled>
				<Heading text="The Great Lands" size="1.8rem" weight="500" />
			</ItemContainerStyled>
		</>
	);
};

export default RecommendItem;
