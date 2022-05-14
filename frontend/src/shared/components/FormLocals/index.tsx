import { useState } from 'react';
import * as St from './style';

import TextField from '@mui/material/TextField';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export default function FormLocal() {

  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Criar uma novo local</Typography>
      </AccordionSummary>
      
      <AccordionDetails>
        <St.Form>
          <TextField
            required
            id="filled-required"
            label="Nome do Local"
            variant="standard"
            fullWidth
          />

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Empresa</InputLabel>
            <Select
              required
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Empresas"
            >
              <MenuItem value={10}>Empresa1</MenuItem>
              <MenuItem value={20}>Empresa2</MenuItem>
              <MenuItem value={30}>Empresa3</MenuItem>
            </Select>
          </FormControl>

          <TextField
            required
            id="filled-multiline-static"
            label="Endereço"
            multiline
            rows={2}
            variant="standard"
            fullWidth
          />
        </St.Form>
      </AccordionDetails>
    </Accordion>
  );
}