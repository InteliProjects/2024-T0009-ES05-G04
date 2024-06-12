import React, { useState, useEffect, useMemo } from 'react';
import { useQuery } from 'react-query';
import {
    ReadOnlyField,
    StyledForm,
    DetalhesProfessorContainer,
    Cabecalho,
    StyledFormContainer,
    Container
} from './styles';
import { Input, Button, Select, message, Modal } from 'antd';
import {
    fetchProfessorById,
    editarProfessor,
} from '../../services/usersService';
import { useAuth } from '../../context/AuthContext';

const { Option } = Select;

export const DetalhesProfessoresCadastradosLider = ({ idProfessor }) => {
    const [editMode, setEditMode] = useState(false);

    const [form] = StyledForm.useForm();

    const { idCargo } = useAuth();
    const podeEditar = idCargo === 2;

    const { data: user, refetch: refetchProfessor } = useQuery(
        ['user', idProfessor],
        () => fetchProfessorById(idProfessor),
    );


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

    const handleEdit = () => setEditMode(true);

    const handleCancel = () => {
        setEditMode(false);
        form.resetFields();
    };

    const handleSave = async () => {
        try {
            const formValues = await form.validateFields();
            await editarProfessor({ idProfessor, ...user, ...formValues });
            message.success('Professor editado com sucesso');
            refetchProfessor();
            setEditMode(false);
        } catch (error) {
            message.error('Erro ao editar professor');
        }
    };


    const showEditConfirm = () => {
        Modal.confirm({
            title: 'Você tem certeza que deseja salvar as alterações?',
            content: 'Esta ação irá atualizar os dados do professor.',
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
                    <StyledForm.Item name="nome" label="Nome do Professor">
                        <Input />
                    </StyledForm.Item>

                    <StyledForm.Item name="rg" label="RG">
                        <Input />
                    </StyledForm.Item>

                    <StyledForm.Item name="cpf" label="CPF">
                        <Input />
                    </StyledForm.Item>

                    <StyledForm.Item name="email" label="E-mail">
                        <Input />
                    </StyledForm.Item>

                    <StyledForm.Item name="email" label="E-mail">
                        <Input />
                    </StyledForm.Item>
                    
                </StyledFormContainer>

        ) : (
                <Container>
                    {user && user.map((user, index) => (
                        <div key={index}>
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
                        </div>

                    ))}
                </Container>
        );

    return (
        <DetalhesProfessorContainer>
            {user && user.map((user, index) => (
                <div key={index}>
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
                </div>
            ))}
        </DetalhesProfessorContainer>
    );
};
