import { MouseEventHandler, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
  isOpen: boolean,
  handleClose: MouseEventHandler
}

interface State {
  email: string;
  password: string;
}

export default function SignIn(props: Props) {
  const navigateTo = useNavigate()
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<State>({
    email: '',
    password: ''
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };
  

  useEffect(() => {
    if (values.email !== "" && values.password !== "") {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [values]);


  const login = async () => {
    const body = {
      email: values.email,
      password: values.password,
    };
    try {
      const response = await axios.post('http://localhost:3003/users/login', body);
      console.log(response.data.access_token)

      localStorage.setItem("token", response.data.access_token);
      console.log("LOCAL STORAGE", localStorage)
      navigateTo('crud')
      console.log(localStorage)
    } catch (e) {
      setAlertIsOpen(true)
    }
  };

  return (
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
          value={values.email}
          onChange={handleChange('email')}
        />

        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="senha"
          type="password"
          fullWidth
          variant="standard"
          value={values.password}
          onChange={handleChange('password')}
        />
      </DialogContent>

      <DialogActions>
        <Button
          disabled={buttonIsDisabled}
          variant="contained"
          onClick={login}
        >
          Entrar
        </Button>
      </DialogActions>

      {
        alertIsOpen && <Alert onClose={() => { setAlertIsOpen(false) }} severity="error">
          <AlertTitle>Error</AlertTitle>
          Por favor, tente novamente
        </Alert>
      }

    </Dialog>
  );
}