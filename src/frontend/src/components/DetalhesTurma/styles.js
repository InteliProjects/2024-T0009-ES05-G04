import styled from 'styled-components';
import { Form } from 'antd';

export const DetalhesTurmaContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;

  .cancelButton {
    border-radius: 100px;
    background-color: #ffffff;
    border: 1px solid #3c4043;
    width: 200px;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    color: #3c4043;
    display: block;
  }

  .ant-breadcrumb {
    margin-left: 20px; // Adiciona margem à esquerda
    cursor: default; // Define o cursor padrão
  }
`;

export const StyledForm = styled(Form)`
  // Estiliza os itens do formulário
  .ant-form-item {
  }

  // Estiliza os inputs e date pickers dentro dos Form.Item
  .custom-form-item {
    .ant-form-item-control-input {
      input,
      .ant-picker {
      }
    }
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
  padding: 20px;
  margin-left: auto;
  .value {
    margin-bottom: 20px;
  }

  > * {
    margin: 0; // Remove as margens
    padding: 0; // Remove o espaçamento interno
  }
`;

export const StyledFormContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftButtons = styled.div`
  display: flex;
`;

export const RightButtons = styled.div`
  display: flex;
`;
