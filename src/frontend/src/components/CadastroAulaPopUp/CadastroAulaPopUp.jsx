import React from 'react';
import {
  Form,
  TimePicker,
  DatePicker,
  Button,
  Checkbox,
  Select,
  message,
  Modal,
} from 'antd';
import {
  addDays,
  format,
  startOfMonth,
  differenceInCalendarWeeks,
} from 'date-fns';
import { StyledCadastroAulaPopUp, StyledForm } from './styles';
import { cadastrarAulas } from '../../services/aulasService';

const { Option } = Select;

export const CadastroAulaPopUp = ({ open, onClose, turma }) => {
  const [form] = Form.useForm();

  const diasDaSemana = [
    { label: 'Domingo', value: 0 },
    { label: 'Segunda-feira', value: 1 },
    { label: 'Terça-feira', value: 2 },
    { label: 'Quarta-feira', value: 3 },
    { label: 'Quinta-feira', value: 4 },
    { label: 'Sexta-feira', value: 5 },
    { label: 'Sábado', value: 6 },
  ];

  const validateMessages = {
    required: '${label} é obrigatório',
  };

  const calcularDuracao = (dataInicio, dataFim) => {
    const duracaoMs = dataFim - dataInicio;
    const duracaoMinutos = Math.floor(duracaoMs / 60000);
    return duracaoMinutos;
  };

  const encontrarPrimeirasOcorrenciasSemanais = (
    dataInicio,
    diasSelecionados
  ) => {
    return diasSelecionados.reduce((acc, diaDaSemana) => {
      let dataAtual = startOfMonth(dataInicio);
      while (dataAtual.getDay() !== diaDaSemana) {
        dataAtual = addDays(dataAtual, 1);
      }
      acc[diaDaSemana] =
        differenceInCalendarWeeks(dataAtual, startOfMonth(dataInicio)) + 1;
      return acc;
    }, {});
  };

  const calcularDiasDeAula = (
    dataInicio,
    dataFim,
    diasSelecionados,
    recorrencia,
    horaInicio
  ) => {
    let dias = [];
    const primeirasOcorrenciasSemanais = encontrarPrimeirasOcorrenciasSemanais(
      dataInicio,
      diasSelecionados
    );

    for (
      let dataAtual = dataInicio;
      dataAtual <= dataFim;
      dataAtual = addDays(dataAtual, 1)
    ) {
      const diaDaSemana = dataAtual.getDay();

      if (!diasSelecionados.includes(diaDaSemana)) continue;

      let deveAgendar = false;

      switch (recorrencia) {
        case 'semanal':
          deveAgendar = true;
          break;
        case 'quinzenal':
          const diffWeeks = differenceInCalendarWeeks(dataAtual, dataInicio, {
            weekStartsOn: 1,
          });
          deveAgendar = diffWeeks % 2 === 0 && diffWeeks >= 0;
          break;
        case 'mensal':
          deveAgendar =
            differenceInCalendarWeeks(dataAtual, startOfMonth(dataAtual)) +
              1 ===
            primeirasOcorrenciasSemanais[diaDaSemana];
          break;
      }

      if (deveAgendar) {
        dias.push({
          date: `${format(dataAtual, 'yyyy-MM-dd')} ${horaInicio}`,
        });
      }
    }

    return dias;
  };

  const gerenciarAgendamentoDeAulas = (valores) => {
    const { recorrencia, diasSemana, periodo, horario } = valores;
    const dataInicio = new Date(periodo[0]);
    const dataFim = new Date(periodo[1]);
    const horaInicio = format(horario[0].toDate(), 'HH:mm');
    const duracao = calcularDuracao(horario[0], horario[1]);
    const diasAula = calcularDiasDeAula(
      dataInicio,
      dataFim,
      diasSemana,
      recorrencia,
      horaInicio
    );
    const agendamentoDeAulas = diasAula.map((diaAula) => ({
      data: format(new Date(diaAula.date), 'yyyy-MM-dd HH:mm'),
      duracao,
      id_turma: turma.id,
    }));

    return agendamentoDeAulas;
  };

  const handleSubmit = async (values) => {
    const aulasAgendadas = gerenciarAgendamentoDeAulas(values);

    try {
      await cadastrarAulas(aulasAgendadas);
      handleClose();
      message.success('Aula(s) cadastrada(s) com sucesso!');
    } catch (error) {
      message.error('Erro ao cadastrar aula(s): ' + error.message);
    }
  };

  const handleClose = () => {
    form.resetFields();
    onClose();
  };

  const showCadastroConfirm = (values) => {
    Modal.confirm({
      title: 'Você deseja confirmar o agendamento desta(s) aula(s)?',
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
    <StyledCadastroAulaPopUp
      title={`Cadastro de Aulas - ${turma?.nome}`}
      open={open}
      onCancel={handleClose}
    >
      <StyledForm
        form={form}
        layout="vertical"
        onFinish={showCadastroConfirm}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="recorrencia"
          label="Recorrência"
          rules={[{ required: true }]}
        >
          <Select>
            <Option value="semanal">Semanal</Option>
            <Option value="quinzenal">Quinzenal</Option>
            <Option value="mensal">Mensal</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="diasSemana"
          label="Dias da Semana"
          rules={[{ required: true }]}
        >
          <Checkbox.Group options={diasDaSemana} />
        </Form.Item>
        <Form.Item
          name="horario"
          label="Horário de Início e Fim"
          rules={[{ required: true }]}
        >
          <TimePicker.RangePicker
            format="HH:mm"
            minuteStep={10}
            placeholder={['Hora Início', 'Hora Fim']}
          />
        </Form.Item>
        <Form.Item
          name="periodo"
          label="Período de Agendamento"
          rules={[{ required: true }]}
        >
          <DatePicker.RangePicker
            format="DD/MM/YYYY"
            placeholder={['Data Inicial', 'Data Final']}
            disabledDate={(current) => {
              return current && current.isBefore(new Date(), 'day');
            }}
          />
        </Form.Item>
        <Form.Item>
          <Button className="cancelButtonPopUp" key="back" onClick={onClose}>
            Cancelar
          </Button>
          <Button className="confirmButtonPopUp" key="submit" htmlType="submit">
            Cadastrar
          </Button>
        </Form.Item>
      </StyledForm>
    </StyledCadastroAulaPopUp>
  );
};
