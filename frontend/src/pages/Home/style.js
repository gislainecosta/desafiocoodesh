import styled from 'styled-components';

export const Home = styled.div`
  color: var(--violet-dark);
  text-align: center;
  padding: 0 2%;
  background-color: var(--violet-light);
  background-image: linear-gradient(to left top, #760092, #9746ad, #b776c9, #d6a5e4, #f6d5ff);
`
export const Image = styled.img`
  width: 90vw;
  margin: 10vh 0 8vh 0;
`
export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Text = styled.p`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Kalam', cursive;
`
export const Icon = styled.img`
  width: 6vw;
`
export const HeaderNav = styled.section`
  justify-content: space-between;
  align-items: center;
  width: 40vw;
  display: flex;
`
export const SignUp = styled.button`
  font-weight: bold;
`
export const SignIn = styled.button`
  background-color: var(--violet-dark);
  color: var(--violet-light);
  font-weight: bold;
  padding: 4% 6%;
  border-radius: 10px;
`
export const Modal = styled.section`
  z-index: 2;
  position: fixed;
  top: 10%;
  right: 6%;
  display: flex;
  justify-content: right;
  align-items: center;
`