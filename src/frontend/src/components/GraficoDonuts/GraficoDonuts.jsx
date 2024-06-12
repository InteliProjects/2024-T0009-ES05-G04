import React from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend, Label } from 'recharts';
import { GraficoContainer, colors } from './styles';

export const GraficoDonuts = ({ data, totalHoras }) => {
  
  const renderTotalLabel = ({ viewBox: { cx, cy } }) => {
    return (
      <>
        <text
          x={cx}
          y={cy - 12}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {'Total:'}
        </text>
        <text
          x={cx}
          y={cy + 12}
          textAnchor="middle"
          dominantBaseline="central"
        >
          {totalHoras}h
        </text>
      </>
    );
  };

  return (
    <GraficoContainer>
      <h2>Carga horária por categoria</h2>
      <PieChart width={400} height={325}>
        <Pie
          data={data}
          dataKey="horas"
          nameKey="categoria"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={110}
          paddingAngle={0}
          label
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          <Label content={renderTotalLabel} position="center" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </GraficoContainer>
  );
};
