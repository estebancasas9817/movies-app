import React from 'react';
import Icons from '../../../../components/Icons/Icons';
import { SearchContainerStyle, SearchInputStyle } from './Search.styled';

const Search = () => {
	return (
		<SearchContainerStyle>
			<Icons name="search" width="35px" height="35px" />
			<SearchInputStyle
				type="text"
				placeholder="Search for movies or TV series"
			/>
		</SearchContainerStyle>
	);
};

export default Search;
