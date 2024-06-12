import styled from 'styled-components';

export const OficinasLiderContainer = styled.div`
  .cabecalho-oficinas {
    display: flex; // Aplica um layout flexível
    padding: 20px;
    .ant-btn {
      margin-left: auto; // Alinha o botão à direita
    }
  }

  .cabecalho-oficinas > * {
    margin: 0; // Remove as margens
    padding: 0; // Remove o espaçamento interno
  }
`;
