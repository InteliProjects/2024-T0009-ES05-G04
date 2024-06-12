import React from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { useLocation } from 'react-router-dom';
import { ProximasAulasGestorContainer } from './styles';
import { ProximasAulas } from '../../../components/ProximasAulas/ProximasAulas';

export const ProximasAulasGestor = () => {
  const location = useLocation();
  const { idTurma, nomeTurma } = location.state;

  return (
    <ProximasAulasGestorContainer>
      <Header />
      <ProximasAulas idTurma={idTurma} nomeTurma={nomeTurma} />
    </ProximasAulasGestorContainer>
  );
};
