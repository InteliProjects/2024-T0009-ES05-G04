import styled from "styled-components";
import { Table } from "antd";

export const HistoricoAulasContainer = styled.div`
  .cabecalho-aula-historico {
    display: flex;
    padding: 20px;
    .ant-btn {
      margin-left: auto;
    }
  }
`;

export const StyledTable = styled(Table)`
  margin-left: 20px;
  margin-right: 20px;
`;
