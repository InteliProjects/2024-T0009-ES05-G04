import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { GraficoColunaContainer } from './styles';

export const GraficoColuna = ({ data }) => {
  return (
    <GraficoColunaContainer>
      <h2>Frequência média por categoria</h2>
      <BarChart width={400} height={325} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="categoria" />
        <YAxis domain={[0, 100]} />
        <Tooltip />
        <Legend />
        <Bar dataKey="frequencia" fill="#EB1D68" name="Frequência" label={{ position: 'top' }}/>
      </BarChart>
    </GraficoColunaContainer>
  );
};
