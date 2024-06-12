import React from 'react';
import { Button, Space } from 'antd';
import { PlusCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchOficinas } from '../../services/oficinasService';
import { TabelaOficinasContainer, StyledTable } from './styles';
import { useAuth } from '../../context/AuthContext';

export const TabelaOficinas = ({idOng}) => {
  const navigate = useNavigate();

  const { idCargo } = useAuth();

  const customLocale = {
    filterReset: 'Limpar',
    filterConfirm: 'Aplicar',
  };

  const { data: oficinas } = useQuery(['oficinas', idOng], () => fetchOficinas(idOng));

  oficinas?.sort((a, b) => a.nome.localeCompare(b.nome));

  const dadosOficinas = oficinas?.map((oficina) => ({
    key: oficina.id.toString(),
    ...oficina,
  }));

  const colunas = [
    {
      title: 'Nome da oficina',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Categoria',
      dataIndex: 'categoria',
      key: 'categoria',
      filters: [
        { text: 'Esporte', value: 'Esporte' },
        { text: 'Arte e Cultura', value: 'Arte e Cultura' },
        { text: 'Educação', value: 'Educação' },
      ],
      onFilter: (value, record) => record.categoria === value,
    },
    {
      title: 'Turmas',
      key: 'turmas',
      render: (_, oficina) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<TeamOutlined />}
            onClick={() => goToTurmas(oficina.id, oficina.nome)}
          />
        </Space>
      ),
    },
    {
      title: 'Detalhes',
      key: 'detalhes',
      render: (_, oficina) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={() => goToDetalhes(oficina.id)}
          />
        </Space>
      ),
    },
  ];

  const goToDetalhes = (idOficina) => {
    const detalhesPath = idCargo === 2 ? `/oficinas/${idOficina}` : `/ongs/${idOng}/oficinas/${idOficina}`;
    navigate(`${detalhesPath}`, {state: {idOficina }});
  };

  const goToTurmas = (idOficina, nomeOficina) => {
    const turmasPath = idCargo === 2 ? `/oficinas/${idOficina}/turmas` : `/ongs/${idOng}/oficinas/${idOficina}/turmas`;
    navigate(`${turmasPath}`, { state: { idOng, idOficina, nomeOficina } });
  };

  return (
    <TabelaOficinasContainer>
      <StyledTable columns={colunas} dataSource={dadosOficinas} locale={customLocale}/>
    </TabelaOficinasContainer>
  );
};
