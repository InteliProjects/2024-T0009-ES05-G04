// Importa a função Router do módulo Express
const { Router } = require("express");

// Importa o controlador de Aula
const AulaController = require("../controllers/AulaController");

// Cria uma instância de Router
const router = Router();

/**
 * @swagger
 * /aulas/professores/{id}:
 *   get:
 *     summary: Retorna as aulas de um professor específico
 *     description: Retorna as aulas associadas a um professor com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do professor
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
 *                     description: ID da aula
 *                   data:
 *                     type: string
 *                     format: date-time
 *                     description: Data da aula (no formato ISO 8601)
 *                   duracao:
 *                     type: integer
 *                     description: Duração da aula em minutos
 *                   ocorrida:
 *                     type: boolean
 *                     description: Indica se a aula já ocorreu
 *                   id_turma:
 *                     type: integer
 *                     description: ID da turma associada à aula
 *                   nome_turma:
 *                     type: string
 *                     description: Nome da turma associada à aula
 *                   nome_oficina:
 *                     type: string
 *                     description: Nome da oficina da aula
 *       '404':
 *         description: Professor não encontrado
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/aulas/professores/:id", AulaController.findByIdProfessor); // rota para buscar próximas aulas por idProfessor

/**
 * @swagger
 * /aulas/turmas/{id}:
 *   get:
 *     summary: Retorna as aulas de uma turma com base no ID da turma e na ocorrência
 *     description: Retorna as aulas associadas a uma turma com o ID especificado, filtradas por ocorrência (true/false).
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma
 *       - in: query
 *         name: ocorrida
 *         schema:
 *           type: boolean
 *         description: Filtrar aulas por ocorrência (true para aulas ocorridas, false para aulas não ocorridas)
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
 *                     description: ID da aula
 *                   data:
 *                     type: string
 *                     format: date-time
 *                     description: Data da aula (no formato ISO 8601)
 *                   duracao:
 *                     type: integer
 *                     description: Duração da aula em minutos
 *                   ocorrida:
 *                     type: boolean
 *                     description: Indica se a aula já ocorreu
 *                   id_turma:
 *                     type: integer
 *                     description: ID da turma associada à aula
 *       '404':
 *         description: Turma não encontrada
 *       '500':
*         description: Erro interno do servidor
*/

router.get("/aulas/turmas/:id", AulaController.filterAulas); // rota para buscar aulas por turma com filtro de ocorrência

/**
 * @swagger
 * /aulas:
 *   post:
 *     summary: Cria novas aulas
 *     description: Cria novas aulas com base nos dados fornecidos no corpo da requisição.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 data:
 *                   type: string
 *                   format: date-time
 *                   description: Data da aula (no formato ISO 8601)
 *                 duracao:
 *                   type: string
 *                   description: Duração da aula
 *                 ocorrida:
 *                   type: boolean
 *                   description: Indica se a aula já ocorreu
 *                 id_turma:
 *                   type: integer
 *                   description: ID da turma associada à aula
 *     responses:
 *       '201':
 *         description: Aulas criadas com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */


router.post("/aulas", AulaController.createAula); // Rota para criar aula

/**
 * @swagger
 * /aulas/{id}:
 *   put:
 *     summary: Atualiza o status de ocorrência de uma aula
 *     description: Atualiza o status de ocorrência de uma aula com o ID especificado para true.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da aula a ser atualizada
 *     responses:
 *       '200':
 *         description: Aula atualizada com sucesso
 *       '404':
 *         description: Aula não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.put("/aulas/:id", AulaController.updateAula); // Rota para atualizar aula

/**
 * @swagger
 * /aulas/{id}:
 *   delete:
 *     summary: Remove uma aula específica
 *     description: Remove uma aula com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da aula a ser removida
 *     responses:
 *       '204':
 *         description: Aula removida com sucesso
 *       '404':
 *         description: Aula não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.delete("/aulas/:id", AulaController.deleteAula); // Rota para deletar aula

// Exporta o router para ser utilizado em outras partes da aplicação
module.exports = router;
