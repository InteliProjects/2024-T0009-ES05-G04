import React, { useState } from 'react';
import { useQuery } from 'react-query';
import {
  fetchAlunosFromTurma,
  removeAlunoFromTurma,
} from '../../services/alunosService';
import {
  StyledAlunosPopUp,
  AlunoItem,
  InscreverButton,
  DeleteIconContainer,
} from './styles';
import { DeleteOutlined } from '@ant-design/icons';
import { message, Modal, Divider } from 'antd';
import { InscricaoAlunoPopUp } from '../InscricaoAlunoPopUp/InscricaoAlunoPopUp';
import { CadastroAlunoPopUp } from '../CadastroAlunoPopUp/CadastroAlunoPopUp';
import { useAuth } from '../../context/AuthContext';

export const AlunosPopUp = ({ turma, nomeOficina, open, onOk, onCancel }) => {
  const { idCargo } = useAuth();
  const podeEditar = idCargo === 1 || idCargo === 2; 

  const [isInscricaoModalVisible, setInscricaoModalVisible] = useState(false);
  const [isCadastroModalVisible, setCadastroModalVisible] = useState(false);

  const { data: alunos, refetch } = useQuery('alunos', () =>
    fetchAlunosFromTurma(turma.id)
  );

  const showDeleteConfirm = (idAluno) => {
    Modal.confirm({
      title: 'Você tem certeza que deseja remover este aluno da turma?',
      content: 'Esta ação não pode ser desfeita.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => {
        handleRemoveAlunoFromTurma(idAluno);
      },
      okButtonProps: {
        className: 'modalConfirmButton'
      },
      cancelButtonProps: {
        className: 'modalCancelButton'
      },
    });
  };

  const handleInscricaoClick = () => {
    Modal.confirm({
      title: 'O aluno já faz parte da ONG?',
      okText: 'Sim',
      cancelText: 'Não',
      onOk: () => setInscricaoModalVisible(true),
      onCancel: () => setCadastroModalVisible(true),
      okButtonProps: {
        className: 'modalConfirmButton'
      },
      cancelButtonProps: {
        className: 'modalCancelButton'
      },
    });
  };

  const handleRemoveAlunoFromTurma = async (idAluno) => {
    try {
      await removeAlunoFromTurma(idAluno, turma.id);
      message.success('Aluno removido com sucesso!');
      refetch();
    } catch (error) {
      message.error('Falha ao remover aluno.');
    }
  };

  const sortedAlunos = alunos?.sort((a, b) => a.nome.localeCompare(b.nome));

  const HeaderContent = (
    <div className="cabecalho-popup">
      <div>{`Alunos Inscritos na ${nomeOficina} - ${turma.nome}`}</div>
      {podeEditar && (
        <>
          <InscreverButton
            key="inscrever"
            type="primary"
            onClick={handleInscricaoClick}
          >
            Inscrever aluno
          </InscreverButton>
          <Divider></Divider>
        </>
      )}
    </div>
  );

  return (
    <>
      <StyledAlunosPopUp
        title={HeaderContent}
        open={open}
        onOk={onOk}
        onCancel={onCancel}
      >
        {sortedAlunos?.map((aluno) => (
          <AlunoItem key={aluno.id}>
            {aluno.nome}
            {podeEditar && (
              <DeleteIconContainer onClick={() => showDeleteConfirm(aluno.id)}>
                <DeleteOutlined />
              </DeleteIconContainer>
            )}
          </AlunoItem>
        ))}
      </StyledAlunosPopUp>
      {isInscricaoModalVisible && (
        <InscricaoAlunoPopUp
          visible={isInscricaoModalVisible}
          onClose={() => setInscricaoModalVisible(false)}
          turmaId={turma.id}
          refetchAlunosInscritos={refetch}
        />
      )}
      {isCadastroModalVisible && (
        <CadastroAlunoPopUp
          visible={isCadastroModalVisible}
          onClose={() => setCadastroModalVisible(false)}
          turma={{ id: turma.id, refetchAlunosInscritos: refetch }}
        />
      )}
    </>
  );
};
