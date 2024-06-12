import {
  StyledInscricaoAlunoPopUp,
  AlunoListItem,
  AlunoNameContainer,
  CheckboxContainer,
} from './styles';
import { Button, Checkbox, message, Empty } from 'antd';
import {
  fetchAlunosNaoInscritos,
  addAlunoToTurma,
} from '../../services/alunosService';
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { useState } from 'react';

export const InscricaoAlunoPopUp = ({
  visible,
  onClose,
  turmaId,
  refetchAlunosInscritos,
}) => {
  const [alunosSelecionados, setAlunosSelecionados] = useState({});

  const { idOng } = useAuth();

  const { data: alunos } = useQuery(
    ['alunosNaoInscritos', idOng, turmaId],
    () => fetchAlunosNaoInscritos(idOng, turmaId),
    {
      onSuccess: (alunos) => {
        const selecoesIniciais = alunos.reduce(
          (acc, aluno) => ({ ...acc, [aluno.id]: false }),
          {}
        );
        setAlunosSelecionados(selecoesIniciais);
      },
    }
  );

  alunos?.sort((a, b) => a.nome.localeCompare(b.nome));

  const alternarSelecao = (idAluno) => {
    setAlunosSelecionados((prev) => ({ ...prev, [idAluno]: !prev[idAluno] }));
  };

  const handleSubmit = async () => {
    const idsSelecionados = Object.entries(alunosSelecionados)
      .filter(([_, isSelected]) => isSelected)
      .map(([id]) => id);

    try {
      await Promise.all(
        idsSelecionados.map((idAluno) => addAlunoToTurma(idAluno, turmaId))
      );
      message.success('Aluno(s) inscrito(s) com sucesso!');
      refetchAlunosInscritos();
      onClose();
    } catch (error) {
      const errorMsg =
        error.response && error.response.data && error.response.data.message
          ? error.response.data.message
          : 'Falha ao inscrever aluno(s).';
      message.error(errorMsg);
    }
  };

  return (
    <StyledInscricaoAlunoPopUp
      title="Inscrição de Aluno"
      open={visible}
      onCancel={onClose}
      footer={
        alunos && alunos.length > 0
          ? [
              <Button
                className="cancelButtonPopUp"
                key="back"
                onClick={onClose}
              >
                Cancelar
              </Button>,
              <Button
                className="confirmButtonPopUp"
                key="submit"
                onClick={handleSubmit}
              >
                Adicionar
              </Button>,
            ]
          : null
      }
    >
      {alunos && alunos.length > 0 ? (
        alunos.map((aluno) => (
          <AlunoListItem key={aluno.id}>
            <AlunoNameContainer>{aluno.nome}</AlunoNameContainer>
            <CheckboxContainer>
              <Checkbox
                checked={!!alunosSelecionados[aluno.id]}
                onChange={() => alternarSelecao(aluno.id)}
              />
            </CheckboxContainer>
          </AlunoListItem>
        ))
      ) : (
        <Empty description="Todos os alunos da ONG já estão inscritos nesta turma." />
      )}
    </StyledInscricaoAlunoPopUp>
  );
};
