import styled from 'styled-components';

export const CrudContainer= styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`
export const Crud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 8%;
  height: 90%;

  @media(min-width: 992px) {
    flex-direction: row;
  }
`
export const CrudSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Image = styled.img`
  width: 40vw;
  cursor: pointer;

  @media(min-width: 992px) {
    width: 20vw;
  }
`
export const Title = styled.p`
  font-size: 2rem;
  margin-top: 1.4rem;
  font-weight: bold;
`
