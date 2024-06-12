import { Form, Input, Button, message, Modal } from 'antd';
import { createProfessor } from '../../services/usersService';
import { useAuth } from '../../context/AuthContext';
import { StyledCadastroProfessorPopUp, StyledForm } from './styles';

export const CadastroProfessorPopUp = ({ visible, onClose }) => {
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

    try {
      const novoProfessor = {
        ...values,
        cpf: cpfFormatado,
        id_cargo: 1,
        id_ong: idOng,
      };

      const professor = await createProfessor(novoProfessor);
      if (professor) {
        message.success('Professor cadastrado com sucesso!');
        form.resetFields();
        handleClose();
      }
    } catch (error) {
      message.error('Erro ao cadastrar professor: ' + error.message);
    }
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const showCadastroConfirm = (values) => {
    Modal.confirm({
      title: 'Você deseja confirmar o cadastro deste professor?',
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
    <StyledCadastroProfessorPopUp
      title="Cadastro de Professor"
      open={visible}
      onCancel={handleClose}
      footer={null}
    >
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={showCadastroConfirm}
        validateMessages={validateMessages}
      >
        <StyledForm.Item name="nome" label="Nome" rules={[{ required: true }]}>
          <Input placeholder="Digite o nome completo" />
        </StyledForm.Item>

        <StyledForm.Item
          name="email"
          label="Email"
          rules={[{ required: true }, { type: 'email' }]}
        >
          <Input placeholder="Digite o e-mail" />
        </StyledForm.Item>

        <StyledForm.Item
          name="senha"
          label="Senha"
          rules={[{ required: true }]}
        >
          <Input.Password placeholder="Digite uma senha" />
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
          <Input placeholder="Digite o CPF" />
        </StyledForm.Item>

        <StyledForm.Item
          name="rg"
          label="RG"
          rules={[
            {
              pattern: /\d{2}\.\d{3}\.\d{3}-\d{1}/,
            },
          ]}
        >
          <Input placeholder="Digite o RG" />
        </StyledForm.Item>
        <StyledForm.Item>
          <Button
            className="cancelButtonPopUp"
            key="back"
            onClick={onClose}
          >
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
    </StyledCadastroProfessorPopUp>
  );
};
