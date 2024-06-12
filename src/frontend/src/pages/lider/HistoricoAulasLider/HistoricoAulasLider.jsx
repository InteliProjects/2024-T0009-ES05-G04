import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../../components/layout/Header/Header';
import { HistoricoAulasLiderContainer } from './styles';
import { HistoricoAulas } from '../../../components/HistoricoAulas/HistoricoAulas';

export const HistoricoAulasLider = () => {
  const { state } = useLocation();
  const { idTurma, nomeTurma } = state;
  
  return (
    <HistoricoAulasLiderContainer>
      <Header />
      <HistoricoAulas idTurma={idTurma} nomeTurma={nomeTurma}/>
    </HistoricoAulasLiderContainer>
  );
};
