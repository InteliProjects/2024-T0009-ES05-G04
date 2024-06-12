// importa classe AlunoRepository
const AlunoRepository = require('../repositories/AlunoRepository');

class AlunoController {
  // findByTurma retorna alunos inscritos de uma turma
  async findByTurma(req, res) {
    const id = req.params.id;

    try {
      const alunos = await AlunoRepository.findByTurma(id);
      res.send(alunos);
    } catch (error) {
      console.log('Erro ao consultar alunos de uma turma: ', error);
      res.status(500).send('Erro ao consultar alunos de uma turma');
    }
  }

  // findByTurma retorna alunos inscritos de uma ong
  async findByOng(req, res) {
    const id = req.params.id;

    try {
      const alunos = await AlunoRepository.findByOng(Number(id));
      res.send(alunos);
    } catch (error) {
      console.log('Erro ao consultar alunos de uma ong: ', error);
      res.status(500).send('Erro ao consultar alunos de uma ong');
    }
  }

  // findByNotInTurma para buscar alunos não inscritos em uma turma específica
  async findByNotInTurma(req, res) {
    const { idOng, idTurma } = req.params;

    try {
      const alunosNaoInscritos = await AlunoRepository.findByNotInTurma(
        Number(idOng),
        Number(idTurma)
      );
      res.send(alunosNaoInscritos);
    } catch (error) {
      console.log(
        'Erro ao consultar alunos não inscritos em uma turma: ',
        error
      );
      res.status(400).send(error);
    }
  }

  async findById(req, res) {
    const idAluno = req.params.id;

    try {
      const aluno = await AlunoRepository.findById(idAluno);
      res.send(aluno);
    } catch (error) {
      console.log('Erro ao buscar aluno: ', error);
      res.status(500).send('Erro ao buscar aluno');
    }
  }

  // create cria um aluno com os dados passados
  async create(req, res) {
    const data = req.body;
    try {
      const novo_aluno = await AlunoRepository.create(data);
      res.status(201).send(novo_aluno);
    } catch (error) {
      console.log('Erro ao criar aluno: ', error);
      if (error.message === 'Aluno já cadastrado com este CPF.') {
        res.status(409).json({ message: error.message }); // CPF já cadastrado
      } else {
        res.status(500).json({ message: 'Erro interno ao criar aluno.' }); // Erro interno
      }
    }
  }

  // Adiciona um aluno a uma turma
  async addToTurma(req, res) {
    const { id_aluno, id_turma } = req.body;

    try {
      const resultado = await AlunoRepository.addToTurma(id_aluno, id_turma);
      // Retorna a mensagem de sucesso
      res.status(200).json({ message: resultado.message });
    } catch (error) {
      console.error('Erro ao adicionar aluno à turma: ', error);
      // Tratando erros específicos
      if (error.message === 'TurmaCheia') {
        res
          .status(409)
          .json({ message: 'Não há vagas disponíveis nesta turma.' });
      } else if (error.message === 'AlunoJaInscrito') {
        res
          .status(409)
          .json({ message: 'Aluno já está inscrito nesta turma.' });
      } else {
        // Tratando outros tipos de erro como erro interno do servidor
        res.status(500).json({ message: 'Erro interno no servidor.' });
      }
    }
  }

  // Adiciona um aluno a uma ong
  async addToOng(req, res) {
    const { id_aluno, id_ong } = req.body;

    try {
      const alunoAtualizado = await AlunoRepository.addToOng(id_aluno, id_ong);
      res.status(200).json(alunoAtualizado);
    } catch (error) {
      console.log('Erro ao adicionar aluno a ong: ', error);
      res.status(400).json({ erro: error.toString() });
    }
  }

  // Remove um aluno de uma turma
  async removeFromTurma(req, res) {
    const { idAluno, idTurma } = req.params;

    try {
      const alunoAtualizado = await AlunoRepository.removeFromTurma(
        Number(idAluno),
        Number(idTurma)
      );
      res.status(200).json(alunoAtualizado);
    } catch (error) {
      console.log('Erro ao remover aluno da turma: ', error);
      res.status(400).json({ erro: error.toString() });
    }
  }

  async updateAluno(req, res) {
    const { id } = req.params;
    const {
      nome,
      email,
      cpf,
      rg, 
      endereco,
      bairro,
      numero,
      cidade,
      estado,
      telefone,
      celular } = req.body;

    try {
      const alunoAtualizado = await AlunoRepository.updateAluno(
        Number(id),
        {
          nome,
          email,
          cpf,
          rg,
          endereco,
          bairro,
          numero,
          cidade,
          estado,
          telefone,
          celular
        }
      );
      res.json(alunoAtualizado);
    } catch (error) {
      console.log("Erro ao atualizar o aluno com id", id, error);
      res.status(400).json({ erro: error.toString() });
    }
  }
}

module.exports = new AlunoController();
