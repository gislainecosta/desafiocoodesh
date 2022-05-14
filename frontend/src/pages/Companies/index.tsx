import Header from '../../shared/components/Header';
import * as St from './style';
import FormCompany from '../../shared/components/FormCompanies';

import Paper from '@mui/material/Paper';

const Companies = () => {
  return (
    <St.Companies>
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
        <St.PageTitle>Empresas</St.PageTitle>
        <FormCompany />
      </Paper>
      
    </St.Companies>
  );
}

export default Companies