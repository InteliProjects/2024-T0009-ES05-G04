import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para buscar alunos de uma turma específica
export const fetchAlunosFromTurma = async (idTurma) => {
  try {
    const response = await axios.get(`${API_URL}/alunos/turmas/${idTurma}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para buscar alunos de uma ong específica
export const fetchAlunosFromOng = async (idOng) => {
  try {
    const response = await axios.get(`${API_URL}/alunos/ongs/${idOng}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para buscar um aluno pelo ID
export const fetchAlunoById = async (idAluno) => {
  try {
    const response = await axios.get(`${API_URL}/alunos/${idAluno}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para remover um aluno de uma turma
export const removeAlunoFromTurma = async (idAluno, idTurmaToRemove) => {
  try {
    const response = await axios.delete(
      `${API_URL}/alunos/${idAluno}/turmas/${idTurmaToRemove}`
    ); // Faz uma requisição DELETE para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para buscar alunos não inscritos em uma turma específica
export const fetchAlunosNaoInscritos = async (idOng, idTurma) => {
  try {
    const response = await axios.get(
      // Faz uma requisição GET para a API
      `${API_URL}/alunos/ongs/${idOng}/turmas/${idTurma}`
    );
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      console.log('Erro', error.response.data); // Exibe a mensagem de erro da resposta no console
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      console.error('Erro na requisição: ', error.message); // Exibe o erro no console
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para adicionar um aluno a uma turma
export const addAlunoToTurma = async (idAluno, idTurmaToAdd) => {
  try {
    const response = await axios.post(`${API_URL}/alunos/turmas`, {
      // Faz uma requisição POST para a API
      id_aluno: idAluno,
      id_turma: idTurmaToAdd,
    });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    throw error;
  }
};

// Função para adicionar um aluno a uma turma
export const addAlunoToOng = async (idAluno, idOngToAdd) => {
  try {
    const response = await axios.post(`${API_URL}/alunos/ongs`, {
      // Faz uma requisição POST para a API
      id_aluno: idAluno,
      id_ong: idOngToAdd,
    });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para criar um novo aluno
export const createAluno = async (alunoData) => {
  try {
    const response = await axios.post(`${API_URL}/alunos`, alunoData); // Faz uma requisição POST para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    throw error;
  }
};

export const editarAluno = async ({ idAluno, nome, email, cpf, rg, endereco, bairro, numero, cidade, estado, telefone, celular }) => {
  try {
    const response = await axios.put(`${API_URL}/alunos/${idAluno}`, {
      nome,
      email,
      cpf,
      rg,
      endereco,
      bairro,
      numero,
      cidade,
      estado,
      telefone,
      celular
    });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

