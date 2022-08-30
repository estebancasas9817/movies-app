import React from 'react';
import Heading from '../../../../components/Heading/Heading';
import RecommendItem from '../../../../components/RecommendItem/RecommendItem';
import {
	HomeContainer,
	MainContainer,
	RecommendedList,
} from '../../../Home/components/Home/Home.style';
import Nav from '../../../Home/components/Nav/Nav';
import Search from '../../../Home/components/Search/Search';

const Series = () => {
	return (
		<HomeContainer>
			<Nav />
			<MainContainer>
				<Search />
				<Heading text="Series" size="3.8rem" weight="300" margin="3.2rem" />

				<RecommendedList>
					<RecommendItem />
					<RecommendItem />
					<RecommendItem />
					<RecommendItem />
					<RecommendItem />
					<RecommendItem />
					<RecommendItem />
					<RecommendItem />
				</RecommendedList>
			</MainContainer>
		</HomeContainer>
	);
};

export default Series;
