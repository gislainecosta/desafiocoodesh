import './shared/themes/materialStyles.css';
import { GlobalStyle } from './shared/themes/globalStyle';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from 'styled-components';

import Crud from './pages/Crud';
import Companies from './pages/Companies';
import Locals from './pages/Locals';
import Tickets from './pages/Tickets';
import Home from './pages/Home';

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

const PrivateRoute = ({ children, redirectTo}) => {
  const isAuthenticated = localStorage.getItem('token') != null;
  console.log('isAuth: ', isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

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
            <Route path='/' element={<Home />} /> 
            {
              routes.map(
                (route) => <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <PrivateRoute redirectTo='/'>
                      {route.component}
                    </PrivateRoute>
                  }
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
