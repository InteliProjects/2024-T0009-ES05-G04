const pool = require('../../../database/db');

class UserRepository {
  // Método para buscar usuário por credenciais (email e senha)
  async findByCredentials(email, senha) {
    // Query SQL para buscar usuário com o email e senha fornecidos
    const query = 'SELECT * FROM users WHERE email = $1 AND senha = $2';
    const values = [ email, senha ];

    try {
      // Executar a consulta usando o pool de conexões
      const { rows } = await pool.query(query, values);

      // Verificar se há algum usuário retornado
      if (rows.length > 0) {
        return rows[0]; // Retornar o primeiro usuário encontrado
      } else {
        throw new Error('Usuário não encontrado ou senha incorreta');
      }
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  async find(id){
    const query = `SELECT * FROM users WHERE id = $1`
    const values = [id]

    try {
      const { rows } = await pool.query(query, values);
      return rows[0];
    } catch (error){
      throw error;
    }
  }

  async updateLider(idUser, idOng) {
    const query = 'UPDATE users SET id_ong = $1 WHERE id = $2';
    const values = [idOng, idUser];

    try {
      await pool.query(query, values);
    } catch (error) {
      throw error;
    }
  }

  async findUserWithoutOng() {
    const query = 'SELECT * FROM users WHERE id_cargo = 2 AND id_ong IS NULL';

    try {
      const { rows } = await pool.query(query);
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserRepository();