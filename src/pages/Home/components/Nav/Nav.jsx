import React from 'react';
import { NavLink } from 'react-router-dom';
import Icons from '../../../../components/Icons/Icons';
import { ImgContainer, ItemStyle, Liststyle, NavStyle } from './Nav.styled';
import avatar from '../../../../assets/image-avatar.png';
const Nav = () => {
	return (
		<NavStyle>
			<Liststyle>
				<ItemStyle>
					<NavLink to="/home">
						<Icons name="logo" color="#d87d4a" width="30px" height="30px" />
					</NavLink>
				</ItemStyle>
				<ItemStyle>
					<NavLink to="/home">
						<Icons name="nav-home" color="#d87d4a" width="30px" height="30px" />
					</NavLink>
				</ItemStyle>
				<ItemStyle>
					<NavLink to="/home/movies">
						<Icons
							name="nav-movies"
							color="#d87d4a"
							width="30px"
							height="30px"
						/>
					</NavLink>
				</ItemStyle>
				<ItemStyle>
					<NavLink to="/home/series">
						<Icons
							name="nav-tv-series"
							color="#d87d4a"
							width="30px"
							height="30px"
						/>
					</NavLink>
				</ItemStyle>
				<ItemStyle>
					<NavLink to="/home/bookmarks">
						<Icons
							name="nav-bookmark"
							color="#d87d4a"
							width="30px"
							height="30px"
						/>
					</NavLink>
				</ItemStyle>
			</Liststyle>
			<ImgContainer url={`url(${avatar})`} />
		</NavStyle>
	);
};

export default Nav;
