import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { ItemsInCartContextProvider } from './contexts/ItemsInCartContext'
import { CoffeeListContextProvider } from './contexts/CoffeeListContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeeListContextProvider>
          <ItemsInCartContextProvider>
            <Router />
          </ItemsInCartContextProvider>
        </CoffeeListContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
