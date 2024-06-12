import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Modal, Button } from 'antd'; // Importa o componente Modal e Button da biblioteca antd

// Estiliza o componente Modal da antd
export const StyledAlunosPopUp = styled(Modal)`
  && {
    .ant-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }
    .cabecalho-popup{
      display: flex;
      margin-top: -5px;
    
      .ant-btn{
        margin-left: auto;
        margin-top: 42.5px;
      }
      .ant-divider{
        position: absolute;
        left: 0;
        top: 80px;
       }
    }
    
    .ant-modal-title {
    }

    .ant-modal-body {
    }

    .ant-modal-footer {
      display: none; // Esconde o rodapé do modal
    }
  }
`;

// Estiliza o componente Button da antd para o botão de inscrição
export const InscreverButton = styled(Button)`
  border-radius: 100px; // Borda arredondada
  background-color: #3C4043; // Cor de fundo
  width: 150px; // Largura fixa
`;

// Estiliza um item de aluno na lista
export const AlunoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none; // Remove a borda inferior do último item
  }
`;

// Estiliza o contêiner para o ícone de exclusão do aluno
export const DeleteIconContainer = styled.div`
  color: #ff4d4f; // Cor do ícone de exclusão
  cursor: pointer; // Muda o cursor ao passar por cima
  &:hover {
    color: #ff7875; // Altera a cor ao passar o mouse por cima
  }
`;