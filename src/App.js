import React, {Fragment} from "react";
import styled from 'styled-components'
import Header from './components/Header.js'
import Profile from './components/Profile.js'
import GlobalStyle from './theme/globalStyle.js'

const AppWrapper = styled.div`
	background-color: #fafafa;
`;

const App = () => (
	<Fragment>
		<GlobalStyle />
		<AppWrapper>
			<Header />
			<Profile />
		</AppWrapper>
	</Fragment>
)

export default App;
