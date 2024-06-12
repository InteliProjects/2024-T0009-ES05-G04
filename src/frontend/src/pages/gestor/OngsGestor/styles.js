import styled from "styled-components";

export const OngsGestorContainer = styled.div`
.cabecalho-ongs {
    display: flex; // Aplica um layout flexível
    padding: 20px;
    .ant-btn {
      margin-left: auto; // Alinha o botão à direita
    }
  }

  .cabecalho-ongs > * {
    margin: 0; // Remove as margens
    padding: 0; // Remove o espaçamento interno
  }
`