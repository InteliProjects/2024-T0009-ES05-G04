import React from 'react';
import { StyledCard } from './styles';

export const CardDado = ({ titulo, dado, index }) => {
  return (
    <StyledCard index={index}>
      <h2>{titulo}</h2>
      <p>{dado}</p>
    </StyledCard>
  );
};
