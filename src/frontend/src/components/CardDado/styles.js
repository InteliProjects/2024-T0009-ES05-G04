import styled from "styled-components";
import { Card } from "antd";

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
  background-color: #fff;
  border-radius: 8px;
  padding: 10px;
  width: 280px;
  height: 200px;
  position: relative;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-left: 20px solid ${(props) => cores[props.index % cores.length]};

  h2 {
    margin: 0;
    color: ${(props) => cores[props.index % cores.length]};
    font-weight: 600;
    font-size: 1.3rem;
    text-align: center;
  }

  p {
    margin: 0;
    color: #333;
    font-weight: 600;
    font-size: 2.5rem;
    text-align: center;
  }

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
`;