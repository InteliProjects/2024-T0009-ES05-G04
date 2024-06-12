import React, { useState } from 'react';
import { Form, Input, Button, Select, InputNumber } from 'antd';
import { StyledCadastroTurmaPopUp, StyledForm } from './styles';
import { message, Modal } from 'antd';
import { useQuery, useQueryClient } from 'react-query';
import { CadastroAulaPopUp } from '../CadastroAulaPopUp/CadastroAulaPopUp';
import { cadastrarTurma } from '../../services/turmasService';
import { fetchProfessoresByOng } from '../../services/usersService';
import { useAuth } from '../../context/AuthContext';

const { Option } = Select;

export const CadastroTurmaPopUp = ({ open, onClose, oficinaId }) => {
  const [form] = Form.useForm();
  const { idOng } = useAuth();
  const queryClient = useQueryClient();
  const [isCadastroAulaModalVisible, setCadastroAulaModalVisible] =
    useState(false);
  const [turmaInfo, setTurmaInfo] = useState(null);

  const { data: professores } = useQuery(['professores', idOng], () =>
    fetchProfessoresByOng(idOng)
  );

  const validateMessages = {
    required: '${label} é obrigatório',
  };

  const handleSubmit = async (values) => {
    const dadosCadastro = {
      ...values,
      id_oficina: oficinaId,
      id_ong: idOng,
    };

    try {
      const response = await cadastrarTurma(dadosCadastro);
      setTurmaInfo({ nome: response.nome, id: response.id });
      message.success('Turma cadastrada com sucesso!');
      queryClient.invalidateQueries(['turmas']);
      handleClose();
      setCadastroAulaModalVisible(true);
    } catch (error) {
      message.error('Erro ao cadastrar turma: ' + error.message);
    }
  };

  const handleCancel = () => {
    setCadastroAulaModalVisible(false);
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const showCadastroConfirm = (values) => {
    Modal.confirm({
      title: 'Você deseja confirmar o cadastro desta turma?',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => handleSubmit(values),
      okButtonProps: {
        className: 'modalConfirmButton'
      },
      cancelButtonProps: {
        className: 'modalCancelButton'
      },
    });
  };

  return (
    <div>
      <StyledCadastroTurmaPopUp
        title="Cadastro de Turma"
        open={open}
        onCancel={handleClose}
      >
        <StyledForm
          form={form}
          layout="vertical"
          onFinish={showCadastroConfirm}
          validateMessages={validateMessages}
        >
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
            <Input.TextArea placeholder="Ex: Aulas semanais, todas as terças das 14h às 16h" />
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
          <StyledForm.Item>
            <Button className="cancelButtonPopUp" key="back" onClick={onClose}>
              Cancelar
            </Button>
            <Button
              className="confirmButtonPopUp"
              key="submit"
              htmlType="submit"
            >
              Cadastrar
            </Button>
          </StyledForm.Item>
        </StyledForm>
      </StyledCadastroTurmaPopUp>
      <CadastroAulaPopUp
        open={isCadastroAulaModalVisible}
        onClose={handleCancel}
        turma={{ nome: turmaInfo?.nome, id: turmaInfo?.id }}
      />
    </div>
  );
};
