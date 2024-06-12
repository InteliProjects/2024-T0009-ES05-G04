import React from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { useLocation } from 'react-router-dom';
import { ProximasAulasLiderContainer } from './styles';
import { ProximasAulas } from '../../../components/ProximasAulas/ProximasAulas';

export const ProximasAulasLider = () => {
  const location = useLocation();
  const { idTurma, nomeTurma } = location.state;

  return (
    <ProximasAulasLiderContainer>
      <Header />
      <ProximasAulas idTurma={idTurma} nomeTurma={nomeTurma} />
    </ProximasAulasLiderContainer>
  );
};
