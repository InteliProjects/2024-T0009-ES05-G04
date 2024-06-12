import styled from "styled-components";
import { Table } from "antd";

export const HistoricoAulasLiderContainer = styled.div`
    .cabecalho-aula-historico {
        display: flex; // Aplica um layout flexível
        padding: 20px;
        .ant-btn {
        margin-left: auto; // Alinha o botão à direita
        }
    }

    .cabecalho-aula-historico> * {
        margin: 0; // Remove as margens
        padding: 0; // Remove o espaçamento interno
    }
`

