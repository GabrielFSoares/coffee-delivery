***Instalação***

npm i styled-components

npm i @types/styled-components -D    /

***Utilização***

import styled from 'styled-components'

//Exemplo

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
        display: flex;
        gap: 0.5rem;
    }  
`

***Temas***

//Exemplo de tema

export const defaultTheme = {
   white: '#FFF',

  'gray-100': '#E1E1E6',
  'gray-300': '#C4C4CC',
}

//Utilização com ThemeProvider

import { ThemeProvider } from "styled-components"

//Exemplo

<ThemeProvider theme={defaultTheme}>
    <App />
</ThemeProvider>


***Global Style***

//Utilização
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`

//Na página principal
import { GlobalStyle } from './Styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      App
      <GlobalStyle />
    </ThemeProvider>
  )
}
