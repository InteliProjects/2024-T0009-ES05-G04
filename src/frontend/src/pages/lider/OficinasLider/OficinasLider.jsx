import React, { useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { TabelaOficinas } from '../../../components/TabelaOficinas/TabelaOficinas';
import { useAuth } from '../../../context/AuthContext';
import { Button } from 'antd';
import { OficinasLiderContainer } from './styles';
import { CadastroOficinaPopUp } from '../../../components/CadastroOficinaPopUp/CadastroOficinaPopUp'

export const OficinasLider = () => {
  const [ isCadastroModalVisible, setCadastroModalVisible ] = useState(false);
  const { idOng } = useAuth();

  const showCadastroModal = () => {
    setCadastroModalVisible(true);
  };

  const handleCancel = () => {
    setCadastroModalVisible(false);
  };

  return (
    <OficinasLiderContainer>
      <Header />
      <div className="cabecalho-oficinas">
        <h1>Oficinas</h1>
        <Button className="defaultButton" onClick={showCadastroModal}>
          Cadastrar oficina
        </Button>
      </div>
      <TabelaOficinas idOng={idOng} />
      {isCadastroModalVisible && (
        <CadastroOficinaPopUp
          open={isCadastroModalVisible}
          onClose={handleCancel}
        />
      )}
    </OficinasLiderContainer>
  );
};
