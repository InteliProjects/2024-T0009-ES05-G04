import styled from 'styled-components'; 
import { Modal, Form } from 'antd'; 

export const StyledCadastroProfessorPopUp = styled(Modal)`
  .ant-modal-body {
    max-height: 60vh; // Altura máxima do corpo do modal
    overflow-y: auto; // Adiciona scroll vertical se o conteúdo exceder a altura máxima
    margin-right: -20px; // Corrige a margem direita para compensar a barra de rolagem
  }

  .ant-modal-footer {
    display: none; // Esconde o rodapé do modal
  }

  // Estiliza o formulário dentro do modal
  .ant-form-item-control-input-content {
    display: flex; // Aplica um layout flexível para os itens do formulário
  }
`;

// Estiliza o componente Form da antd
export const StyledForm = styled(Form)`
  // Estiliza os itens do formulário
  .ant-form-item {
    margin-bottom: 16px; // Modifica a margem inferior dos itens do formulário
    margin-right: 20px; // Modifica a margem direita dos itens do formulário
  }

  // Estiliza o label dos itens do formulário
  .ant-form-item-label > label {
    color: #4a4a4a; // Modifica a cor do label
  }

  // Estiliza os inputs dentro dos Form.Item
  .custom-form-item {
    .ant-form-item-control-input {
      input,
      .ant-picker {
        border-radius: 8px; // Modifica o border-radius dos inputs
      }
    }
  }
`;
