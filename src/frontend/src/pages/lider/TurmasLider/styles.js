import styled from "styled-components";
import { Table } from "antd";

export const TurmasLiderContainer = styled.div`

    .cabecalho-gestao-turmas{
        display: flex; // Aplica um layout flexível
        padding: 20px;
        .ant-btn {
          margin-left: auto; // Alinha o botão à direita
        }
    }

    .cabecalho-gestao-turmas> * {
        margin: 0; // Remove as margens
        padding: 0; // Remove o espaçamento interno
    }

    // Estiliza o breadcrumb
    .ant-breadcrumb {
      margin-left: 20px; // Adiciona margem à esquerda
      cursor: default; // Define o cursor padrão
    }
`;

export const StyledTable = styled(Table)`
  margin-left: 20px;
  margin-right: 20px;
`;