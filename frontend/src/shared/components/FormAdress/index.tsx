import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import * as St from "./style";
import axios from 'axios';
import * as Mask from '../../utils';

interface Props {
  editAddress: any;
}

interface State {
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city : string;
  state: string;
}

export default function FormAddress(props: Props) {
  const [values, setValues] = useState<State>({
    cep: "",
    street: "",
    number: "",
    complement: "",
    neighborhood: "",
    city : "",
    state: ""
  });

  useEffect(() => {
    const completeAddressWithComplement = `${values.street}, ${values.number} - ${values.complement} - ${values.neighborhood}, ${values.city} - ${values.state}, ${values.cep}`
    const completeAddressWithoutComplement = `${values.street}, ${values.number} - ${values.neighborhood}, ${values.city} - ${values.state}, ${values.cep}`
    
    props.editAddress(!values.complement ? completeAddressWithoutComplement : completeAddressWithComplement)
  }, [values]);

  const handleChange = (name: string, value: any) => {
    setValues({ ...values, [name]: value });
  }

  const checkCEP = async (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    try {
      if (cep){
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const address = response.data

        setValues({
          cep: address.cep,
          street: address.logradouro,
          number: '',
          complement: '',
          neighborhood: address.bairro,
          city: address.localidade,
          state: address.uf
        })
      }
      
    } catch (e) {
      console.log("Erro ao consultar API de CEP", e)
    }
  };

  return (
    <St.Form>
      <TextField
        required
        autoFocus
        margin="dense"
        id="cep"
        label="CEP"
        type="text"
        fullWidth
        variant="standard"
        value={values.cep}
        onChange={(ev) => handleChange('cep', Mask.maskCEP(ev.target.value))}
        onBlur={checkCEP}
      />

      <TextField
        disabled
        autoFocus
        margin="dense"
        id="street"
        label="Logradouro"
        type="text"
        fullWidth
        variant="standard"
        value={values.street}
      />

      <TextField
        required
        autoFocus
        margin="dense"
        id="number"
        label="Número"
        type="text"
        sx={{
          marginRight: '4vw'
        }}
        variant="standard"
        onChange={(ev) =>  handleChange('number', Mask.maskOnlyNumbers(ev.target.value))}
        value={values.number}
      />

      <TextField
        autoFocus
        margin="dense"
        id="complement"
        label="Complemento"
        type="text"
        variant="standard"
        onChange={(ev) =>  handleChange('complement', ev.target.value)}
        value={values.complement}
      />

      <TextField
        disabled
        autoFocus
        margin="dense"
        id="neighborhood"
        label="Bairro"
        type="text"
        fullWidth
        variant="standard"
        value={values.neighborhood}
      />

      <TextField
        disabled
        autoFocus
        margin="dense"
        id="city"
        label="Cidade"
        type="text"
        variant="standard"
        sx={{
          marginRight: '4vw'
        }}
        value={values.city}
      />

      <TextField
        disabled
        autoFocus
        margin="dense"
        id="state"
        label="Estado"
        type="text"
        variant="standard"
        value={values.state}
      />
    </St.Form>
  );
}
