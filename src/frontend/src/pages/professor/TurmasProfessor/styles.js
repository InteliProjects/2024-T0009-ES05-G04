import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Row } from 'antd'; // Importa o componente Row da antd

// Estiliza o contêiner principal das turmas
export const TurmasProfessorContainer = styled.div`
  overflow-x: hidden; // Esconde a barra de rolagem horizontal, se necessário
`;

// Estiliza o componente Row da antd para as turmas
export const StyledRow = styled(Row)`
  padding: 20px; // Adiciona espaçamento interno
`;
