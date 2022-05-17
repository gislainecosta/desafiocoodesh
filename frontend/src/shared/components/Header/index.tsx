import { useWindowSize } from "react-use-size";
import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function ButtonAppBar() {
  const navigateTo = useNavigate()
  const { width } = useWindowSize();

  const userData = localStorage.getItem('token')
  console.log("Dados do Usuário", userData)

  const logout = () =>{
    localStorage.removeItem('token')
    navigateTo('/')
  }
  
  return (
    <Box 
    sx={{ width: '100vw' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="logout"
            onClick={() => navigateTo('/crud') }
          >
            <AppsIcon />
          </IconButton>
          
          { 
            width > 768 && 
              <Typography 
                variant="body1" 
                component="div" 
                sx={{ 
                  flexGrow: 1,
                  color: 'primary.contrastText', 
                  textAlign: 'right',
                  paddingRight: '2rem'
                }}>
                Olá, seja bem-vindo!
              </Typography>
          }
          
          <IconButton
            size="large"
            color="inherit"
            aria-label="logout"
            onClick={logout}
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
