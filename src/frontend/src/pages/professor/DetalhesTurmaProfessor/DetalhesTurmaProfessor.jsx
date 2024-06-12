import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Header } from '../../../components/layout/Header/Header.jsx';
import { useLocation } from 'react-router-dom';
import { Button, Col } from 'antd';
import { fetchAulasPorTurma } from '../../../services/aulasService.js';
import { CardAula } from '../../../components/CardAula/CardAula.jsx';
import { StyledRowDetalhes, DetalhesTurmaProfessorContainer } from './styles.js';
import { AlunosPopUp } from '../../../components/AlunosPopUp/AlunosPopUp.jsx';

export const DetalhesTurmaProfessor = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { state } = useLocation();
  const { turma } = state;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const { data: aulas, refetch } = useQuery(['aulas', turma.id], () =>
    fetchAulasPorTurma(turma.id, false)
  );

  return (
    <DetalhesTurmaProfessorContainer>
      <Header/>
      <div style={{padding: '20px',}}>
        <div className='cabecalho-turma'>
          <h1>
            {turma.nome_oficina} - {turma.nome}
          </h1>
          <Button type="primary" onClick={showModal}>Alunos Inscritos</Button>
        </div>
        <p>Quantidade de vagas: {turma.vagas}</p>
      </div>

      <AlunosPopUp
        turma={turma}
        nomeOficina={turma.nome_oficina}
        open={isModalVisible}
        onOk={() => setIsModalVisible(false)}
        onCancel={() => setIsModalVisible(false)}
      />
      <StyledRowDetalhes gutter={[16, 16]}>
        {aulas &&
          aulas.map((aula, index) => (
            <Col key={aula.id} span={8}>
              <CardAula aula={aula} index={index} refetchAulas={refetch}/>
            </Col>
          ))}
      </StyledRowDetalhes>
    </DetalhesTurmaProfessorContainer>
  );
};
