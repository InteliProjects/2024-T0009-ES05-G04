import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Form } from 'antd'; // Importa o componente Form da antd

// Estiliza o contêiner principal do login
export const LoginContainer = styled.div`
  display: flex; // Aplica um layout flexível
  flex-direction: column; // Define a direção dos itens como coluna
  justify-content: center; // Centraliza os itens verticalmente
  max-width: 300px; // Largura máxima do contêiner
  margin: auto; // Centraliza o contêiner horizontalmente
  height: 100vh; // Altura total da tela
`;

// Estiliza a imagem do logo
export const StyledImage = styled.img`
  width: 250px; // Largura da imagem
  height: auto; // Altura automática para manter a proporção
  margin: 30px 0px; // Margem superior e inferior
  display: block; // Exibe a imagem como bloco
  margin-left: auto; // Alinha a imagem à direita
  margin-right: auto; // Alinha a imagem à esquerda
`;

// Estiliza o formulário de login
export const StyledForm = styled(Form)`
  // Estiliza o label dos itens do formulário
  .ant-form-item-label > label {
    width: 80px; // Largura do label
  }

  // Estiliza os itens do formulário
  .ant-form-item {
    margin-bottom: 16px; // Margem inferior dos itens do formulário
  }

  // Estiliza o botão de submit do formulário
  .ant-btn {
    border-radius: 100px; // Borda arredondada
    background-color: #3C4043; // Cor de fundo
    width: 150px; // Largura fixa
    display: block; // Exibe o botão como bloco
    margin-left: auto; // Alinha o botão à direita
    margin-right: auto; // Alinha o botão à esquerda
  }
`;