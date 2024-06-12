import React from 'react';
import { Space, Button } from 'antd';
import { fetchAlunosFromOng } from '../../services/alunosService';
import { PlusCircleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { StyledTable } from './styles';

export const TabelaCadastradosAlunos = () => {

  const customLocale = {
    triggerDesc: 'Clique para ordenar os nomes em ordem decrescente',
    triggerAsc: 'Clique para ordenar os nomes em ordem crescente',
    cancelSort: 'Clique para remover a ordenação dos nomes',
  };

  const navigate = useNavigate();

  const { idOng } = useAuth();

  const { data: alunos } = useQuery(['alunos', idOng], () => fetchAlunosFromOng(idOng));

  alunos?.sort((a, b) => a.nome.localeCompare(b.nome));

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
      render: (_, aluno) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={() => goToDetalhes(aluno.id)}
          />
        </Space>
      ),
    },
  ];
  const goToDetalhes = (idAluno) => {
    navigate(`/cadastrados/alunos/${idAluno}`, {state: {idAluno}});
  };

  return <StyledTable columns={columns} dataSource={alunos} locale={customLocale}/>;
};
