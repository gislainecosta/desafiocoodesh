import Header from '../../shared/components/Header';
import * as St from './style';
import FormLocal from '../../shared/components/FormLocals';

import Paper from '@mui/material/Paper';
import TableLocal from '../../shared/components/TableLocal';

const Locals = () => {
  return (
    <St.Locals>
      <Header />
      
      <Paper 
        elevation={3}
        sx={{ 
          width: '94vw',
          margin: '0 auto',
          color: 'primary.main',
          marginTop: '1.4rem',
          padding: '4%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <St.PageTitle>Locais</St.PageTitle>
        <FormLocal />
        <TableLocal />
      </Paper>
      
    </St.Locals>
  );
}

export default Locals