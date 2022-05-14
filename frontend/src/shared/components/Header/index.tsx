import { useState, useEffect } from 'react';
import { useWindowSize } from "react-use-size";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AppsIcon from '@mui/icons-material/Apps';
import MenuIcon from '@mui/icons-material/Menu';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export default function ButtonAppBar() {
  const { width } = useWindowSize();
  
  console.log('Tamanho da Tela', width)
  
  return (
    <Box 
    sx={{ width: '100vw' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            color="inherit"
            aria-label="logout"
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
                Olá Gislaine
              </Typography>
          }
          
          <IconButton
            size="large"
            color="inherit"
            aria-label="logout"
          >
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
