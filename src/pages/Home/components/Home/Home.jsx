import React from 'react';
import Nav from '../Nav/Nav';
import Search from '../Search/Search';
import { HomeContainer, MainContainer } from './Home.style';

const Home = () => {
	return (
		<HomeContainer>
			<Nav />
			<MainContainer>
				<Search />
			</MainContainer>
		</HomeContainer>
	);
};

export default Home;
