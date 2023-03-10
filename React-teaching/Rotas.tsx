***Passo 1***

Criar componente Router.tsx

//Exemplo:

import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { History } from './pages/History';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/history" element={<History />} /> 
    </Routes>
  )
}


***Passo 2***

Importar BrowserRouter em App.tsx

//Como?:

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

//Envolver rotas com o BrowserRouter. Exemplo:

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />     // <!-- Aqui />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}


***Layout de rotas***

Utilizar Outlet no component de Layout padrão:

import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header /> // Component que sempre vai se repetir nas páginas
      <Outlet />
    </LayoutContainer>
  )
}

//Para utilizar:

Precisa ir nas rotas/:

<Routes>
   <Route path="/" element={<DefaultLayout />}> // 
      <Route path="/" element={<Home />} />
      <Route path="/history" element={<History />} />
  </Route>
</Routes>

