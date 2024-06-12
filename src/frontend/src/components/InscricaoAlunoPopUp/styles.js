import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Modal } from 'antd'; // Importa o componente Modal da antd

// Estiliza o componente Modal da antd para a inscrição do aluno
export const StyledInscricaoAlunoPopUp = styled(Modal)`
  // Estiliza o título do modal
  .ant-modal-title {
    margin-top: -5px; // Modifica a margem superior do título
    margin-bottom: 25px; // Modifica a margem inferior do título
  }

  // Estiliza o rodapé do modal
  .ant-modal-footer {
    display: flex; // Aplica um layout flexível para o rodapé
  }

  // Estiliza o botão de adicionar no rodapé
  .button-add {
    border-radius: 100px; // Borda arredondada
    background-color: #00B094; // Cor de fundo
    width: 150px; // Largura fixa
  }

  // Estiliza o botão de cancelar no rodapé
  .button-cancel {
    border-radius: 100px; // Borda arredondada
    background-color: #EB1D68; // Cor de fundo
    width: 150px; // Largura fixa
    margin-right: auto; // Alinha o botão à direita
  }
`;

// Estiliza o contêiner para o nome do aluno
export const AlunoNameContainer = styled.span``;

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

// Estiliza o contêiner para os checkboxes
export const CheckboxContainer = styled.div``;
