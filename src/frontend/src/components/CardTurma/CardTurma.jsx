import React from 'react';
import { StyledCard } from './styles';
import { useNavigate } from 'react-router-dom';

export function CardTurma({ turma }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/turmas/${turma.id}`, { state: { turma } });
  };

  return (
    <StyledCard turma={turma} onClick={handleCardClick}>
      <h2>{turma.nome_oficina}</h2>
      <p>{turma.nome}</p>
    </StyledCard>
  );
}

