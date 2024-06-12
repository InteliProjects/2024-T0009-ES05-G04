import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Modal, Button, Checkbox } from 'antd'; // Importa os componentes Modal, Button e Checkbox da antd

// Estiliza o componente Modal da antd para a presença do aluno
export const StyledPresencaPopUp = styled(Modal)`
  && {
    // Estiliza o cabeçalho do modal
    .ant-modal-header {
      padding: 0px 10px; // Adiciona espaçamento interno no cabeçalho
    }

    // Estiliza o corpo do modal
    .ant-modal-body {
      padding: 10px; // Adiciona espaçamento interno no corpo
    }

    // Estiliza o rodapé do modal
    .ant-modal-footer {
      display: flex; // Aplica um layout flexível
      justify-content: center; // Centraliza o conteúdo horizontalmente
    }

    // Estiliza o título do modal
    .ant-modal-title {
      margin-top: -6px; // Modifica a margem superior do título
    }
  }
`;

// Estiliza o item de aluno na lista
export const AlunoListItem = styled.div`
  display: flex; // Aplica um layout flexível
  align-items: center; // Alinha os itens verticalmente
  justify-content: space-between; // Distribui o espaço entre os itens
  padding: 10px 0; // Adiciona espaçamento interno
  border-bottom: 1px solid #f0f0f0; // Adiciona uma borda inferior

  // Remove a borda inferior do último item
  &:last-child {
    border-bottom: none;
  }
`;

// Estiliza o botão de confirmação
export const ConfirmButton = styled(Button)`
  border-radius: 100px; // Borda arredondada
  background-color: #3C4043; // Cor de fundo
  width: 200px; // Largura fixa
  display: block; // Exibe o botão como um bloco
  margin-left: auto; // Alinha o botão à direita
  margin-right: auto; // Alinha o botão à esquerda
`;

// Estiliza o componente Checkbox da antd
export const StyledCheckbox = styled(Checkbox)`
  // Estiliza o checkbox quando estiver marcado
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #52c41a; // Cor de fundo quando marcado
    border-color: #52c41a; // Cor da borda quando marcado
  }
  
  // Estiliza o checkbox
  .ant-checkbox-inner {
    border-color: #d9d9d9; // Cor da borda
  }
`;

export const AlunoNameContainer = styled.span``;

export const CheckboxContainer = styled.div``;
