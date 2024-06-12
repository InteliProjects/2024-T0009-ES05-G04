import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import {
  ReadOnlyField,
  StyledForm,
  DetalhesOficinaContainer,
  Cabecalho,
  StyledFormContainer,
} from './styles';
import { Input, Button, Select, message, Modal } from 'antd';
import {
  fetchDetalhesOficina,
  editarOficina,
} from '../../services/oficinasService';
import { useAuth } from '../../context/AuthContext';

const { Option } = Select;

export const DetalhesOficina = ({ idOficina }) => {
  const [editMode, setEditMode] = useState(false);
  const [subcategorias, setSubcategorias] = useState([]);

  const [form] = StyledForm.useForm();

  const { idCargo } = useAuth();
  const podeEditar = idCargo === 2;

  const { data: oficina, refetch: refetchOficina } = useQuery(
    ['oficina', idOficina],
    () => fetchDetalhesOficina(idOficina)
  );

  const getSubcategorias = (categoria) => {
    switch (categoria) {
      case 'Esporte':
        return ['Futebol', 'Basquete'];
      case 'Arte e Cultura':
        return ['Música', 'Dança'];
      case 'Educação':
        return ['Matemática', 'Ciências'];
      default:
        return [];
    }
  };

  useEffect(() => {
    if (oficina) {
      const initialSubcategorias = getSubcategorias(oficina.categoria);
      setSubcategorias(initialSubcategorias);

      form.setFieldsValue({
        nome: oficina.nome,
        categoria: oficina.categoria,
        subcategoria: oficina.subcategoria,
        local: oficina.local,
        observacoes: oficina.observacoes,
      });
    }
  }, [oficina, form]);

  const handleCategoriaChange = (value) => {
    const subcat = getSubcategorias(value);
    setSubcategorias(subcat);
    form.setFieldsValue({
      subcategoria: subcat.length > 0 ? subcat[0] : undefined,
    });
  };

  const handleEdit = () => setEditMode(true);

  const handleCancel = () => {
    setEditMode(false);
    form.resetFields();
  };

  const handleSave = async () => {
    try {
      const formValues = await form.validateFields();
      await editarOficina({ ...oficina, ...formValues });
      message.success('Oficina editada com sucesso');
      refetchOficina();
      setEditMode(false);
    } catch (error) {
      message.error('Erro ao editar oficina');
    }
  };

  const showEditConfirm = () => {
    Modal.confirm({
      title: 'Você tem certeza que deseja salvar as alterações?',
      content: 'Esta ação irá atualizar os dados da oficina.',
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
          <StyledForm.Item name="nome" label="Nome da Oficina">
            <Input />
          </StyledForm.Item>
          <StyledForm.Item
            name="categoria"
            label="Categoria"
            rules={[{ required: true }]}
          >
            <Select
              onChange={handleCategoriaChange}
              placeholder="Selecione uma categoria"
            >
              <Option value="Esporte">Esporte</Option>
              <Option value="Arte e Cultura">Arte e Cultura</Option>
              <Option value="Educação">Educação</Option>
            </Select>
          </StyledForm.Item>
          <StyledForm.Item
            name="subcategoria"
            label="Subcategoria"
            rules={[{ required: true }]}
          >
            <Select placeholder="Selecione uma subcategoria" allowClear>
              {subcategorias.map((subcategoria) => (
                <Option key={subcategoria} value={subcategoria}>
                  {subcategoria}
                </Option>
              ))}
            </Select>
          </StyledForm.Item>
          <StyledForm.Item name="local" label="Local">
            <Input />
          </StyledForm.Item>
          <StyledForm.Item name="observacoes" label="Observações">
            <Input.TextArea />
          </StyledForm.Item>
        </StyledFormContainer>
      </>
    ) : (
      <>
        <ReadOnlyField>
          <span className="label">Categoria</span>
          <div className="value">{oficina?.categoria}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Subcategoria</span>
          <div className="value">{oficina?.subcategoria}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Local</span>
          <div className="value">{oficina?.local}</div>
        </ReadOnlyField>
        <ReadOnlyField>
          <span className="label">Observações</span>
          <div className="value">{oficina?.observacoes || '-'}</div>
        </ReadOnlyField>
      </>
    );

  return(
    <DetalhesOficinaContainer>
      <Cabecalho>
        <h1 className="value">{oficina?.nome}</h1>
        {podeEditar &&
          (editMode ? (
            <Button onClick={handleCancel} className="cancelButton">
              Cancelar
            </Button>
          ) : (
            <Button onClick={handleEdit} className="editButton">
              Editar
            </Button>
          ))}
      </Cabecalho>
      <StyledForm form={form} layout="vertical" initialValues={oficina}>
        {renderFormItems()}
        {podeEditar && editMode && (
          <Button
            style={{ marginLeft: '20px' }}
            className="defaultButton"
            htmlType="submit"
            onClick={showEditConfirm}
          >
            Salvar
          </Button>
        )}
      </StyledForm>
    </DetalhesOficinaContainer>
  );
};
