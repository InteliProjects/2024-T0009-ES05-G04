import { Header } from '../../../components/layout/Header/Header';
import { OngsGestorContainer } from './styles';
import { Button } from 'antd';
import { TabelaOngs } from '../../../components/TabelaOngs/TabelaOngs';
import { CadastroOngPopUp } from '../../../components/CadastroOngPopUp/CadastroOngPopUp';
import { useState } from 'react';

export const OngsGestor = () => {
  const [isCadastroModalVisible, setCadastroModalVisible] = useState(false);

  const showCadastroModal = () => {
    setCadastroModalVisible(true);
  };

  const handleCancel = () => {
    setCadastroModalVisible(false);
  };

  return (
    <OngsGestorContainer>
      <Header />
      <div className="cabecalho-ongs">
        <h1>Ongs</h1>
        <Button className="defaultButton" onClick={showCadastroModal}>Cadastrar ong</Button>
      </div>
      <TabelaOngs />
      <CadastroOngPopUp
        open={isCadastroModalVisible}
        onClose={handleCancel}
      />
    </OngsGestorContainer>
  );
};
