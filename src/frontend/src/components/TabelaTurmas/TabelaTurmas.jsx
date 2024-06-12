import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button, Space } from 'antd';
import { PlusCircleOutlined, TeamOutlined } from '@ant-design/icons';
import { AlunosPopUp } from '../AlunosPopUp/AlunosPopUp.jsx';
import { fetchTurmasByOficina } from '../../services/turmasService';
import { TabelaTurmasContainer, StyledTable } from './styles';
import { useAuth } from '../../context/AuthContext.js';

export const TabelaTurmas = ({ idOng, idOficina, nomeOficina }) => {
  const [isAlunosModalVisible, setIsAlunosModalVisible] = useState(false);
  const [turmaSelected, setTurmaSelected] = useState(null);

  const navigate = useNavigate();

  const { idCargo } = useAuth();

  const { data: turmas } = useQuery(['turmas', idOficina], () =>
    fetchTurmasByOficina(idOficina)
  );

  turmas?.sort((a, b) => a.nome.localeCompare(b.nome));

  const columns = [
    {
      title: 'Nome da turma',
      dataIndex: 'nome',
      key: 'nome',
    },
    {
      title: 'Descrição',
      dataIndex: 'descricao_recorrencia',
      key: 'descricao_recorrencia',
    },
    {
      title: 'Alunos',
      key: 'alunos',
      render: (_, turma) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<TeamOutlined />}
            onClick={() => showAlunosModal(turma)}
          />
        </Space>
      ),
    },
    {
      title: 'Detalhes',
      key: 'detalhes',
      render: (_, turma) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<PlusCircleOutlined />}
            onClick={() => goToDetalhes(turma.id_oficina, turma.id, turma.nome)}
          />
        </Space>
      ),
    },
  ];

  const showAlunosModal = (turma) => {
    setTurmaSelected(turma);
    setIsAlunosModalVisible(true);
  };

  const goToDetalhes = (idOficina, idTurma, nomeTurma) => {
    const detalhesPath =
      idCargo === 2
        ? `/oficinas/${idOficina}/turmas/${idTurma}`
        : `/ongs/${idOng}/oficinas/${idOficina}/turmas/${idTurma}`;
    navigate(`${detalhesPath}`, {
      state: { nomeOficina, idOng, idTurma, nomeTurma },
    });
  };

  return (
    <TabelaTurmasContainer>
      <StyledTable columns={columns} dataSource={turmas} />
      {turmaSelected && (
        <AlunosPopUp
          turma={turmaSelected}
          nomeOficina={nomeOficina}
          open={isAlunosModalVisible}
          onOk={() => setIsAlunosModalVisible(false)}
          onCancel={() => setIsAlunosModalVisible(false)}
        />
      )}
    </TabelaTurmasContainer>
  );
};
