// Importa a função Router do módulo Express
const { Router } = require("express");

// Importa o controlador de Aula
const ProfessorController = require("../controllers/ProfessorController");

// Cria uma instância de Router
const router = Router();

/**
 * @swagger
 * /professores/{id}:
 *   get:
 *     summary: Retorna detalhes de um professor específico
 *     description: Retorna os detalhes do professor com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do professor a ser buscado
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do professor
 *                   nome:
 *                     type: string
 *                     description: Nome do professor
 *                   email:
 *                     type: string
 *                     description: Endereço de e-mail do professor
 *                   senha:
 *                     type: string
 *                     description: Senha do professor (deve ser tratada com confidencialidade)
 *                   cpf:
 *                     type: string
 *                     description: CPF do professor
 *                   rg:
 *                     type: string
 *                     nullable: true
 *                     description: RG do professor (pode ser nulo)
 *                   id_cargo:
 *                     type: integer
 *                     description: ID do cargo do professor
 *                   id_ong:
 *                     type: integer
 *                     description: ID da ONG associada ao professor
 *       '404':
 *         description: Professor não encontrado
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/professores/:id", ProfessorController.getByIdProfessor); // Rota para buscar um professor pelo ID

/**
 * @swagger
 * /professores:
 *   post:
 *     summary: Cadastra um novo professor
 *     description: Cria um novo registro de professor com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome completo do professor
 *               email:
 *                 type: string
 *                 description: Endereço de e-mail do professor
 *               senha:
 *                 type: string
 *                 description: Senha para acesso do professor
 *               cpf:
 *                 type: string
 *                 description: CPF do professor
 *               rg:
 *                 type: string
 *                 description: RG do professor
 *               id_cargo:
 *                 type: integer
 *                 description: ID do cargo do professor na instituição
 *               id_ong:
 *                 type: integer
 *                 description: ID da ONG à qual o professor está associado
 *     responses:
 *       '201':
 *         description: Professor cadastrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do professor cadastrado
 *       '400':
 *         description: Dados fornecidos são inválidos
 *       '500':
 *         description: Erro interno no servidor
 */

router.post("/professores", ProfessorController.createProfessor); // Rota para cadastrar um professor

/**
 * @swagger
 * /professores/ongs/{id}:
 *   get:
 *     summary: Retorna os professores associados a uma ONG específica
 *     description: Retorna uma lista de professores associados à ONG com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ONG para a qual os professores são buscados
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID do professor
 *                   nome:
 *                     type: string
 *                     description: Nome do professor
 *                   email:
 *                     type: string
 *                     description: Endereço de e-mail do professor
 *       '404':
 *         description: ONG ou professores não encontrados
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/professores/ongs/:id", ProfessorController.getByOngId); // Rota para buscar professores pela ONG

/**
 * @swagger
 * /professores/{id}:
 *   put:
 *     summary: Atualiza dados de um professor
 *     description: Atualiza os dados de um professor específico com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do professor a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Novo nome do professor
 *               email:
 *                 type: string
 *                 description: Novo endereço de e-mail do professor
 *               cpf:
 *                 type: string
 *                 description: Novo CPF do professor
 *               rg:
 *                 type: string
 *                 description: Novo RG do professor
 *     responses:
 *       '200':
 *         description: Dados do professor atualizados com sucesso
 *       '400':
 *         description: Dados fornecidos são inválidos
 *       '404':
 *         description: Professor não encontrado
 *       '500':
 *         description: Erro interno no servidor
 */

router.put("/professores/:id", ProfessorController.updateProfessor); // Rota para editar dados de um professor por ID
// Exporta o router para ser utilizado em outras partes da aplicação
module.exports = router;
