const { Router } = require("express");

// Importa o controlador de Usuário
const UserController = require("../controllers/UserController");

const router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Autenticação do usuário
 *     description: Permite que o usuário faça login na plataforma fornecendo email e senha.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: Endereço de email do usuário
 *               senha:
 *                 type: string
 *                 description: Senha do usuário
 *     responses:
 *       '200':
 *         description: Login bem-sucedido
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de acesso gerado após o login bem-sucedido
 *       '401':
 *         description: Credenciais inválidas
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/login", UserController.login); // Rota para login de usuário

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Retorna o perfil de um usuário
 *     description: Retorna o perfil do usuário com o ID especificado, incluindo detalhes pessoais e de associação.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário cujo perfil é solicitado
 *     responses:
 *       '200':
 *         description: Perfil do usuário obtido com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do usuário
 *                 nome:
 *                   type: string
 *                   description: Nome completo do usuário
 *                 email:
 *                   type: string
 *                   description: Endereço de e-mail do usuário
 *                 senha:
 *                   type: string
 *                   description: Senha do usuário (deve ser tratada com confidencialidade)
 *                 cpf:
 *                   type: string
 *                   description: CPF do usuário
 *                 rg:
 *                   type: string
 *                   nullable: true
 *                   description: RG do usuário (pode ser nulo)
 *                 id_cargo:
 *                   type: integer
 *                   description: ID do cargo do usuário
 *                 id_ong:
 *                   type: integer
 *                   description: ID da ONG associada ao usuário
 *       '404':
 *         description: Usuário não encontrado
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/users/:id", UserController.getPerfil); // Rota para pegar o perfil do usuário
router.post("/login", UserController.login); // Define a rota para login de usuário
router.get("/users", UserController.getUserWithoutOng); // Define a rota para buscar usuários sem ONG
router.put("/users/:idUser/ongs/:idOng", UserController.updateLider); // Define a rota para atualizar usuário

module.exports = router;
