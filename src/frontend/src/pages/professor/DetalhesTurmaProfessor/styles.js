import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Row } from 'antd'; // Importa o componente Row da antd

// Estiliza o contêiner principal dos detalhes da turma
export const DetalhesTurmaProfessorContainer = styled.div`
  overflow-x: hidden; // Esconde a barra de rolagem horizontal, se necessário

  // Estiliza o botão dentro do contêiner
  .ant-btn {
    border-radius: 100px; // Borda arredondada
    background-color: #3C4043; // Cor de fundo
    width: 250px; // Largura fixa
  }

  // Estiliza o cabeçalho da turma
  .cabecalho-turma {
    display: flex; // Aplica um layout flexível
    .ant-btn {
      margin-left: auto; // Alinha o botão à direita
    }
  }

  // Estiliza os elementos dentro do cabeçalho da turma
  .cabecalho-turma > * {
    margin: 0; // Remove as margens
    padding: 0; // Remove o espaçamento interno
  }

  // Estiliza o breadcrumb
  .ant-breadcrumb {
    margin-left: 20px; // Adiciona margem à esquerda
    cursor: default; // Define o cursor padrão
  }
  p {
    font-size: 18px;
  
  }
`;

// Estiliza o componente Row da antd para os detalhes da turma
export const StyledRowDetalhes = styled(Row)`
  padding-left: 20px; // Adiciona espaçamento interno à esquerda
`;
