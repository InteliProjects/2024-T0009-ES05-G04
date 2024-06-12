import React from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../../components/layout/Header/Header.jsx';
import {
  DetalhesTurmaLiderContainer,
} from './styles.js';
import { DetalhesTurma } from '../../../components/DetalhesTurma/DetalhesTurma.jsx';
import { useAuth } from '../../../context/AuthContext.js';

export const DetalhesTurmaLider = () => {

  const { state } = useLocation();
  const { idTurma, nomeOficina } = state;

  const { idOng } = useAuth();

  return (
    <DetalhesTurmaLiderContainer>
      <Header />

      <DetalhesTurma idTurma={idTurma} idOng={idOng} nomeOficina={nomeOficina}/>
    </DetalhesTurmaLiderContainer>
  );
};
