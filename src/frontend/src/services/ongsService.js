import axios from 'axios'; // Importa a biblioteca axios

const API_URL = process.env.REACT_APP_API_URL; // Obtém o URL da API a partir da variável de ambiente

// Função para buscar as ongs
export const fetchOngs = async () => {
    try {
      const response = await axios.get(`${API_URL}/ongs`); // Faz uma requisição GET para a API
      return response.data; // Retorna os dados da resposta da API
    } catch (error) {
      if (error.response) {
        throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
      } else {
        throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
      }
    }
  };

  // Função para buscar detalhes de uma ong pelo id
export const fetchDetalhesOng = async (idOng) => {
    try {
      const response = await axios.get(`${API_URL}/ongs/${idOng}`); // Faz uma requisição GET para a API
      return response.data; // Retorna os dados da resposta da API
    } catch (error) {
      if (error.response) {
        throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
      } else {
        throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
      }
    }
  };


  // Função para buscar informações gerais de uma ong pelo id
  export const fetchDadosGeraisOng = async (idOng) => {
    try {
      const response = await axios.get(`${API_URL}/ongs/infosGerais/${idOng}/`); // Faz uma requisição GET para a API
      return response.data; // Retorna os dados da resposta da API
    } catch (error) {
      if (error.response) {
        throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
      } else {
        throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
      }
    }
  }

  export const fetchDadosMensaisOng = async (idOng) => {
    try {
      const response = await axios.get(`${API_URL}/ongs/infosMensais/${idOng}/`); // Faz uma requisição GET para a API
      return response.data; // Retorna os dados da resposta da API
    } catch (error) {
      if (error.response) {
        throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
      } else {
        throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
      }
    }
  }

// Função para cadastrar uma nova ong
export const cadastrarOng = async (values) => {
  try {
    const response = await axios.post(`${API_URL}/ongs`, values);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
}