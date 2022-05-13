import { useState } from 'react';
import * as St from './style';
import Image from '../../images/ecommerce2.png';
import GitImage from '../../images/github.png';
import SignIn from '../../shared/components/SignIn';
import SignUp from '../../shared/components/SignUp';

const Home = () => {
  const [openSignIn, setOpenSignIn] = useState<boolean>(false)
  const [openSignUp, setOpenSignUp] = useState<boolean>(true)
  
  const handleClickOpen = (type:string) => {
    type === 'signin' ? setOpenSignIn(true) : setOpenSignUp(true);
  };

  const handleClickClose = (type: string) => {
    type === 'signin' ? setOpenSignIn(false) : setOpenSignUp(false);
  };

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
          <St.SignUp onClick={() => handleClickOpen('signup')}>
            Cadastre-se
          </St.SignUp>
          
          <St.SignIn onClick={() => handleClickOpen('signin')}>
            Login
          </St.SignIn>
        </St.HeaderNav>
      </St.Header>
      
      <St.Image src={Image} alt="Image Home" />
      
      <St.Text>Unindo pequenas empresas aos seus clientes</St.Text>
      
      <St.Modal>
        <SignUp isOpen={openSignUp} handleClose={() => handleClickClose('signup')}/>
        <SignIn isOpen={openSignIn} handleClose={() => handleClickClose('signin')}/>
      </St.Modal>
    </St.Home>
  );
}

export default Home