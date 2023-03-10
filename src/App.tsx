import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './Styles/global'
import { defaultTheme } from './Styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      App
      <GlobalStyle />
    </ThemeProvider>
  )
}
