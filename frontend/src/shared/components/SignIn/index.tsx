import { MouseEventHandler, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  isOpen: boolean
  handleClose: MouseEventHandler
}

export default function SignIn(props:Props) {
  return (
    <div>
      <Dialog open={props.isOpen}>
        <DialogTitle>
          Login

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
            id="name"
            label="e-mail"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="senha"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        
        <DialogActions>
          <Button onClick={props.handleClose}>Entrar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}