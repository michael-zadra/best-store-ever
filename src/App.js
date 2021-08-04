import Header from "./components/Header";
import styled from "styled-components";

const HomeContainer = styled.div`
	padding: 50px;
`;

const HomeHeader = styled.h2`
	padding: 10px 0 20px 0;
`;

const App = () => {
	return (
		<>
			<Header />
			<HomeContainer>
				<HomeHeader>Our Products:</HomeHeader>
				<p>[Products here]</p>
			</HomeContainer>
		</>
	);
};

export default App;
