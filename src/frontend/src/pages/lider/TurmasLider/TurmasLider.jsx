import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../../components/layout/Header/Header';
import { CadastroTurmaPopUp } from '../../../components/CadastroTurmaPopUp/CadastroTurmaPopUp';
import { TurmasLiderContainer } from './styles';
import { TabelaTurmas } from '../../../components/TabelaTurmas/TabelaTurmas.jsx';
import { Button } from 'antd';

export const TurmasLider = () => {
  const [isCadastroModalVisible, setCadastroModalVisible] = useState(false);

  const { state } = useLocation();
  const { idOficina, nomeOficina } = state;

  const showCadastroModal = () => {
    setCadastroModalVisible(true);
  };

  const handleCancel = () => {
    setCadastroModalVisible(false);
  };

  return (
    <TurmasLiderContainer>
      <Header />
      <div class="cabecalho-gestao-turmas">
        <h1>{nomeOficina} - Turmas</h1>
        <Button className="defaultButton" onClick={showCadastroModal}>
          Cadastrar turma
        </Button>
      </div>
      <CadastroTurmaPopUp
        open={isCadastroModalVisible}
        onClose={handleCancel}
        oficinaId={idOficina}
      />
      <TabelaTurmas idOficina={idOficina} nomeOficina={nomeOficina}/>
      
    </TurmasLiderContainer>
  );
};
