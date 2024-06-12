import { Select } from 'antd';
import styled from 'styled-components'; // Importa a biblioteca styled-components

export const CadastradosContainer = styled.div`

    .cabecalho-cadastrados{
        display: flex; // Aplica um layout flexível
        padding: 20px;
        .ant-btn {
          margin-left: auto; // Alinha o botão à direita
          margin-right: 5px;
        }
    }
    .cabecalho-cadastrados> * {
        margin: 0; // Remove as margens
        padding: 0; // Remove o espaçamento interno
    }
`;

export const StyledSelect = styled(Select)`
    width: 200px;
`