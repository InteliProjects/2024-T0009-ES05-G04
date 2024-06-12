import {
  StyledPresencaPopUp,
  ConfirmButton,
  AlunoListItem,
  StyledCheckbox,
  AlunoNameContainer,
  CheckboxContainer,
} from './styles';
import { useQuery } from 'react-query';
import { useState, useEffect } from 'react';
import { fetchAlunosFromTurma } from '../../services/alunosService';
import {
  fetchPresencasByAulaId,
  registrarPresencas,
} from '../../services/presencasService';
import { message, Modal } from 'antd';
import { format } from 'date-fns';
import { useAuth } from '../../context/AuthContext';
import { marcarAulaComoConcluida } from '../../services/aulasService';

export const PresencaPopUp = ({ aula, open, onOk, onCancel }) => {
  const [presencas, setPresencas] = useState({});
  const { idCargo } = useAuth();
  const editavel = idCargo === 1;
  const dataAulaFormatada = format(new Date(aula.data), 'dd/MM/yyyy HH:mm');

  const { data: alunos, isSuccess: alunosSuccess } = useQuery(
    ['alunos', aula.id_turma],
    () => fetchAlunosFromTurma(aula.id_turma)
  );

  const { data: presencasData, isSuccess: presencasSuccess } = useQuery(
    ['presencas', aula.id],
    () => fetchPresencasByAulaId(aula.id),
    { enabled: !editavel }
  );

  const isLoading = editavel
    ? !alunosSuccess
    : !(alunosSuccess && presencasSuccess);

  useEffect(() => {
    if (!isLoading) {
      const presencasMap = alunos.reduce((acc, aluno) => {
        acc[aluno.id] =
          presencasData?.find((p) => p.id_aluno === aluno.id)?.presente ||
          false;
        return acc;
      }, {});
      setPresencas(presencasMap);
    }
  }, [alunos, presencasData, isLoading]);

  const sortedAlunos = alunos?.sort((a, b) => a.nome.localeCompare(b.nome));

  const handleCheck = (idAluno) => {
    if (editavel) {
      setPresencas((prevPresencas) => ({
        ...prevPresencas,
        [idAluno]: !prevPresencas[idAluno],
      }));
    }
  };

  const handleSubmitPresenca = async () => {
    try {
      const presencasArray = Object.entries(presencas).map(
        ([idAluno, presente]) => ({
          id_aula: aula.id,
          id_aluno: idAluno,
          presente,
        })
      );
      await registrarPresencas(presencasArray);
      await marcarAulaComoConcluida(aula.id);
      message.success('Presenças registradas com sucesso');
      onOk();
    } catch (error) {
      message.error('Erro ao registrar presenças:');
    }
  };

  const showConfirmarPresencas = () => {
    Modal.confirm({
      title: 'Você tem certeza que deseja confirmar as presenças?',
      content: 'Esta ação é definitiva e não permite cancelamento ou edição.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => {
        handleSubmitPresenca();
      },
      okButtonProps: {
        className: 'modalConfirmButton',
      },
      cancelButtonProps: {
        className: 'modalCancelButton',
      },
    });
  };

  return (
    <StyledPresencaPopUp
      title={`Lista de presença - Aula ${dataAulaFormatada}`}
      open={open}
      onOk={editavel ? handleSubmitPresenca : undefined}
      onCancel={onCancel}
      footer={
        editavel
          ? [
              <ConfirmButton
                key="submit"
                type="primary"
                onClick={showConfirmarPresencas}
              >
                Confirmar Presenças
              </ConfirmButton>,
            ]
          : null
      }
      maskClosable={false}
    >
      {sortedAlunos?.map((aluno) => (
        <AlunoListItem key={aluno.id}>
          <AlunoNameContainer>{aluno.nome}</AlunoNameContainer>
          <CheckboxContainer>
            <StyledCheckbox
              checked={!!presencas[aluno.id]}
              onChange={() => handleCheck(aluno.id)}
              disabled={!editavel}
            />
          </CheckboxContainer>
        </AlunoListItem>
      ))}
    </StyledPresencaPopUp>
  );
};
