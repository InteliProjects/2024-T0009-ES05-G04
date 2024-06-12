const { Router } = require("express");
const OngController = require("../controllers/OngController");

const router = Router();

/**
 * @swagger
 * /ongs:
 *   get:
 *     summary: Retorna a lista de todas as ONGs
 *     description: Retorna uma lista contendo todas as ONGs cadastradas no sistema.
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
 *                     description: ID da ONG
 *                   nome:
 *                     type: string
 *                     description: Nome da ONG
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/ongs", OngController.getAll); // Rota para buscar todas as ONGs

/**
 * @swagger
 * /ongs/{id}:
 *   get:
 *     summary: Retorna os detalhes de uma ONG específica
 *     description: Retorna os detalhes da ONG com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ONG a ser buscada
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID da ONG
 *                 nome:
 *                   type: string
 *                   description: Nome da ONG
 *                 endereco:
 *                   type: string
 *                   description: Endereço da ONG
 *                 bairro:
 *                   type: string
 *                   description: Bairro onde a ONG está localizada
 *                 numero:
 *                   type: string
 *                   description: Número do endereço da ONG
 *                 cidade:
 *                   type: string
 *                   description: Cidade onde a ONG está localizada
 *                 estado:
 *                   type: string
 *                   description: Estado onde a ONG está localizada
 *       '404':
 *         description: ONG não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/ongs/:id", OngController.getOng); // Rota para buscar ONG por ID

/**
 * @swagger
 * /ongs/infosGerais/{id}:
 *   get:
 *     summary: Retorna informações gerais de uma ONG específica
 *     description: Retorna um resumo das informações gerais da ONG com o ID especificado, incluindo número de alunos, oficinas, turmas e vagas por categoria.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ONG para a qual as informações gerais são solicitadas
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 alunosOng:
 *                   type: integer
 *                   description: Número total de alunos na ONG
 *                 alunosTurmas:
 *                   type: integer
 *                   description: Número total de alunos inscritos em turmas
 *                 oficinas:
 *                   type: integer
 *                   description: Número total de oficinas oferecidas pela ONG
 *                 turmas:
 *                   type: integer
 *                   description: Número total de turmas disponíveis
 *                 vagasTurmas:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       sum:
 *                         type: integer
 *                         description: Número total de vagas para a categoria
 *                       categoria:
 *                         type: string
 *                         description: Categoria da turma
 *                 alunosMatriculados:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       count:
 *                         type: integer
 *                         description: Número de alunos matriculados na categoria
 *                       categoria:
 *                         type: string
 *                         description: Categoria da turma
 *       '404':
 *         description: ONG não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/ongs/infosGerais/:id", OngController.getInfos); // Rota para buscar informações de uma ONG

/**
 * @swagger
 * /ongs/infosMensais/{id}:
 *   get:
 *     summary: Retorna informações mensais de uma ONG específica
 *     description: Retorna informações detalhadas sobre os atendimentos mensais da ONG, incluindo frequência e carga horária por categoria de atividade.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ONG para a qual as informações mensais são solicitadas
 *     responses:
 *       '200':
 *         description: Requisição bem-sucedida
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mesAno:
 *                   type: string
 *                   description: Mês e ano das informações
 *                 atendimentosMensal:
 *                   type: integer
 *                   description: Total de atendimentos realizados no mês
 *                 atendidosMensal:
 *                   type: integer
 *                   description: Número de atendidos no mês
 *                 frequenciaPorCategoria:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       categoria:
 *                         type: string
 *                         description: Categoria de atividade
 *                       frequencia:
 *                         type: number
 *                         format: double
 *                         description: Frequência de participação na categoria
 *                 cargaHorariaPorCategoria:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       categoria:
 *                         type: string
 *                         description: Categoria de atividade
 *                       horas:
 *                         type: integer
 *                         description: Carga horária total na categoria
 *                 totalHoras:
 *                   type: integer
 *                   description: Carga horária total de todas as atividades
 *       '404':
 *         description: ONG não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/ongs/infosMensais/:id", OngController.getInfosMensais); // Rota para buscar informações mensais de uma ONG

/**
 * @swagger
 * /ongs:
 *   post:
 *     summary: Cria uma nova ONG
 *     description: Cria uma nova ONG com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da ONG
 *               endereco:
 *                 type: string
 *                 description: Endereço da ONG
 *               bairro:
 *                 type: string
 *                 description: Bairro onde a ONG está localizada
 *               numero:
 *                 type: string
 *                 description: Número do endereço da ONG
 *               cidade:
 *                 type: string
 *                 description: Cidade onde a ONG está localizada
 *               estado:
 *                 type: string
 *                 description: Estado onde a ONG está localizada
 *     responses:
 *       '201':
 *         description: ONG criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID da ONG criada
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/ongs", OngController.createOng); // Rota para criar uma nova ONG


module.exports = router;
