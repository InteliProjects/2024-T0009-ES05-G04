import React from 'react';
import { Modal, Button, Space, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useQuery } from 'react-query';
import { fetchAulasPorTurma, excluirAula } from '../../services/aulasService';
import { ProximasAulasContainer, StyledTable } from './styles';
import { format } from 'date-fns';
import { useAuth } from '../../context/AuthContext.js';

export const ProximasAulas = ({ idTurma, nomeTurma }) => {
  const { idCargo } = useAuth();
  const podeEditar = idCargo === 2;

  const { data: proximasAulas, refetch } = useQuery(
    ['proximasAulas', idTurma],
    () => fetchAulasPorTurma(idTurma, false)
  );

  if (proximasAulas) {
    console.log(proximasAulas[0]);
  }

  const confirmCancel = (aulaId) => {
    Modal.confirm({
      title: 'Tem certeza que deseja cancelar esta aula?',
      content: 'Esta ação não pode ser desfeita.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => handleCancelAula(aulaId),
      okButtonProps: {
        style: {
          backgroundColor: '#00B094',
          borderRadius: '100px',
          width: '150px',
        },
      },
      cancelButtonProps: {
        style: {
          backgroundColor: '#EB1D68',
          borderRadius: '100px',
          width: '150px',
          color: '#FFF',
          marginRight: '60px',
        },
      },
    });
  };

  const handleCancelAula = async (idAula) => {
    try {
      await excluirAula(idAula);
      message.success('Aula excluída com sucesso.');
      refetch();
    } catch (error) {
      message.error(
        `Erro ao excluir aula: ${
          error.response ? error.response.data.message : error.message
        }`
      );
    }
  };

  const columns = [
    {
      title: 'Data/Hora',
      dataIndex: 'data',
      key: 'data',
      render: (data) => format(new Date(data), 'dd/MM/yyyy HH:mm'),
    },
  ];

  if (podeEditar) {
    columns.push({
      title: 'Cancelar aula',
      key: 'cancelar',
      render: (_, aula) => (
        <Space size="middle">
          <Button
            icon={<DeleteOutlined />}
            onClick={() => confirmCancel(aula.id)}
          />
        </Space>
      ),
    });
  }

  return (
    <ProximasAulasContainer>
      <div className="cabecalho-aulas-futuro">
        <h1>{`Próximas aulas - ${nomeTurma}`}</h1>
      </div>
      <StyledTable dataSource={proximasAulas} columns={columns} rowKey="id" />
    </ProximasAulasContainer>
  );
};
