import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/themes/default'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
