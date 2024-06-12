// Importa o repositório de Aula
const ProfessorRepository = require("../repositories/ProfessorRepository");

class ProfessorController {
  async getByIdProfessor(req, res) {
    const { id } = req.params;

    try {
      const detalhesProfessor = await ProfessorRepository.findByIdProfessor(
        Number(id)
      );
      res.json(detalhesProfessor);
    } catch (error) {
      console.log("Erro ao buscar professor: ", error);
      res.status(500).json({ error: "erro interno do servidor" });
    }
  }

  async createProfessor(req, res) {
    const data = req.body;

    try {
      const novoProfessor = await ProfessorRepository.createProfessor(data);
      res.json(novoProfessor);
      res.status(200);
    } catch (error) {
      console.log("Erro ao cadastrar professor: ", error);
      res.status(500).json({ error: "erro interno do servidor" });
    }
  }

  async getByOngId(req, res) {
    const { id } = req.params;

    try {
      const professores = await ProfessorRepository.filter(Number(id));
      res.json(professores);
    } catch (error) {
      console.error("Erro ao buscar professores:", error);
      res.status(500).json({ error: "Erro ao buscar professores" });
    }
  }

  async updateProfessor(req, res) {
    const { id } = req.params;
    const { nome, email, cpf, rg } = req.body;
    
    try {
      const professorAtualizado = await ProfessorRepository.updateProfessor(
        Number(id),
        {
          nome,
          email,
          cpf,
          rg,
        }
      );
      res.json(professorAtualizado);
    } catch (error) {
      console.log("Erro ao atualizar o professor com id", id, error);
      res.status(400).json({ erro: error.toString() });
    }
  }
}

module.exports = new ProfessorController();
