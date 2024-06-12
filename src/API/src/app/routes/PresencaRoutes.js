const { Router } = require("express");
const PresencaController = require("../controllers/PresencaController");

const router = Router();

/**
 * @swagger
 * /presencas/aulas/{id}:
 *   get:
 *     summary: Retorna as presenças para uma aula específica
 *     description: Retorna uma lista de presenças para a aula com o ID especificado, incluindo detalhes dos alunos e seus estados de presença.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da aula para a qual as presenças são solicitadas
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
 *                     description: ID da presença
 *                   presente:
 *                     type: boolean
 *                     description: Estado de presença do aluno na aula
 *                   id_aluno:
 *                     type: integer
 *                     description: ID do aluno
 *                   id_aula:
 *                     type: integer
 *                     description: ID da aula
 *                   nome:
 *                     type: string
 *                     description: Nome do aluno
 *       '404':
 *         description: Aula não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/presencas/aulas/:id", PresencaController.getPresencasByAulaId); // Rota para buscar presenças por ID da aula

/**
 * @swagger
 * /presencas:
 *   post:
 *     summary: Registra a presença de um aluno em uma aula
 *     description: Registra a presença (ou ausência) de um aluno em uma aula específica.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_aula:
 *                 type: integer
 *                 description: ID da aula na qual a presença está sendo registrada
 *               id_aluno:
 *                 type: integer
 *                 description: ID do aluno cuja presença está sendo registrada
 *               presente:
 *                 type: boolean
 *                 description: Estado de presença do aluno (true para presente, false para ausente)
 *     responses:
 *       '201':
 *         description: Presença registrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do registro de presença criado
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/presencas", PresencaController.registrarPresencas); // Rota para registrar presença

/**
 * @swagger
 * /presencas/aulas:
 *   post:
 *     summary: Calcula a frequência por aula
 *     description: Calcula a frequência de presença dos alunos por aula, baseando-se nos IDs das aulas fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_aulas:
 *                 type: array
 *                 items:
 *                   type: integer
 *                 description: Lista de IDs das aulas para as quais a frequência será calculada
 *     responses:
 *       '200':
 *         description: Frequência calculada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id_aula:
 *                     type: integer
 *                     description: ID da aula
 *                   presencas_count:
 *                     type: integer
 *                     description: Número total de presenças na aula
 *                   total_alunos:
 *                     type: integer
 *                     description: Número total de alunos que deveriam assistir à aula
 *                   frequencia:
 *                     type: number
 *                     format: double
 *                     description: Percentual de frequência na aula
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/presencas/aulas", PresencaController.calcularFrequecia); // Rota para calcular frequencia por aula

module.exports = router;
