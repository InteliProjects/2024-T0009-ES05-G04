import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import {
    ReadOnlyField,
    StyledForm,
    DetalhesAlunoContainer,
    Cabecalho,
    StyledFormContainer,
    Container
} from './styles';
import { Input, Button, Select, message, Modal } from 'antd';
import {
    fetchAlunoById,
    editarAluno,
} from '../../services/alunosService';
import { useAuth } from '../../context/AuthContext';

const { Option } = Select;

export const DetalhesAlunosCadastradosLider = ({ idAluno }) => {
    const [editMode, setEditMode] = useState(false);
    const [subcategorias, setSubcategorias] = useState([]);

    const [form] = StyledForm.useForm();

    const { idCargo } = useAuth();
    const podeEditar = idCargo === 2;

    const { data: user, refetch: refetchAluno } = useQuery(
        ['user', idAluno],
        () => fetchAlunoById(idAluno),
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
        if (user) {

            form.setFieldsValue({
                nome: user?.nome,
                rg: user?.rg,
                cpf: user?.cpf,
                email: user?.email,
            });
        }
    }, [user, form]);

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
            await editarAluno({ idAluno, ...user, ...formValues });
            message.success('Aluno editado com sucesso');
            refetchAluno();
            setEditMode(false);
        } catch (error) {
            message.error('Erro ao editar aluno');
        }
    };


    const showEditConfirm = () => {
        Modal.confirm({
            title: 'Você tem certeza que deseja salvar as alterações?',
            content: 'Esta ação irá atualizar os dados do aluno.',
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
            <StyledFormContainer>
                <StyledForm.Item name="nome" label="Nome do Aluno">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="rg" label="RG">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="cpf" label="CPF">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="endereco" label="Endereço">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="bairro" label="Bairro">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="numero" label="Numero">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="cidade" label="Cidade">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="estado" label="Estado">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="telefone" label="Telefone">
                    <Input />
                </StyledForm.Item>

                <StyledForm.Item name="celular" label="Celular">
                    <Input />
                </StyledForm.Item>

            </StyledFormContainer>

        ) : (
            <Container>

                        <ReadOnlyField>
                            <span className="label">RG</span>
                            <div className="value">{user?.rg || 'N/A'}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">CPF</span>
                            <div className="value">{user?.cpf}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">E-mail</span>
                            <div className="value">{user?.email}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Data de Nascicmento</span>
                            <div className="value">{user?.data_nasc}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Raça</span>
                            <div className="value">{user?.raca}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Gênero</span>
                            <div className="value">{user?.genero}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Estado Civil</span>
                            <div className="value">{user?.estado_civil}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Responsável</span>
                            <div className="value">{user?.responsavel}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Endereço</span>
                            <div className="value">{user?.endereco}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Bairro</span>
                            <div className="value">{user?.bairro}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Número</span>
                            <div className="value">{user?.numero}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Cidade</span>
                            <div className="value">{user?.cidade}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Estado</span>
                            <div className="value">{user?.estado}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Telefone</span>
                            <div className="value">{user?.telefone}</div>
                        </ReadOnlyField>
                        <ReadOnlyField>
                            <span className="label">Celular</span>
                            <div className="value">{user?.celular   }</div>
                        </ReadOnlyField>

            </Container>
        );

    return (
        <DetalhesAlunoContainer>
            <Cabecalho>
                <h1 className="value">{user?.nome}</h1>
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
            <StyledForm form={form} layout="vertical" initialValues={user}>
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
        </DetalhesAlunoContainer>
    );
};
