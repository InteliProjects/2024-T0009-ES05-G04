import React from 'react';
import { useLocation } from 'react-router-dom';
import { DetalhesOficinaLiderContainer } from './styles';
import { Header } from '../../../components/layout/Header/Header';
import { DetalhesOficina } from '../../../components/DetalhesOficina/DetalhesOficina';

export const DetalhesOficinaLider = () => {
  const { state } = useLocation();
  const { idOficina } = state;

  return (
    <DetalhesOficinaLiderContainer>
      <Header />
      <DetalhesOficina idOficina={idOficina} />
    </DetalhesOficinaLiderContainer>
  );
};
