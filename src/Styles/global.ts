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
	}

	body > div {
		margin: 0 auto;
		max-width: 1440px;

		padding: 0 111px;
	}

	body, input, textarea, button, p, span {
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 1rem;
	}

	input, textarea, button, p, span, h1, h2, a {
		line-height: 130%;
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
