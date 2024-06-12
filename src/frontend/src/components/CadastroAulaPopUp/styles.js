import styled from 'styled-components'; 
import { Modal, Form } from 'antd'; 

// Estiliza o componente Modal da antd para o cadastro de aulas
export const StyledCadastroAulaPopUp = styled(Modal)`
  .ant-modal-body {
    max-height: 60vh; 
    overflow-y: auto; 
    margin-right: -20px; 
  }

  .ant-modal-footer {
    display: none; 
  }

  .ant-form-item-control-input-content {
    display: flex;
  }
`;

// Estiliza o componente Form da antd
export const StyledForm = styled(Form)`
  // Estiliza os itens do formulário
  .ant-form-item {
    margin-bottom: 16px; 
    margin-right: 20px; 
  }

  // Estiliza o label dos itens do formulário
  .ant-form-item-label > label {
    color: #4a4a4a; 
  }

  // Estiliza os inputs e date pickers dentro dos Form.Item
  .custom-form-item {
    .ant-form-item-control-input {
      input,
      .ant-picker {
        border-radius: 8px; 
      }
    }
  }
`;
