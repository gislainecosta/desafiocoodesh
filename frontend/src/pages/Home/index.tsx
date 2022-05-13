import * as St from './style';
import Image from '../../images/ecommerce2.png';
import GitImage from '../../images/github.png';

const Home = () => {

  return (
    <St.Home>
      <St.Header>
        <a 
          href="https://github.com/gislainecosta/desafiocoodesh"
          target="_blank"
        >
          <St.Icon src={GitImage} alt="ícone do Github"/>
        </a>
        
        <St.HeaderNav>
          <St.SignUp>Cadastre-se</St.SignUp>
          <St.SignIn>Login</St.SignIn>
        </St.HeaderNav>
      </St.Header>
      
      <St.Image src={Image} alt="Image Home" />
      <St.Text>Unindo pequenas empresas aos seus clientes</St.Text>
    </St.Home>
  );
}

export default Home