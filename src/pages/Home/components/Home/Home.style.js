import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	gap: 15rem;
	padding: 3.2rem 0 3.2rem 3.2rem;
	height: 100vh;
`;
export const MainContainer = styled.div`
	/* background-color: red; */
	max-width: 140rem;
`;
export const RecommendedList = styled.div`
	display: flex;
	gap: 5rem;
	align-items: center;
	flex-wrap: wrap;
`;

export const TrendingList = styled.div`
	display: flex;
	gap: 5rem;
	align-items: center;
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 0;
	}
`;
