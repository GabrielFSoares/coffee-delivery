import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ItemsInCartContextProvider } from './contexts/ItemsInCartContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ItemsInCartContextProvider>
          <Router />
        </ItemsInCartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
