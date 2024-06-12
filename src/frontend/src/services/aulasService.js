import axios from "axios"; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para buscar aulas de uma turma específica
export const fetchAulasPorTurma = async (idTurma, ocorrida) => {
  try {
    const response = await axios.get(`${API_URL}/aulas/turmas/${idTurma}?ocorrida=${ocorrida}`); 
    return response.data; 
  } catch (error) {
    if (error.response) {
      throw error.response.data; 
    } else {
      throw new Error(error.message); 
    }
  }
};

// consome api do back para buscar aulas de um idProfessor específico
export const fetchProximasAulasProfessor = async (idProfessor) => {
  try {
    const response = await axios.get(
      `${API_URL}/aulas/professores/${idProfessor}`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
};

// função para cadastrar aulas 
export const cadastrarAulas = async (aulas) => {
  try {
    await axios.post(
      `${API_URL}/aulas`, aulas
    );
    return true;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
};

// função para excluir aula
export const excluirAula = async (idAula) => {
  try {
    await axios.delete(
      `${API_URL}/aulas/${idAula}`
    );
    return true;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
};

// consome api do back para marcar aula como concluída
export const marcarAulaComoConcluida = async (idAula) => {
  try {
    await axios.put(
      `${API_URL}/aulas/${idAula}`
    );
    return true
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
};
