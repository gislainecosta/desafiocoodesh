import { MouseEventHandler, useState, useEffect } from 'react';
import * as Mask from '../../utils'
import axios from 'axios';
import * as St from './style';
import SignUp from '../CreateUser';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

interface Props {
  isOpen: boolean,
  handleClose: MouseEventHandler
}

interface State {
  company_name: string;
  cnpj: string;
  company_description: string;
  company_admin: string
}

export default function FormCompany(props: Props) {
  const [openSignUp, setOpenSignUp] = useState<boolean>(false)
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [alertIsOpen, setAlertIsOpen] = useState<boolean>(false);
  const [values, setValues] = useState<State>({
    company_name: "",
    cnpj: "",
    company_description: "",
    company_admin: ""
  });

  const handleClickOpen = (type: string) => {
    type === 'signin' ? setOpenSignIn(true) : setOpenSignUp(true);
  };

  const handleClickClose = (type: string) => {
    type === 'signin' ? setOpenSignIn(false) : setOpenSignUp(false);
  };

  useEffect(() => {
    if (
      values.company_name !== "" &&
      values.cnpj !== "" &&
      values.company_description !== "" &&
      values.company_admin !== ""
      ) {
      setButtonIsDisabled(false);
    } else {
      setButtonIsDisabled(true);
    }
  }, [values]);

  const handleChange = (name: string, value: any) => {
    setValues({ ...values, [name]: value });
  }

  const createNewCompany = async () => {
    const body = {
      company_name: values.company_name,
      cnpj: values.cnpj,
      company_description: values.company_description,
      company_admin: values.company_admin,
    };
    try {
      const response = await axios.post('http://localhost:3003/users', body);
      console.log(response)
    } catch (e) {
      setAlertIsOpen(true)
    }
  };


  return (
    <Dialog open={props.isOpen}>
      <DialogTitle>
        Nova Empresa
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
        <St.Form>
          <TextField
            required
            autoFocus
            margin="dense"
            id="company_name"
            label="Nome da Empresa"
            type="text"
            fullWidth
            variant="standard"
            value={values.company_name}
            onChange={(ev) => handleChange('company_name', Mask.maskOnlyLetters(ev.target.value))}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="cnpj"
            label="CNPJ"
            type="text"
            fullWidth
            variant="standard"
            value={values.cnpj}
            onChange={(ev) => handleChange('cnpj', Mask.maskCNPJ(ev.target.value))}
          />

          <TextField
            required
            autoFocus
            margin="dense"
            id="company_description"
            label="Descrição da Empresa"
            type="text"
            fullWidth
            variant="standard"
            multiline
            value={values.company_description}
            onChange={(ev) => handleChange('company_description', ev.target.value)}
          />

          <St.CompanyAdmin>
            <FormControl variant="standard" sx={{ width: '60%'}}>
              <InputLabel id="demo-simple-select-standard-label">Administrador</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={values.company_admin}
                onChange={(ev) => handleChange('company_admin', ev.target.value)}
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <St.NewAdmin onClick={handleClickOpen}>Novo Admin</St.NewAdmin>
          </St.CompanyAdmin>
        </St.Form>
      </DialogContent>

      <DialogActions>
        <Button
          disabled={buttonIsDisabled}
          variant="contained"
          onClick={createNewCompany}
        >
          Criar Empresa
        </Button>
      </DialogActions>

      {
        alertIsOpen && <Alert onClose={() => { setAlertIsOpen(false) }} severity="error">
          <AlertTitle>Error</AlertTitle>
          Por favor, tente novamente
        </Alert>
      }

      <SignUp isOpen={openSignUp} handleClose={() => handleClickClose('signup')} />

    </Dialog>
  );
}