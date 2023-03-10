import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	:focus {
		outline: 0;
		//box-shadow: 0 0 0 ${(props) => props.theme['yellow-dark']}
	}
	body {
		background-color: ${(props) => props.theme.background};
		//color: ${(props) => props.theme['gray-300']};
		-webkit-font-smoothing: antialiased;
	}
	bodyn input, textarea, button {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}
`
