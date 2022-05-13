import styled from 'styled-components';

export const Home = styled.div`
  color: var(--violet-dark);
  text-align: center;
  padding: 0 2%;
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