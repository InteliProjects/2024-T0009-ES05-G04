import React from 'react';
import { useQuery } from 'react-query';
import {
  ReadOnlyField,
  DetalhesOngContainer,
  Cabecalho,
} from './styles';
import { fetchDetalhesOng } from '../../services/ongsService';

export const DetalhesOng = ({ idOng }) => {

  const { data: ong } = useQuery(['ong', idOng], () =>
    fetchDetalhesOng(idOng)
  );

  return (
    <DetalhesOngContainer>
      <Cabecalho>
        <h1 className="value">{ong?.nome}</h1>
      </Cabecalho>
      <div>
        <ReadOnlyField>
          <span className="label">Nome</span>
          <div className="value">{ong?.nome}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Endereço</span>
          <div className="value">{ong?.endereco}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Bairro</span>
          <div className="value">{ong?.bairro}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Número</span>
          <div className="value">{ong?.numero}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Cidade</span>
          <div className="value">{ong?.cidade}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Estado</span>
          <div className="value">{ong?.estado}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Líder Responsável</span>
          <div className="value">{ong?.nome_lider}</div>
        </ReadOnlyField>
      </div>
    </DetalhesOngContainer>
  );
};
