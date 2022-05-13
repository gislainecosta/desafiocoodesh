import { MouseEventHandler } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  isOpen: boolean
  handleClose: MouseEventHandler
}

export default function SignUp(props: Props) {  
  return (
    <div>
      <Dialog open={props.isOpen}>
        <DialogTitle>
          Cadastre-se

          <IconButton
            aria-label="close"
            onClick={props.handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Nome de usuário"
            type="text"
            fullWidth
            variant="standard"
          />
          
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="E-mail"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Insira uma senha"
            type="password"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="confirm-password"
            label="Confirme sua senha"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        
        <DialogActions>
          <Button 
            variant="contained"
            onClick={props.handleClose}
          >
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}