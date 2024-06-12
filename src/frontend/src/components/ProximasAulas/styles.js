import styled from "styled-components";
import { Table } from "antd";

export const ProximasAulasContainer = styled.div`

    .cabecalho-aulas-futuro {
        display: flex; // Aplica um layout flexível
        padding: 20px;
        .ant-btn {
        margin-left: auto; // Alinha o botão à direita
        }
    }

    .cabecalho-aulas-futuro> * {
        margin: 0; // Remove as margens
        padding: 0; // Remove o espaçamento interno
    }
`

export const StyledTable = styled(Table)`
    margin-left: 20px;
    margin-right: 20px;

`