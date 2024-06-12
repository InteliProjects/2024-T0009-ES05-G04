import React from 'react';
import { useLocation } from 'react-router-dom';
import { DetalhesOngGestorContainer } from './styles';
import { Header } from '../../../components/layout/Header/Header';
import { DetalhesOng } from '../../../components/DetalhesOng/DetalhesOng';

export const DetalhesOngGestor = () => {
  const { state } = useLocation();
  const { idOng } = state;

  return (
    <DetalhesOngGestorContainer>
      <Header />
      <DetalhesOng idOng={idOng} />
    </DetalhesOngGestorContainer>
  );
};
