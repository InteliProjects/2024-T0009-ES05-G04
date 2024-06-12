import React from 'react';
import { Form, Input, Button, message, Modal, Select } from 'antd';
import { StyledCadastroOngPopUp, StyledForm } from './styles';
import { useQuery } from 'react-query';
import { cadastrarOng } from '../../services/ongsService';
import { useQueryClient } from 'react-query';
import { atualizarOngLider, fetchLideresDisponiveis } from '../../services/usersService';

const { Option } = Select;

export const CadastroOngPopUp = ({ open, onClose }) => {
  const queryClient = useQueryClient();
  const [form] = Form.useForm();

  const { data: lideres } = useQuery(
    'lideresDisponiveis',
    fetchLideresDisponiveis
  );

  const validateMessages = {
    required: '${label} é obrigatório',
  };

  const handleSubmit = async (values) => {
    try {
      const response = await cadastrarOng(values);
      const id = response.id;
      if (id) {
        await atualizarOngLider(values.lider, id);
      }
      message.success('ONG cadastrada com sucesso!');
      queryClient.invalidateQueries(['ongs']);
      handleClose();
    } catch (error) {
      message.error('Erro ao cadastrar ONG: ' + error.message);
    }
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const showCadastroConfirm = (values) => {
    Modal.confirm({
      title: 'Você deseja confirmar o cadastro desta ONG?',
      okText: 'Confirmar',
      cancelText: 'Cancelar',
      onOk: () => handleSubmit(values),
      okButtonProps: {
        className: 'modalConfirmButton',
      },
      cancelButtonProps: {
        className: 'modalCancelButton',
      },
    });
  };

  return (
    <StyledCadastroOngPopUp
      title="Cadastro de ONG"
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
          label="Nome da ONG"
          rules={[{ required: true }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="endereco"
          label="Endereço"
          rules={[{ required: true }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="bairro"
          label="Bairro"
          rules={[{ required: true }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="numero"
          label="Número"
          rules={[{ required: true }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="cidade"
          label="Cidade"
          rules={[{ required: true }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="estado"
          label="Estado"
          rules={[{ required: true }]}
        >
          <Input />
        </StyledForm.Item>
        <StyledForm.Item
          name="lider"
          label="Líder da ONG"
          rules={[{ required: true }]}
        >
          <Select placeholder="Selecione o líder">
            {lideres?.map((lider) => (
              <Option key={lider.id} value={lider.id}>
                {lider.nome}
              </Option>
            ))}
          </Select>
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
    </StyledCadastroOngPopUp>
  );
};
