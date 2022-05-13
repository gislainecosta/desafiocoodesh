import * as St from './style';
import { Routes, Route, Navigate } from 'react-router-dom';
import Companies from '../Companies';
import Locals from '../Locals';
import Tickets from '../Tickets';
import Header from '../../shared/components/Header';

const Crud = () => {
  return (
    <St.Crud>
      <Header />
      <p>CRUD</p>

    </St.Crud>
  );
}

export default Crud