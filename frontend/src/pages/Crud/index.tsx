import * as St from './style';
import Header from '../../shared/components/Header';
import Company from '../../images/company.png';
import Ticket from '../../images/tickets.png';
import Local from '../../images/local.png';

const Crud = () => {
  return (
    <St.CrudContainer>
      <Header />
      
      <St.Crud>
        <St.CrudSection>
          <St.Image src={Company} alt='Empresas'/>
          <St.Title>Empresas</St.Title>
        </St.CrudSection>

        <St.CrudSection>
          <St.Image src={Local} alt='Locais' />
          <St.Title>Locais</St.Title>
        </St.CrudSection>

        <St.CrudSection>
          <St.Image src={Ticket} alt='Tickets' />
          <St.Title>Tickets</St.Title>
        </St.CrudSection>
      </St.Crud>
    </St.CrudContainer>
  );
}

export default Crud