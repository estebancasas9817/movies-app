import React from 'react';
import Heading from '../../../../components/Heading/Heading';
import Nav from '../Nav/Nav';
import RecommendItem from '../../../../components/RecommendItem/RecommendItem';
import Search from '../Search/Search';
import {
	HomeContainer,
	MainContainer,
	RecommendedList,
	TrendingList,
} from './Home.style';
import TrendingItem from '../../../../components/TrendingItem/TrendingItem';

const Home = () => {
	return (
		<HomeContainer>
			<Nav />
			<MainContainer>
				<Search />
				<Heading text="Trending" size="3.8rem" weight="300" margin="3.2rem" />
				<TrendingList>
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
				</TrendingList>
				<Heading
					text="Recommended for you"
					size="3.8rem"
					weight="300"
					margin="3.2rem"
				/>

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

export default Home;
