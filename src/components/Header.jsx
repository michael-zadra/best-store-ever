import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	padding: 10px 75px;
	background-color: #fecc47;
`;

const HeaderSubheaderText = styled.h2`
	text-align: left;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderSubheaderText>
				Welcome to <i>Best Store Ever!</i>
			</HeaderSubheaderText>
		</HeaderContainer>
	);
};

export default Header;
