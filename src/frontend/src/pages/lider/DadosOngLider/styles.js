import styled from "styled-components";

export const DadosLiderContainer = styled.div`
  max-width: 1400px;
  margin: 20px auto;
`;

const Secao = styled.section`
  gap: 10px;
  margin-bottom: 50px;
`;

export const SecaoGeral = styled(Secao)`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const SecaoMensal = styled(Secao)`
  display: grid;
  grid-template-columns: 2fr 5fr;
`;

const Container = styled.div`
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  font-size: 1em;
  font-weight: 600;
  color: #333;
`;

export const CardsGeralContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
`;

export const CardsMensaisContainer = styled(Container)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  justify-content: center;
`;

export const GraficoGeralContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GraficosMensaisContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const SecaoTitulo = styled.h2`
  grid-column: 1 / -1;
  font-size: 1.8em;
  margin-top: 35px;
`;
