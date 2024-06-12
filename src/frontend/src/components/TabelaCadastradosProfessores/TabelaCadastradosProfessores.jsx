import React from 'react';
import { Space, Button } from 'antd';
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { fetchProfessoresByOng } from '../../services/usersService';
import { PlusCircleOutlined } from '@ant-design/icons';
import { StyledTable } from './styles';

export const TabelaCadastradosProfessores = () => {
  const customLocale = {
    triggerDesc: 'Clique para ordenar os nomes em ordem decrescente',
    triggerAsc: 'Clique para ordenar os nomes em ordem crescente',
    cancelSort: 'Clique para remover a ordenação dos nomes',
  };

  const { idOng } = useAuth();

  const { data: professores } = useQuery(['professores', idOng], () =>
    fetchProfessoresByOng(idOng)
  );

  professores?.sort((a, b) => a.nome.localeCompare(b.nome));
  
  const navigate = useNavigate();

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'nome',
      key: 'nome',
      sorter: (a, b) => a.nome.localeCompare(b.nome),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Detalhes',
      key: 'detalhes',
      render: (_, professor) => (
        <Space size="middle">
            <Button
              type="danger"
              shape="circle"
              icon={<PlusCircleOutlined />}
              onClick={() => goToDetalhes(professor.id)}
            />
        </Space>
      ),
    },
  ];
  const goToDetalhes = (idProfessor) => {
    navigate(`/cadastrados/professores/${idProfessor}`, {state: {idProfessor}});
  };

  return (
    <StyledTable
      columns={columns}
      dataSource={professores}
      locale={customLocale}
    />
  );

};
