import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}
	:focus {
		outline: 0;
		box-shadow: 0 0 0 ${(props) => props.theme['yellow-dark']};
	}
	body {
		background-color: ${(props) => props.theme.background};
		color: ${(props) => props.theme['base-text']};
		-webkit-font-smoothing: antialiased;

		display: flex;
		justify-content: center;
	}

	body > div {
		max-width: 1440px;
	}

	body, input, textarea, button, p, span {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}

	h1 {
		font-family: 'Baloo 2', sans-serif;
		font-weight: 800;
		color: ${(props) => props.theme['base-title']};
	}
	
	p {
		color: ${(props) => props.theme['base-subtitle']};
	}
`
