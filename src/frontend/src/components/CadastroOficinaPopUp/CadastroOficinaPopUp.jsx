import React, { useState } from 'react';
import { StyledCadastroOficinaPopUp, StyledForm } from './styles';
import { Input, message, Select, Button, Modal } from 'antd';

import { useQueryClient } from 'react-query';
import { cadastrarOficina } from '../../services/oficinasService';
import { useAuth } from '../../context/AuthContext';

const { Option } = Select;

export const CadastroOficinaPopUp = ({ open, onClose }) => {
  const [subcategorias, setSubcategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const queryClient = useQueryClient();
  const [form] = StyledForm.useForm();
  const { idOng } = useAuth();

  const validateMessages = {
    required: '${label} é obrigatório',
  };

  const handleSubmit = async (values) => {
    const dadosCadastro = {
      ...values,
      id_ong: idOng,
      categoria: categoriaSelecionada
    };

    try {
      await cadastrarOficina(dadosCadastro);
      message.success('Oficina cadastrada com sucesso!');
      queryClient.invalidateQueries(['oficinas', idOng]);
      handleClose();
    } catch (error) {
      message.error('Erro ao cadastrar oficina: ' + error.message);
    }
  };

  const handleCategoriaChange = (value) => {
    setCategoriaSelecionada(value);
    switch (value) {
      case 'Esporte':
        setSubcategorias(['Futebol', 'Basquete']);
        break;
      case 'Arte e Cultura':
        setSubcategorias(['Música', 'Dança']);
        break;
      case 'Educação':
        setSubcategorias(['Matemática', 'Ciências']);
        break;
      default:
        setSubcategorias([]);
        break;
    }
    form.setFieldsValue({ subcategoria: undefined });
  };
  
  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const showCadastroConfirm = (values) => {
    Modal.confirm({
      title: 'Você deseja confirmar o cadastro desta oficina?',
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
    <StyledCadastroOficinaPopUp
      title="Cadastro de Oficina"
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
          label="Nome da Oficina"
          rules={[{ required: true }]}
        >
          <Input placeholder="Digite o nome da oficina" />
        </StyledForm.Item>
        <StyledForm.Item
          name="categoria"
          label="Categoria"
          rules={[{ required: true }]}
        >
          <Select
            placeholder="Selecione uma categoria"
            onChange={handleCategoriaChange}
          >
            <Option value="Esporte">Esporte</Option>
            <Option value="Arte e Cultura">Arte e Cultura</Option>
            <Option value="Educação">Educação</Option>
          </Select>
        </StyledForm.Item>
        <StyledForm.Item name="subcategoria" label="Subcategoria" rules={[{ required: true }]}>
          <Select
            placeholder="Selecione uma subcategoria"
            disabled={!categoriaSelecionada}
          >
            {subcategorias?.map((subcategoria) => (
              <Option key={subcategoria} value={subcategoria}>
                {subcategoria}
              </Option>
            ))}
          </Select>
        </StyledForm.Item>
        <StyledForm.Item
          name="local"
          label="Local"
          rules={[{ required: true }]}
        >
          <Input placeholder="Digite o local da oficina" />
        </StyledForm.Item>
        <StyledForm.Item name="observacoes" label="Observações">
          <Input.TextArea placeholder="Adicione observações sobre a oficina" />
        </StyledForm.Item>
        <StyledForm.Item>
          <Button
            className="cancelButtonPopUp"
            key="back"
            type="primary"
            onClick={onClose}
          >
            Cancelar
          </Button>
          <Button
            className="confirmButtonPopUp"
            key="submit"
            type="primary"
            htmlType="submit"
          >
            Cadastrar
          </Button>
        </StyledForm.Item>
      </StyledForm>
    </StyledCadastroOficinaPopUp>
  );
};
