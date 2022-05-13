import { GlobalStyle } from './shared/themes/globalStyle';
import { createTheme, Theme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';
import './shared/themes/materialStyles.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import Crud from './pages/Crud';
import Companies from './pages/Companies';
import Locals from './pages/Locals';
import Tickets from './pages/Tickets';
import Home from './pages/Home';

import { BrowserRouter } from 'react-router-dom';

const MaterialTheme = createTheme({
  palette: {
    primary: {
      main: "#290134",
      dark: "#19021e",
      light: "#8407a0",
      contrastText: "#f7d4ff"
    }
  },
  typography: {
    fontFamily: `'Josefin Sans', 'Roboto', sans-serif`,
    fontSize: 16,
    fontWeightBold: 700,
    allVariants: {
      color: "#19021e"
    },
  }
});

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
