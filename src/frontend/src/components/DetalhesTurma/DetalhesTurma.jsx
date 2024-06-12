import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, InputNumber, message, Button, Select, Modal } from 'antd';
import {
  StyledForm,
  ReadOnlyField,
  DetalhesTurmaContainer,
  Cabecalho,
  StyledFormContainer,
  ButtonContainer,
  RightButtons,
  LeftButtons,
} from './styles.js';
import { useQuery } from 'react-query';
import {
  fetchDetalhesTurma,
  editarTurma,
} from '../../services/turmasService.js';
import { fetchProfessoresByOng } from '../../services/usersService.js';
import { CadastroAulaPopUp } from '../../components/CadastroAulaPopUp/CadastroAulaPopUp.jsx';
import { useAuth } from '../../context/AuthContext.js';

const { Option } = Select;

export const DetalhesTurma = ({ idOng, idTurma, nomeOficina }) => {
  const navigate = useNavigate();

  const { idCargo } = useAuth();
  const podeEditar = idCargo === 2;

  const [editMode, setEditMode] = useState(false);
  const [isCadastroModalVisible, setCadastroModalVisible] = useState(false);

  const [form] = StyledForm.useForm();

  const { data: turma, refetch: refetchTurma } = useQuery(
    ['detalhesTurma', idTurma],
    () => fetchDetalhesTurma(idTurma)
  );

  const { data: professores } = useQuery('professores', () =>
    fetchProfessoresByOng(idOng)
  );

  useEffect(() => {
    if (turma) {
      form.setFieldsValue(turma);
    }
  }, [turma, form]);

  const showCadastroModal = () => {
    setCadastroModalVisible(true);
  };

  const handleCancelModal = () => {
    setCadastroModalVisible(false);
  };

  const goToHistoricoAulas = (idOficina, idTurma, nomeTurma) => {
    const historicoPath = podeEditar ? `/oficinas/${idOficina}/turmas/${idTurma}/aulas/historico` : `/ongs/${idOng}/oficinas/${idOficina}/turmas/${idTurma}/aulas/historico`;
    navigate(`${historicoPath}`, {
      state: { idTurma, nomeTurma },
    });
  };

  const goToProximasAulas = (idOficina, idTurma, nomeTurma) => {
    const proximasAulasPath = podeEditar ? `/oficinas/${idOficina}/turmas/${idTurma}/aulas/proximas` : `/ongs/${idOng}/oficinas/${idOficina}/turmas/${idTurma}/aulas/proximas`;
    navigate(`${proximasAulasPath}`, {
      state: { idTurma, nomeTurma },
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    form.resetFields();
  };

  const handleSave = async () => {
    try {
      const formValues = await form.validateFields();
      await editarTurma({ ...turma, ...formValues });
      message.success('Turma editada com sucesso');
      refetchTurma();
      setEditMode(false);
    } catch (error) {
      message.error('Erro ao editar turma');
    }
  };

  const showEditConfirm = () => {
    Modal.confirm({
      title: 'Você tem certeza que deseja salvar as alterações?',
      content: 'Esta ação irá atualizar os dados da turma.',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => {
        handleSave();
      },
      okButtonProps: {
        className: 'modalConfirmButton',
      },
      cancelButtonProps: {
        className: 'modalCancelButton',
      },
    });
  };

  const renderFormItems = () =>
    editMode ? (
      <>
        <StyledFormContainer>
          <StyledForm.Item
            name="nome"
            label="Nome da Turma"
            rules={[{ required: true }]}
          >
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            name="vagas"
            label="Vagas"
            rules={[{ required: true }]}
          >
            <InputNumber min={1} />
          </StyledForm.Item>
          <StyledForm.Item
            name="descricao_recorrencia"
            label="Descrição da Recorrência"
          >
            <Input.TextArea />
          </StyledForm.Item>
          <StyledForm.Item
            name="id_professor"
            label="Professor"
            rules={[{ required: true }]}
          >
            <Select placeholder="Selecione o professor responsável">
              {professores?.map((professor) => (
                <Option key={professor.id} value={professor.id}>
                  {professor.nome}
                </Option>
              ))}
            </Select>
          </StyledForm.Item>
        </StyledFormContainer>
      </>
    ) : (
      <>
        <ReadOnlyField>
          <span className="label">Vagas</span>
          <div className="value">{turma?.vagas}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Descrição da Recorrência</span>
          <div className="value">{turma?.descricao_recorrencia}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Professor</span>
          <div className="value">
            {professores?.find((p) => p.id === turma?.id_professor)?.nome}
          </div>
        </ReadOnlyField>
      </>
    );

  return (
    <DetalhesTurmaContainer>
      {editMode ? (
        <div>
          <h1 className="value">
            {nomeOficina} - {turma?.nome}
          </h1>
          <Button onClick={handleCancelEdit} className="cancelButton">
            Cancelar
          </Button>
        </div>
      ) : (
        <Cabecalho>
          <h1 className="value">
            {nomeOficina} - {turma?.nome}
          </h1>
          <ButtonContainer>
            <LeftButtons>
              <Button
                className="defaultButton"
                onClick={() =>
                  goToHistoricoAulas(turma.id_oficina, turma.id, turma.nome)
                }
              >
                Histórico de aulas
              </Button>
              <Button
                className="defaultButton"
                onClick={() =>
                  goToProximasAulas(turma.id_oficina, turma.id, turma.nome)
                }
              >
                Próximas Aulas
              </Button>
            </LeftButtons>
            {podeEditar && (
              <RightButtons>
                <Button className="defaultButton" onClick={showCadastroModal}>
                  Cadastrar Aula(s)
                </Button>
                <Button className="defaultButton" onClick={handleEdit}>
                  Editar
                </Button>
              </RightButtons>
            )}
          </ButtonContainer>
        </Cabecalho>
      )}
      <StyledForm form={form} layout="vertical" initialValues={turma}>
        {renderFormItems()}
        {editMode && (
          <Button
            className="saveButton"
            htmlType="submit"
            onClick={showEditConfirm}
            style={{ marginLeft: '20px' }}
          >
            Salvar
          </Button>
        )}
      </StyledForm>
      {turma && (
        <CadastroAulaPopUp
          open={isCadastroModalVisible}
          onClose={handleCancelModal}
          turma={{ nome: turma.nome, id: turma.id }}
        />
      )}
    </DetalhesTurmaContainer>
  );
};
