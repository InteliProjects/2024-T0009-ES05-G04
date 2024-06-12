import React from 'react';
import { Button, Space } from 'antd';
import { BookOutlined, DatabaseOutlined, LineChartOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchOngs } from '../../services/ongsService';
import { TabelaOngsContainer, StyledTable } from './styles';

export const TabelaOngs = () => {

  const navigate = useNavigate();

  const { data: ongs } = useQuery(['ongs'], () => fetchOngs());

  ongs?.sort((a, b) => a.nome.localeCompare(b.nome));

  const dadosOngs = ongs?.map((ong) => ({
    key: ong.id.toString(),
    ...ong,
  }));

  const colunas = [
    {
      title: 'Nome da ong',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
        title: 'Oficinas',
        key: 'oficinas',
        render: (_, ong) => (
          <Space size="middle">
            <Button
              shape="circle"
              icon={<BookOutlined />}
              onClick={() => goToOficinas(ong.id, ong.nome)}
            />
          </Space>
        ),
      },
      {
        title: 'Dados',
        key: 'dados',
        render: (_, ong) => (
          <Space size="middle">
            <Button
              shape="circle"
              icon={<LineChartOutlined />}
              onClick={() => goToDados(ong.id)}
            />
          </Space>
        ),
      },
    {
      title: 'Detalhes',
      key: 'detalhes',
      render: (_, ong) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={() => goToDetalhes(ong.id)}
          />
        </Space>
      ),
    },
  ];

  const goToOficinas = (idOng, nomeOng) => {
    navigate(`/ongs/${idOng}/oficinas`, {state: {idOng, nomeOng }});
  };

  const goToDetalhes = (idOng) => {
    navigate(`/ongs/${idOng}`, {state: {idOng }});
  };

  const goToDados = (idOng) => {
    navigate(`/ongs/${idOng}/dados`, {state: {idOng }});
  };

  return (
    <TabelaOngsContainer>
      <StyledTable columns={colunas} dataSource={dadosOngs}/>
    </TabelaOngsContainer>
  );
};
