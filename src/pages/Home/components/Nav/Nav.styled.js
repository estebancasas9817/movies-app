import styled from 'styled-components';

export const NavStyle = styled.nav`
	display: flex;
	flex-direction: column;
	background-color: var(--color-dark-blue-secondary);
	padding: 3.5rem 3.1rem;
	align-items: center;
	border-radius: 2rem;
	justify-content: space-between;
	height: 75vh;
`;
export const Liststyle = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 4rem;
	align-items: center;
	margin-left: 0.7rem;
`;
export const ItemStyle = styled.li`
	:first-child {
		margin-right: 1rem;
		margin-bottom: 3.4rem;
	}
`;

export const ImgContainer = styled.img`
	background-image: ${(props) => props.url};
	width: 4.8rem;
	height: 4.8rem;
	border-radius: 50%;
	background-position: center;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;
