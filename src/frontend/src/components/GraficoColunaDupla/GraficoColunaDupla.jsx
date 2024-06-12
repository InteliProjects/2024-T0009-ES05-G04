import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { GraficoContainer } from './styles';

export const GraficoColunaDupla = ({ dadosVagas, dadosMatriculados }) => {
  const graficoData = dadosVagas.map((vaga) => {
    const matriculado = dadosMatriculados.find(
      (mat) => mat.categoria === vaga.categoria
    );
    return {
      categoria: vaga.categoria,
      Vagas: parseInt(vaga.sum, 10),
      Matriculados: matriculado ? parseInt(matriculado.count, 10) : 0,
    };
  });

  return (
    <GraficoContainer>
      <h2>Matrículas X Vagas oferecidas</h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={graficoData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="categoria" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px', top: 0 }} />
          <Bar dataKey="Matriculados" fill="#F5821F" name="Matriculados" label={{ position: 'top' }}/>
          <Bar dataKey="Vagas" fill="#F5C630" name="Vagas" label={{ position: 'top' }}/>
        </BarChart>
      </ResponsiveContainer>
    </GraficoContainer>
  );
};
