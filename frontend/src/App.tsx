import { GlobalStyle } from './shared/themes/globalStyle';
import { ThemeProvider } from 'styled-components';
import { MaterialTheme } from './shared/themes/materialTheme';
import styled from 'styled-components';

import { Routes, Route, Navigate } from 'react-router-dom';
import Crud from './pages/Crud';
import Companies from './pages/Companies';
import Locals from './pages/Locals';
import Tickets from './pages/Tickets';
import Home from './pages/Home';

import { BrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    component: <Home />
  },
  {
    path: '/crud',
    component: <Crud />
  },
  {
    path: '/companies',
    component: <Companies />
  },
  {
    path: '/locals',
    component: <Locals />
  },
  {
    path: '/tickets',
    component: <Tickets />
  }
];

const ContainerApp = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: space-between;
`

function App() {
  return (
    <ThemeProvider theme={MaterialTheme}>
      <ContainerApp>
        <GlobalStyle />

        <BrowserRouter>
          <Routes>
            {
              routes.map(
                (route) => <Route
                  key={route.path}
                  path={route.path}
                  element={route.component}
                />
              )
            }
            <Route path='*' element={<Navigate to='/' />} />
          </Routes>
        </BrowserRouter>

      </ContainerApp>
    </ThemeProvider>
  )
}

export default App
