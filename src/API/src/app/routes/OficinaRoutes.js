const { Router } = require("express");

// Importa o controlador de Oficina
const OficinaController = require("../controllers/OficinaController");

const router = Router();

/**
 * @swagger
 * /oficinas/ongs/{id}:
 *   get:
 *     summary: Retorna as oficinas associadas a uma ONG específica
 *     description: Retorna as oficinas associadas a uma ONG com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da ONG
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
 *                     description: ID da oficina
 *                   nome:
 *                     type: string
 *                     description: Nome da oficina
 *                   categoria:
 *                     type: string
 *                     description: Categoria da oficina
 *       '404':
 *         description: ONG não encontrada ou não possui oficinas associadas
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/oficinas/ongs/:id", OficinaController.getByOngId); // Rota para buscar oficinas por ID da ONG

/**
 * @swagger
 * /oficinas/{id}:
 *   get:
 *     summary: Retorna os detalhes de uma oficina
 *     description: Retorna os detalhes de uma oficina com o ID especificado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da oficina
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
 *                   description: ID da oficina
 *                 nome:
 *                   type: string
 *                   description: Nome da oficina
 *                 categoria:
 *                   type: string
 *                   description: Categoria da oficina
 *                 subcategoria:
 *                   type: string
 *                   description: Subcategoria da oficina
 *                 local:
 *                   type: string
 *                   description: Local da oficina
 *                 observacoes:
 *                   type: string
 *                   nullable: true
 *                   description: Observações sobre a oficina (pode ser nulo)
 *                 id_ong:
 *                   type: integer
 *                   description: ID da ONG à qual a oficina está associada
 *       '404':
 *         description: Oficina não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.get("/oficinas/:id", OficinaController.getByOficinaId); // Rota para buscar oficina por ID

/**
 * @swagger
 * /oficinas:
 *   post:
 *     summary: Cria uma nova oficina
 *     description: Cria uma nova oficina com os dados fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da oficina
 *               categoria:
 *                 type: string
 *                 description: Categoria da oficina
 *               subcategoria:
 *                 type: string
 *                 description: Subcategoria da oficina
 *               local:
 *                 type: string
 *                 description: Local da oficina
 *               observacoes:
 *                 type: string
 *                 nullable: true
 *                 description: Observações sobre a oficina (opcional)
 *               id_ong:
 *                 type: integer
 *                 description: ID da ONG à qual a oficina está associada
 *     responses:
 *       '201':
 *         description: Oficina criada com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '500':
 *         description: Erro interno do servidor
 */

router.post("/oficinas", OficinaController.createOficina); // Rota para criar uma nova oficina

/**
 * @swagger
 * /oficinas:
 *   put:
 *     summary: Atualiza uma oficina existente
 *     description: Atualiza os detalhes de uma oficina existente com os dados fornecidos.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da oficina
 *               categoria:
 *                 type: string
 *                 description: Categoria da oficina
 *               subcategoria:
 *                 type: string
 *                 description: Subcategoria da oficina
 *               local:
 *                 type: string
 *                 description: Local da oficina
 *               observacoes:
 *                 type: string
 *                 nullable: true
 *                 description: Observações sobre a oficina (opcional)
 *     responses:
 *       '200':
 *         description: Oficina atualizada com sucesso
 *       '400':
 *         description: Requisição inválida
 *       '404':
 *         description: Oficina não encontrada
 *       '500':
 *         description: Erro interno do servidor
 */

router.put("/oficinas/:id", OficinaController.updateOficina); // Rota para atualizar oficina

module.exports = router;
