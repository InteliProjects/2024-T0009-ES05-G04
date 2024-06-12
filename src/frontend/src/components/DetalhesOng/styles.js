import styled from 'styled-components';
import { Form } from 'antd';

export const DetalhesOngContainer = styled.div`
margin-left: 15px;
  margin-right: 15px;
  
  .ant-breadcrumb {
    margin-left: 20px; // Adiciona margem à esquerda
    cursor: default; // Define o cursor padrão
  }
`;

export const ReadOnlyField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;

  .label {
    font-size: 20px;
  }

  .value {
    font-size: 18px;
    color: #747474;
  }
`;

export const Cabecalho = styled.div`
  display: flex; // Aplica um layout flexível
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  > * {
    margin: 0; // Remove as margens
    padding: 0; // Remove o espaçamento interno
  }
`;
