import * as St from './style';

import TextField from '@mui/material/TextField';

export default function FormCompany() {
  return (
    <St.Form>
      <St.FormTitle>Criar uma nova empresa</St.FormTitle>
      <TextField
        required
        id="filled-required"
        label="Nome da Empresa"
        variant="standard"
        fullWidth
      />

      <TextField
        required
        id="filled-required"
        label="CNPJ"
        variant="standard"
      />

      <TextField
        id="filled-multiline-static"
        label="Descrição"
        multiline
        rows={2}
        variant="standard"
        fullWidth
      />
    </St.Form>
  );
}