const { Router } = require("express");

// Importa o controlador de Aluno
const AlunoController = require("../controllers/AlunoController");

const router = Router();

/**
 * @swagger
 * /alunos/turmas/{id}:
 *   get:
 *     summary: Retorna a lista de alunos de uma turma específica
 *     description: Retorna uma lista de alunos pertencentes à turma com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma da qual deseja-se obter os alunos
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
 *                   nome:
 *                     type: string
 *                     description: Nome do aluno
 *                   id:
 *                     type: integer
 *                     description: ID do aluno
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/alunos/turmas/:id", AlunoController.findByTurma); // Rota para buscar alunos por turma

/**
 * @swagger
 * /alunos/ongs/{id}:
 *   get:
 *     summary: Retorna a lista de alunos de uma ong específica
 *     description: Retorna uma lista de alunos pertencentes à ong com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ong da qual deseja-se obter os alunos
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
 *                   nome:
 *                     type: string
 *                     description: Nome do aluno
 *                   email:
 *                      type: string
 *                      description: Email do aluno
 *                   id:
 *                     type: integer
 *                     description: ID do aluno
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/alunos/ongs/:id", AlunoController.findByOng); // Rota para buscar alunos por ong

/**
 * @swagger
 * /alunos/ongs/{idOng}/turmas/{idTurma}:
 *   get:
 *     summary: Retorna a lista de alunos não inscritos em turmas de uma ong específica
 *     description: Retorna uma lista de alunos não inscritos em turmas pertencentes à ong com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: idOng
 *         required: true
 *         schema:
 *          type: integer
 *          description: ID da ong da qual deseja-se obter os alunos não inscritos
 *       - in: path
 *         name: idTurma
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma da qual deseja-se obter os alunos não inscritos
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
 *                   nome:
 *                     type: string
 *                     description: Nome do aluno
 *                   id:
 *                     type: integer
 *                     description: ID do aluno
 *       '500':
 *         description: Erro interno do servidor
 */

router.get(
  "/alunos/ongs/:idOng/turmas/:idTurma",
  AlunoController.findByNotInTurma
); // Rota para buscar alunos não inscritos em uma turma

/**
 * @swagger
 * /alunos/{id}:
 *   get:
 *     summary: Retorna os detalhes de um aluno específico
 *     description: Retorna os detalhes de um aluno com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer         
 *         description: ID do aluno
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
 *                   description: ID do aluno
 *                 nome:
 *                   type: string
 *                   description: Nome do aluno
 *                 email:
 *                   type: string
 *                   description: Endereço de e-mail do aluno
 *                 cpf:
 *                   type: string
 *                   description: CPF do aluno
 *                 rg:
 *                   type: string
 *                   description: RG do aluno
 *                 estado_civil:
 *                   type: string
 *                   description: Estado civil do aluno
 *                 endereco:
 *                   type: string
 *                   description: Endereço do aluno
 *                 bairro:
 *                   type: string
 *                   description: Bairro do aluno
 *                 numero:
 *                   type: string
 *                   description: Número do endereço do aluno
 *                 cidade:
 *                   type: string
 *                   description: Cidade do aluno
 *                 estado:
 *                   type: string
 *                   description: Estado do aluno
 *                 telefone:
 *                   type: string
 *                   description: Número de telefone do aluno
 *                 celular:
 *                   type: string
 *                   description: Número de celular do aluno
 *                 raca:
 *                   type: string
 *                   description: Raça do aluno
 *                 genero:
 *                   type: string
 *                   description: Gênero do aluno
 *                 data_nasc:
 *                   type: string
 *                   format: date-time
 *                   description: Data de nascimento do aluno (no formato ISO 8601)
 *                 responsavel:
 *                   type: string
 *                   description: Nome do responsável pelo aluno
 *       '404':
 *         description: Aluno não encontrado
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/alunos/:id", AlunoController.findById); // Rota para buscar um aluno pelo ID

/**
 * @swagger
 * /alunos:
 *   post:
 *     summary: Cria um novo aluno
 *     description: Cria um novo aluno com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do aluno
 *               email:
 *                 type: string
 *                 description: Endereço de e-mail do aluno
 *               cpf:
 *                 type: string
 *                 description: CPF do aluno
 *               rg:
 *                 type: string
 *                 description: RG do aluno
 *               estado_civil:
 *                 type: string
 *                 description: Estado civil do aluno
 *               endereco:
 *                 type: string
 *                 description: Endereço do aluno
 *               bairro:
 *                 type: string
 *                 description: Bairro do aluno
 *               numero:
 *                 type: string
 *                 description: Número do endereço do aluno
 *               cidade:
 *                 type: string
 *                 description: Cidade do aluno
 *               estado:
 *                 type: string
 *                 description: Estado do aluno
 *               telefone:
 *                 type: string
 *                 description: Número de telefone do aluno
 *               celular:
 *                 type: string
 *                 description: Número de celular do aluno
 *               raca:
 *                 type: string
 *                 description: Raça do aluno
 *               genero:
 *                 type: string
 *                 description: Gênero do aluno
 *               data_nasc:
 *                 type: string
 *                 format: date-time
 *                 description: Data de nascimento do aluno (no formato ISO 8601)
 *               responsavel:
 *                 type: string
 *                 description: Nome do responsável pelo aluno
 *     responses:
 *       '201':
 *         description: Aluno criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID do aluno criado
 *       '400':
 *         description: Requisição inválida
 *       '409':
 *         description: Aluno já cadastrado com este CPF
 *       '500':
 *         description: Erro interno do servidor
 */


router.post("/alunos", AlunoController.create); // Rota para criar um novo aluno

/**
 * @swagger
 * /alunos/turmas:
 *   post:
 *     summary: Adiciona um aluno a uma turma
 *     description: Adiciona um aluno a uma turma com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_aluno:
 *                 type: integer
 *                 description: ID do aluno
 *               id_turma:
 *                 type: integer
 *                 description: ID da turma
 *     responses:
 *       '200':
 *         description: Aluno adicionado à turma com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '409':
 *         description: Aluno já está inscrito nesta turma
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/alunos/turmas", AlunoController.addToTurma); // Rota para adicionar um aluno a uma turma

/**
 * @swagger
 * /alunos/ongs:
 *   post:
 *     summary: Adiciona um aluno a uma ong
 *     description: Adiciona um aluno a uma ong com os detalhes fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id_aluno:
 *                 type: integer
 *                 description: ID do aluno
 *               id_ong:
 *                 type: integer
 *                 description: ID da turma
 *     responses:
 *       '200':
 *         description: Aluno adicionado à ong com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/alunos/ongs", AlunoController.addToOng); // Rota para adicionar um aluno a uma ong

/**
 * @swagger
 * /alunos/{idAluno}/turmas/{idTurma}:
 *   delete:
 *     summary: Remove um aluno de uma turma
 *     description: Remove um aluno com o ID especificado da turma com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: idAluno
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluno
 *       - in: path
 *         name: idTurma
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da turma
 *     responses:
 *       '204':
 *         description: Aluno removido da turma com sucesso
 *       '404':
 *         description: Aluno ou turma não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */


router.delete("/alunos/:idAluno/turmas/:idTurma", AlunoController.removeFromTurma); // Rota para remover um aluno de uma turma
router.put("/alunos/:id", AlunoController.updateAluno); // Rota para adicionar um aluno a uma turma

module.exports = router;
