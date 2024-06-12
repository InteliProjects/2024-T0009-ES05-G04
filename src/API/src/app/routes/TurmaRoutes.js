const { Router } = require("express");

// Importa o controlador de Turma
const TurmaController = require("../controllers/TurmaController");

const router = Router();

// Define a rota para buscar turmas por ID do professor
/**
 * @swagger
 * /turmas/professores/{id}:
 *   get:
 *     summary: Retorna as turmas associadas a um professor específico
 *     description: Retorna uma lista de turmas associadas ao professor com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do professor para o qual as turmas são buscadas
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
 *                     description: ID da turma
 *                   nome:
 *                     type: string
 *                     description: Nome da turma
 *                   vagas:
 *                     type: integer
 *                     description: Número de vagas disponíveis na turma
 *                   descricao_recorrencia:
 *                     type: string
 *                     description: Descrição da recorrência das aulas da turma
 *                   id_oficina:
 *                     type: integer
 *                     description: ID da oficina associada à turma
 *                   id_professor:
 *                     type: integer
 *                     description: ID do professor associado à turma
 *                   nome_oficina:
 *                     type: string
 *                     description: Nome da oficina associada à turma
 *       '404':
 *         description: Professor ou turmas não encontrados
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/turmas/professores/:id", TurmaController.getByProfessorId); // Rota para buscar turmas por ID do professor

/**
 * @swagger
 * /turmas/oficinas/{id}:
 *   get:
 *     summary: Retorna as turmas associadas a uma oficina específica
 *     description: Retorna uma lista de turmas associadas à oficina com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da oficina para a qual as turmas são buscadas
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
 *                     description: ID da turma
 *                   nome:
 *                     type: string
 *                     description: Nome da turma
 *                   descricao_recorrencia:
 *                     type: string
 *                     description: Descrição da recorrência das aulas da turma
 *                   id_oficina:
 *                     type: integer
 *                     description: ID da oficina associada à turma
 *       '404':
 *         description: Oficina ou turmas não encontradas
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/turmas/oficinas/:id", TurmaController.getByOficinaId); // Rota para buscar turmas por ID da oficina

/**
 * @swagger
 * /turmas/{id}:
 *   get:
 *     summary: Retorna detalhes de uma turma específica
 *     description: Retorna detalhes da turma com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma a ser buscada
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                   id:
 *                     type: integer
 *                     description: ID da turma
 *                   nome:
 *                     type: string
 *                     description: Nome da turma
 *                   vagas:
 *                     type: integer
 *                     description: Número de vagas disponíveis na turma
 *                   descricao_recorrencia:
 *                     type: string
 *                     description: Descrição da recorrência das aulas da turma
 *                   id_oficina:
 *                     type: integer
 *                     description: ID da oficina associada à turma
 *                   id_professor:
 *                     type: integer
 *                     description: ID do professor responsável pela turma
 *       '404':
 *         description: Turma não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/turmas/:id", TurmaController.getByTurmaId); // Rota para buscar turma por ID

/**
 * @swagger
 * /turmas:
 *   post:
 *     summary: Cria uma nova turma
 *     description: Cria uma nova turma com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da turma
 *               vagas:
 *                 type: integer
 *                 description: Número total de vagas disponíveis na turma
 *               descricao_recorrencia:
 *                 type: string
 *                 description: Descrição da recorrência das aulas da turma
 *               id_oficina:
 *                 type: integer
 *                 description: ID da oficina associada à turma
 *               id_professor:
 *                 type: integer
 *                 description: ID do professor responsável pela turma
 *     responses:
 *       '201':
 *         description: Turma criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID da turma criada
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/turmas", TurmaController.createTurma); // Rota para criar uma nova turma

/**
 * @swagger
 * /turmas/{id}:
 *   put:
 *     summary: Atualiza uma turma existente
 *     description: Atualiza os detalhes de uma turma específica com base no ID fornecido.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Novo nome da turma
 *               vagas:
 *                 type: integer
 *                 description: Novo número total de vagas disponíveis na turma
 *               descricao_recorrencia:
 *                 type: string
 *                 description: Nova descrição da recorrência das aulas da turma
 *               id_professor:
 *                 type: integer
 *                 description: ID do novo professor responsável pela turma
 *     responses:
 *       '200':
 *         description: Turma atualizada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID da turma atualizada
 *                 nome:
 *                   type: string
 *                 vagas:
 *                   type: integer
 *                 descricao_recorrencia:
 *                   type: string
 *                 id_professor:
 *                   type: integer
 *       '400':
 *         description: Dados fornecidos são inválidos
 *       '404':
 *         description: Turma não encontrada
 *       '500':
 *         description: Erro interno no servidor
 */

router.put("/turmas/:id", TurmaController.updateTurma); // Rota para atualizar uma turma

module.exports = router;
