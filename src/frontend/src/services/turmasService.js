import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para buscar as turmas de um professor específico
export const fetchTurmasByProfessor = async (idProfessor) => {
  try {
    const response = await axios.get(`${API_URL}/turmas/professores/${idProfessor}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

export const fetchTurmasByOficina = async (idOficina) => {
  try {
    const response = await axios.get(`${API_URL}/turmas/oficinas/${idOficina}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

export const fetchDetalhesTurma = async (idTurma) => {
  try {
    const response = await axios.get(`${API_URL}/turmas/${idTurma}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para fazer a requisição de edição de uma turma
export const editarTurma = async ({
  id,
  nome,
  vagas,
  descricao_ocorrencia,
  id_professor,
}) => {
  try {
    const response = await axios.put(`${API_URL}/turmas/${id}`, {
      nome,
      vagas,
      descricao_ocorrencia,
      id_professor,
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

// função para cadastrar turma
export const cadastrarTurma = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/turmas`, values);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
};
