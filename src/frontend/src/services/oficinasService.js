import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

// Função para buscar as oficinas de uma ong específica
export const fetchOficinas = async (idOng) => {
  try {
    const response = await axios.get(`${API_URL}/oficinas/ongs/${idOng}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para buscar os detalhes de uma oficina específica
export const fetchDetalhesOficina = async (idOficina) => {
  try {
    const response = await axios.get(`${API_URL}/oficinas/${idOficina}`); // Faz uma requisição GET para a API
    return response.data; // Retorna os dados da resposta da API
  } catch (error) {
    if (error.response) {
      throw error.response.data; // Lança um erro com a mensagem da resposta da API em caso de erro
    } else {
      throw new Error(error.message); // Lança um erro genérico caso não haja resposta da API
    }
  }
};

// Função para fazer a requisição de edição de uma oficina
export const editarOficina = async ({
  id,
  nome,
  categoria,
  subcategoria,
  local,
  observacoes,
}) => {
  try {
    const response = await axios.put(`${API_URL}/oficinas/${id}`, {
      nome,
      categoria,
      subcategoria,
      local,
      observacoes,
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

// função para cadastrar oficina
export const cadastrarOficina = async (values) => {
  try {
    await axios.post(`${API_URL}/oficinas`, values);
    return true;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else {
      throw new Error(error.message);
    }
  }
};
