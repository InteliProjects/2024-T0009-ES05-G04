import styled from 'styled-components';
import { Form } from 'antd';

export const DetalhesAlunoContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  .ant-breadcrumb {
    margin-left: 20px; // Adiciona margem à esquerda
    cursor: default; // Define o cursor padrão
  }

  .editButton {
    display: block;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
  }

  .cancelButton {
    background-color: #ffffff;
    border: 1px solid #3c4043;
    margin-left: auto;
    margin-right: 20px;
    margin-top: 20px;
    display: block;
  }

  .DetalhesOficinaContainer {
    background: #fff; // um fundo branco ou uma cor clara de fundo poderia ser usada
    border-radius: 8px; // cantos arredondados para um visual moderno
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // uma sombra sutil para dar profundidade
    padding: 20px; // um espaçamento interno consistente
  }

  .ReadOnlyField .label {
    font-size: 16px; // tamanho de fonte menor para o rótulo
    color: #333; // cor mais escura para contraste
    font-weight: 600; // fonte em negrito para hierarquia
  }

  .ReadOnlyField .value {
    font-size: 14px; // tamanho de fonte regular para o conteúdo
    color: #666; // cor mais clara para conteúdo regular
    margin-top: 4px; // espaço entre o rótulo e o valor
  }
`;

export const StyledForm = styled(Form)`
  // Estiliza os itens do formulário
  .ant-form-item {
  }

  // Estiliza os inputs e date pickers dentro dos Form.Item
  .custom-form-item {
    .ant-form-item-control-input {
      input,
      .ant-picker {
      }
    }
  }
`;

export const ReadOnlyField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;

  .label {
    font-size: 20px;
  }

  .value {
    font-size: 18px;
    color: #747474;
  }
`;

export const Cabecalho = styled.div`
  display: flex; // Aplica um layout flexível
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;

  > * {
    margin: 0; // Remove as margens
    padding: 0; // Remove o espaçamento interno
  }
`;

export const StyledFormContainer = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Container = styled.div`
`;
