import styled from 'styled-components'; // Importa a biblioteca styled-components
import { Card } from 'antd'; // Importa o componente Card da antd

const cores = [
  '#00AEEF',
  '#2E3192',
  '#63236F',
  '#EB1D68',
  '#F5821F',
  '#F5C630',
  '#00B094',
];

export const StyledCard = styled(Card)`
  background-color: ${(props) => cores[props.turma.id % cores.length]};
  border-radius: 8px;
  height: 40vh;
  display: flex;
  align-items: flex-end;
  color: #000;
  margin: 20px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.3);
  }

  .ant-card-body {
    padding: 16px;
    position: relative;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 40%;
    background-color: #f8f8f8;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 0;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0;
  }
`;
