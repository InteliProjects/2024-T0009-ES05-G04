import { useState } from 'react';
import { Header } from '../../../components/layout/Header/Header';
import { CadastroProfessorPopUp } from '../../../components/CadastroProfessorPopUp/CadastroProfessorPopUp';
import { CadastroAlunoPopUp } from '../../../components/CadastroAlunoPopUp/CadastroAlunoPopUp';
import { CadastradosContainer, StyledSelect } from './styles';
import { Button, Select } from 'antd';
import { TabelaCadastradosProfessores } from '../../../components/TabelaCadastradosProfessores/TabelaCadastradosProfessores';
import { TabelaCadastradosAlunos } from '../../../components/TabelaCadastradosAlunos/TabelaCadastradosAlunos';

export const CadastradosLider = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [tipoCadastro, setTipoCadastro] = useState('Professor');
  
    // Função para abrir o modal correto com base no tipo de cadastro
    const handleOpenModal = () => {
      setIsModalVisible(true);
    };
  
    // Função para fechar os modais
    const handleCloseModal = () => {
      setIsModalVisible(false);
    };
  
    // Botão e título dinâmicos com base no tipo de cadastro
    const tituloPagina = tipoCadastro === 'Professor' ? 'Professores' : 'Alunos';
    const textoBotao = `Cadastrar ${tipoCadastro.toLowerCase()}`;
  
    // Renderização condicional dos componentes ListaCadastrados e Modal
    return (
      <CadastradosContainer>
        <Header />
        <div className="cabecalho-cadastrados">
          <h1>{tituloPagina}</h1>
          <Button className="defaultButton" onClick={handleOpenModal}>
            {textoBotao}
          </Button>
          <StyledSelect defaultValue="Professor" onChange={setTipoCadastro}>
            <Select.Option value="Professor">Professores</Select.Option>
            <Select.Option value="Aluno">Alunos</Select.Option>
          </StyledSelect>
        </div>
        {tipoCadastro === 'Professor' ? (
          <TabelaCadastradosProfessores />
        ) : (
          <TabelaCadastradosAlunos />
        )}
        {isModalVisible && (
          tipoCadastro === 'Professor' ? (
            <CadastroProfessorPopUp visible={isModalVisible} onClose={handleCloseModal} />
          ) : (
            <CadastroAlunoPopUp visible={isModalVisible} onClose={handleCloseModal} />
          )
        )}
      </CadastradosContainer>
    );
  };