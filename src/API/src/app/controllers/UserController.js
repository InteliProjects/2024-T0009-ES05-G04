// Importa o módulo jwt para gerar tokens JWT
const jwt = require('jsonwebtoken');

// Importa o repositório de Usuário
const UserRepository = require('../repositories/UserRepository');

class UserController {
  // Método para lidar com o processo de login do usuário
  async login(req, res) {
    // Extrair email e senha do corpo da requisição
    const { email, senha } = req.body;

    try {
      // Tentar encontrar o usuário com as credenciais fornecidas
      const user = await UserRepository.findByCredentials(email, senha);

      // Enviar o ID do usuário, o ID do cargo e ID da ong como resposta
      res.json({ userId: user.id, roleId: user.id_cargo, ongId: user.id_ong });
    } catch (error) {
      // Se ocorrer algum erro durante o processo de login, enviar uma resposta de erro 401
      res.status(401).json({ error: error.message });
    }
  }

  async getPerfil(req, res){
    const { id } = req.params;


    try{
      const perfil = await UserRepository.find(Number(id));
      res.json(perfil)
    } catch(error) {
      console.log("Erro ao buscar o perfil", error);
      res.status(500).json({error: "erro interno do servidor"});
    }
  }

  async updateLider(req, res) {
    const { idUser, idOng } = req.params;

    try {
      await UserRepository.updateLider(idUser, idOng);
      res.status(204).send();
    } catch (error) {
      console.log('Erro ao atualizar lider', error);
      res.status(500).json({ error: 'erro interno do servidor' });
    }
  }

  async getUserWithoutOng(req, res) {
    try {
      const users = await UserRepository.findUserWithoutOng();
      res.json(users);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      res.status(500).json({ error: 'Erro ao buscar usuários' });
    }
  }
}

module.exports = new UserController();