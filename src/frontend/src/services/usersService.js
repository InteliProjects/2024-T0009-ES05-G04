import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para fazer login na API
export const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      // Faz uma requisição POST para a API
      email,
      senha,
    });
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw error; // Lança o erro original caso não haja resposta da API
    }
  }
};

// Função para buscar os professores de uma ong
export const fetchProfessoresByOng = async (idOng) => {
  try {
    const response = await axios.get(`${API_URL}/professores/ongs/${idOng}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

export const fetchProfessorById = async (idProfessor) => {
  try {
    const response = await axios.get(`${API_URL}/professores/${idProfessor}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para requisição do backend para criar um professor
export const createProfessor = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/professores`, values);
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw error; // Lança o erro original caso não haja resposta da API
    }
  }
};

export const fetchUserById = async (idUser) => {
  try {
    const response = await axios.get(`${API_URL}/users/${idUser}`); /// Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para buscar os lideres disponíveis
export const fetchLideresDisponiveis = async () => {
    try {
      const response = await axios.get(`${API_URL}/users`); // Faz uma requisição GET para a API
      return response.data; // Retorna os dados da resposta da API
    } catch (error) {
      if (error.response) {
        throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
      } else {
        throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
      }
  };
}

export const editarProfessor = async ({ idProfessor, nome, email, cpf, rg }) => {
  try {
    const response = await axios.put(`${API_URL}/professores/${idProfessor}`, {
      nome,
      email,
      cpf,
      rg
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

// Função para atualizar a ong de um lider
export const atualizarOngLider = async (idUser, idOng) => {
  try {
    const response = await axios.put(
      `${API_URL}/users/${idUser}/ongs/${idOng}`
    );
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response && error.response.data) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw error; // Lança o erro original caso não haja resposta da API
    }
  }
};