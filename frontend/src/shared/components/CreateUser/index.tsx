import { MouseEventHandler, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Mask from '../../utils'
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
import FormAddress from '../FormAdress';
interface Props {
  isOpen: boolean
  handleClose: MouseEventHandler
}

interface State {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
}

export default function SignUp(props: Props) {
  const navigateTo = useNavigate()
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [addressValue, setAddressValue] = useState<string>("");
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<State>({
    name: "",
    email: "",
    address: "",
    phone: "",
    password: ""
  });

  useEffect(() => {
    if (
        values.email !== "" && 
        values.password !== "" && 
        values.name !== "" && 
        values.phone !== "" && 
        values.address !== ""
      ) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [values]);

  useEffect(() => {
    setValues({ ...values, address: addressValue });
  }, [addressValue]);
  
  const signUp = async () => {
    const body = {
      name: values.name,
      email: values.email,
      address: values.address,
      phone: values.phone,
      password: values.password,
    };
    try {
      const response = await axios.post('http://localhost:3003/users', body);
      console.log(response.data.access_token)

      localStorage.setItem("token", response.data.access_token);
      console.log("LOCAL STORAGE", localStorage)
      navigateTo('crud')
      console.log(localStorage)
    } catch (e) {
      setAlertIsOpen(true)
    }
  };

  const handleChange = (name:string, value:any )  => {
    setValues({ ...values, [name]: value });
  }

  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>
        Novo Usuário

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
          required
          autoFocus
          margin="dense"
          id="username"
          label="Nome de usuário"
          type="text"
          fullWidth
          variant="standard"
          value={values.name}
          onChange={(ev) => handleChange('name', Mask.maskOnlyLetters(ev.target.value))}
        />

        <TextField
          required
          autoFocus
          margin="dense"
          id="email"
          label="E-mail"
          type="email"
          fullWidth
          variant="standard"
          value={values.email}
          onChange={(ev) => handleChange('email', ev.target.value)}
        />
        
        <FormAddress editAddress={setAddressValue}/>

        <TextField
          required
          autoFocus
          margin="dense"
          id="phone"
          label="Telefone"
          type="phone"
          fullWidth
          variant="standard"
          value={values.phone}
          onChange={(ev) => handleChange('phone', Mask.maskPhone(ev.target.value))}
        />

        <TextField
          required
          autoFocus
          margin="dense"
          id="password"
          label="Insira uma senha"
          type="password"
          fullWidth
          variant="standard"
          value={values.password}
          onChange={(ev) => handleChange('password', ev.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button
          disabled={buttonIsDisabled}
          variant="contained"
          onClick={signUp}
        >
          Enviar
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