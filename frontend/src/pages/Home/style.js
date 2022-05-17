import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import st from 'styled-components';

export const Home = st.div`
  color: var(--violet-dark);
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 6% 4% 30% 4%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--violet-light);
  background-image: linear-gradient(to left top, #760092, #9746ad, #b776c9, #d6a5e4, #f6d5ff);

  @media(min-width: 992px) {
    overflow: hidden;
    padding: 1% 2%;
  }
`
export const HomeMain = st.section`

  @media(min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
  }
`
export const Image = st.img`
  width: 90vw;
  margin-bottom: 2rem;

  @media(min-width: 992px) {
    width: 40vw;
  }
`
export const Header = st.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Text = st.p`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Kalam', cursive;

  @media(min-width: 992px) {
   text-align: right;
   margin-left: 4%
  }
`
export const Icon = st.img`
  width: 6vw;

  @media(min-width: 992px) {
    width: 3vw;
  }
`
export const HeaderNav = st.section`
  justify-content: space-between;
  align-items: center;
  width: 44vw;
  display: flex;

  @media(min-width: 992px) {
    width: 20vw;
  }
`
export const SignUp = st.button`
  font-weight: bold;
  
  @media(min-width: 992px) {
    font-size: 22px;
  }
`
export const Modal = st.section`
  z-index: 2;
  position: fixed;
  top: 10%;
  right: 6%;
  display: flex;
  justify-content: right;
  align-items: center;
`
export const LoginButton = styled(Button)({
  textTransform: 'none',
  fontSize: 12,
  padding: '4px 16px',
  ['@media (min-width:780px)']: {
    fontSize: 24
  }
});