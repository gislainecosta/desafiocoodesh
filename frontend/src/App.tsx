import { GlobalStyle } from './globalStyle';
import styled from 'styled-components';

import Home from './pages/Home';

const ContainerApp = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: space-between;
  padding: 5%;
  background-color: var(--violet-light);
  background-image: linear-gradient(to left top, #760092, #9746ad, #b776c9, #d6a5e4, #f6d5ff);
`

function App() {
  return (
    <ContainerApp>
      <GlobalStyle />
      <Home />
    </ContainerApp>
  )
}

export default App
