import { StyledCadastroAlunoPopUp, StyledForm } from './styles';
import { Form, Input, DatePicker, message, Select, Button, Modal } from 'antd';
import React from 'react';
import { format } from 'date-fns';
import {
  createAluno,
  addAlunoToTurma,
  addAlunoToOng,
} from '../../services/alunosService';
import { useAuth } from '../../context/AuthContext';

const { Option } = Select;

export const CadastroAlunoPopUp = ({ visible, onClose, turma }) => {
  const [form] = Form.useForm();
  const { idOng } = useAuth();

  const validateMessages = {
    required: '${label} é obrigatório',
    types: {
      email: '${label} não é um email válido',
    },
  };

  const handleSubmit = async (values) => {
    const cpfFormatado = values.cpf ? values.cpf.replace(/\D/g, '') : '';
    const formattedValues = {
      ...values,
      cpf: cpfFormatado,
      data_nasc: format(values.data_nasc.toDate(), 'yyyy-MM-dd'),
    };

    try {
      const response = await createAluno(formattedValues);
      const idAluno = response.id;

      if (idAluno) {
        await addAlunoToOng(idAluno, idOng);

        if (turma) {
          try {
            await addAlunoToTurma(idAluno, turma.id);
            turma.refetchAlunosInscritos();
            message.success(
              'Aluno cadastrado e inscrito na turma com sucesso!'
            );
            handleClose();
          } catch (turmaError) {
            console.error('Erro ao inscrever aluno na turma:', turmaError);
            message.success('Aluno cadastrado com sucesso na ONG!');
            const errorMessage =
              turmaError.response?.data?.message ||
              'Erro ao inscrever aluno na turma.';
            message.error(errorMessage);
          }
        } else {
          message.success('Aluno cadastrado com sucesso na ONG!');
          handleClose();
        }
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'Erro ao cadastrar aluno. Por favor, tente novamente.';
      message.error(errorMessage);
    }
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const showCadastroConfirm = (values) => {
  Modal.confirm({
    title: 'Você deseja confirmar o cadastro deste aluno?',
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
    <StyledCadastroAlunoPopUp
      title="Cadastro de Aluno"
      open={visible}
      onCancel={handleClose}
    >
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={showCadastroConfirm}
        validateMessages={validateMessages}
      >
        <StyledForm.Item name="nome" label="Nome" rules={[{ required: true }]}>
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="cpf"
          label="CPF"
          rules={[{ required: true }]}
          getValueFromEvent={(event) => {
            const { value } = event.target;
            return value
              .replace(/\D/g, '')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
              .replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4')
              .substring(0, 14);
          }}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="rg" label="RG">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="data_nasc"
          label="Data de Nascimento"
          rules={[{ required: true }]}
        >
          <DatePicker format="DD/MM/YYYY" />
        </StyledForm.Item>
        <StyledForm.Item name="raca" label="Raça" rules={[{ required: true }]}>
          <Select>
            <Option value="branca">Branca</Option>
            <Option value="preta">Preta</Option>
            <Option value="parda">Parda</Option>
            <Option value="amarela">Amarela</Option>
            <Option value="indigena">Indígena</Option>
            <Option value="naoInformado">Prefiro não informar</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item
          name="genero"
          label="Gênero"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="masculino">Masculino</Option>
            <Option value="feminino">Feminino</Option>
            <Option value="outro">Outro</Option>
            <Option value="naoInformado">Prefiro não informar</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item
          name="estado_civil"
          label="Estado Civil"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="solteiro">Solteiro(a)</Option>
            <Option value="casado">Casado(a)</Option>
            <Option value="divorciado">Divorciado(a)</Option>
            <Option value="viuvo">Viúvo(a)</Option>
            <Option value="separado">Separado(a)</Option>
            <Option value="naoInformado">Prefiro não informar</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item
          name="endereco"
          label="Endereço"
          rules={[{ required: true }]}
        >
          <Input placeholder="Rua, Avenida, etc." />
        </StyledForm.Item>

        <StyledForm.Item
          name="bairro"
          label="Bairro"
          rules={[{ required: true }]}
        >
          <Input placeholder="Bairro" />
        </StyledForm.Item>

        <StyledForm.Item
          name="numero"
          label="Número"
          rules={[
            { required: true },
            { type: 'string', message: 'Número inválido!' },
          ]}
        >
          <Input placeholder="Número" />
        </StyledForm.Item>

        <StyledForm.Item
          name="cidade"
          label="Cidade"
          rules={[{ required: true }]}
        >
          <Input placeholder="Cidade" />
        </StyledForm.Item>

        <StyledForm.Item
          name="estado"
          label="Estado"
          rules={[{ required: true, message: 'Por favor, insira o estado!' }]}
        >
          <Input placeholder="Estado" />
        </StyledForm.Item>
        <StyledForm.Item name="telefone" label="Telefone">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="celular" label="Celular">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item name="responsavel" label="Responsável">
          <Input />
        </StyledForm.Item>
        <StyledForm.Item>
          <Button className="cancelButtonPopUp" key="back" onClick={onClose}>
            Cancelar
          </Button>
          <Button className="confirmButtonPopUp" key="submit" htmlType="submit">
            Cadastrar
          </Button>
        </StyledForm.Item>
      </StyledForm>
    </StyledCadastroAlunoPopUp>
  );
};
