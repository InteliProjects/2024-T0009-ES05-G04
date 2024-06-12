import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Button, Space } from 'antd';
import { format } from 'date-fns';
import { EyeOutlined } from '@ant-design/icons';
import { PresencaPopUp } from '../../components/PresencaPopUp/PresencaPopUp';
import { fetchAulasPorTurma } from '../../services/aulasService';
import { fetchFrequenciasByAulasIds } from '../../services/presencasService';
import { StyledTable, HistoricoAulasContainer } from './styles';

export const HistoricoAulas = ({idTurma, nomeTurma}) => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [aulaSelecionada, setAulaSelecionada] = useState(null);

  const { data: historicoAulas } = useQuery(['historicoAulas', idTurma], () =>
    fetchAulasPorTurma(idTurma, true)
  );

  const aulasIds = historicoAulas?.map((aula) => aula.id);

  const { data: frequencias } = useQuery(
    ['frequenciasAulas', aulasIds],
    () => fetchFrequenciasByAulasIds(aulasIds),
    {
      enabled: aulasIds?.length > 0,
    }
  );

  const aulasComPresencas = historicoAulas?.map(aula => {
    const aulaFrequencia = frequencias?.find(f => f.id_aula === aula.id);
    
    return {
      ...aula,
      frequencia: aulaFrequencia ? parseFloat(aulaFrequencia.frequencia).toFixed(2) + '%' : 'Carregando...'
    };
  }) || [];
  

  const columns = [
    {
      title: 'Data/Hora',
      dataIndex: 'data',
      key: 'data',
      render: (data) => format(new Date(data), 'dd/MM/yyyy HH:mm'),
    },
    {
      title: 'Frequência',
      dataIndex: 'frequencia',
      key: 'frequencia',
    },
    {
      title: 'Presenças',
      key: 'presencas',
      render: (_, aula) => (
        <Space size="middle">
          <Button icon={<EyeOutlined />} onClick={() => showModal(aula)} />
        </Space>
      ),
    },
  ];

  const showModal = (aula) => {
    setAulaSelecionada(aula);
    setIsModalVisible(true);
  };

  return (
    <HistoricoAulasContainer>
      <div className="cabecalho-aula-historico">
        <h1>{`Histórico de aulas - ${nomeTurma}`}</h1>
      </div>
      <StyledTable dataSource={aulasComPresencas} columns={columns} />
      {isModalVisible && aulaSelecionada && (
        <PresencaPopUp
          title={`Presença - Aula ${aulaSelecionada.data}`}
          open={isModalVisible}
          onOk={() => setIsModalVisible(false)}
          onCancel={() => {
            setIsModalVisible(false);
            setAulaSelecionada(null);
          }}
          aula={aulaSelecionada}
        />
      )}
    </HistoricoAulasContainer>
  );
};
