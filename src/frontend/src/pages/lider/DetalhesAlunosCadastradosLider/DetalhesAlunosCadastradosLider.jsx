import React from 'react';
import { useLocation } from 'react-router-dom';
import { DetalhesAlunoLiderContainer } from './styles';
import { Header } from '../../../components/layout/Header/Header';
import { DetalhesAlunosCadastradosLider } from '../../../components/DetalhesAlunosCadastradosLider/DetalhesAlunosCadastradosLider'

export const DetalhesAlunos = () => {
  const { state } = useLocation();
  const { idAluno } = state;

  return (
    <DetalhesAlunoLiderContainer>
      <Header />
      <DetalhesAlunosCadastradosLider idAluno={idAluno} />
    </DetalhesAlunoLiderContainer>
  );
};