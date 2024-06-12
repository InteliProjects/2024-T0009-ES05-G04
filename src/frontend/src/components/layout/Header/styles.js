import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Layout, Menu, Avatar } from 'antd'; // Importa os componentes Layout, Menu e Avatar da antd

const { Header } = Layout; // Extrai o componente Header do Layout da antd

// Estiliza o componente Header da antd
export const StyledHeader = styled(Header)`
  display: flex; // Aplica um layout flexível
  align-items: center; // Alinha os itens verticalmente
  padding: 0 20px; // Adiciona espaçamento interno
  background: #fff; // Cor de fundo
`;

// Estiliza o componente Menu da antd
export const StyledMenu = styled(Menu)`
  display: flex; // Aplica um layout flexível
  justify-content: center; // Centraliza o conteúdo horizontalmente
  flex-grow: 1; // Permite que o menu cresça para preencher o espaço disponível

  // Estiliza os itens do menu
  .ant-menu-item {
    display: flex; // Aplica um layout flexível
    align-items: center; // Alinha os itens verticalmente
    justify-content: center; // Centraliza o conteúdo horizontalmente
    color: #3C4043; // Cor do texto
    font-size: 15px; // Tamanho da fonte
  }
`;

// Estiliza o componente Avatar da antd
export const StyledAvatar = styled(Avatar)`
  margin-left: auto; // Alinha o avatar à direita
`;

// Estiliza uma imagem
export const StyledImage = styled.img`
  width: 100px; // Largura da imagem
`;
