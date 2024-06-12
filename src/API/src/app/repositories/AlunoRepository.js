const pool = require('../../../database/db');

class AlunoRepository {
  // Método para buscar todos os alunos
  async findByTurma(idTurma) {
    // Query SQL para encontrar os alunos em uma turma específica
    const query = `
      SELECT alunos.nome, alunos.id 
      FROM alunos
      JOIN turmas_alunos ON alunos.id = turmas_alunos.id_aluno
      WHERE turmas_alunos.id_turma = $1;
    `;
    const values = [idTurma];

    try {
      // Executar a consulta usando o pool de conexões
      const { rows } = await pool.query(query, values);

      // Verificar se há algum aluno retornado
      if (rows.length > 0) {
        return rows;
      } else {
        throw new Error('Alunos não encontrados para a turma informada');
      }
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  // findByOng retorna os alunos de uma ong
  async findByOng(idOng) {
    // Query SQL para encontrar os alunos em uma ong específica
    const query = `
      SELECT alunos.nome, alunos.email, alunos.id 
      FROM alunos
      JOIN ongs_alunos ON alunos.id = ongs_alunos.id_aluno
      WHERE ongs_alunos.id_ong = $1;
    `;
    const values = [idOng];

    try {
      // Executar a consulta usando o pool de conexões
      const { rows } = await pool.query(query, values);

      // Verificar se há algum aluno retornado
      if (rows.length > 0) {
        return rows;
      } else {
        throw new Error('Alunos não encontrados para a ong informada');
      }
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  async findById(idAluno) {
    const query = `
      SELECT *
      FROM alunos 
      WHERE alunos.id = $1;
    `;
    const values = [idAluno];

    try {
      const { rows } = await pool.query(query, values);
      if (rows.length > 0) {
        return rows[0]; // Retorna apenas o primeiro aluno encontrado
      } else {
        throw new Error('Aluno não encontrado');
      }
    } catch (error) {
      throw error;
    }
  }

  // Método para encontrar alunos que não estão inscritos em uma turma específica
  async findByNotInTurma(idOng, idTurma) {
    // Query SQL para encontrar os alunos que não estão em uma turma específica
    const query = `
    SELECT alunos.id, alunos.nome
    FROM alunos
    JOIN ongs_alunos ON alunos.id = ongs_alunos.id_aluno
    WHERE ongs_alunos.id_ong = $1
    AND NOT EXISTS (
        SELECT 1
        FROM turmas_alunos
        WHERE turmas_alunos.id_aluno = alunos.id
        AND turmas_alunos.id_turma = $2
    );
    `;
    const values = [idOng, idTurma];

    try {
      // Executar a consulta usando o pool de conexões
      const { rows } = await pool.query(query, values);
      return rows;
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  async create(data) {
    // Preparando os valores baseados no objeto 'data' recebido
    const {
      nome,
      email,
      cpf,
      rg,
      estado_civil,
      endereco,
      bairro,
      numero,
      cidade,
      estado,
      telefone,
      celular,
      raca,
      genero,
      data_nasc,
      responsavel,
    } = data;

    // Verificar se o CPF já está cadastrado
    const cpfQuery = 'SELECT id FROM alunos WHERE cpf = $1';
    const cpfResult = await pool.query(cpfQuery, [cpf]);

    if (cpfResult.rows.length > 0) {
      throw new Error('Aluno já cadastrado com este CPF.');
    }

    // Construindo a query SQL para inserir um novo aluno
    const query = `
    INSERT INTO alunos (nome, email, cpf, rg, estado_civil, endereco, bairro, numero, cidade, estado, telefone, celular, raca, genero, data_nasc, responsavel)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
    RETURNING id
  `;

    const values = [
      nome,
      email,
      cpf,
      rg,
      estado_civil,
      endereco,
      bairro,
      numero,
      cidade,
      estado,
      telefone,
      celular,
      raca,
      genero,
      data_nasc,
      responsavel,
    ];

    try {
      // Executar a consulta usando o pool de conexões
      const { rows } = await pool.query(query, values);
      // Verificar se o aluno foi inserido com sucesso e retorná-lo
      if (rows.length > 0) {
        return rows[0]; // Retorna o primeiro aluno inserido como confirmação
      } else {
        throw new Error('Falha ao inserir o aluno.');
      }
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  // addToTurma adiciona um aluno a uma turma
  async addToTurma(idAluno, idTurmaToAdd) {
    // Consulta para verificar o número total de vagas e o número de alunos inscritos
    const vagasQuery = `
        SELECT t.vagas - COUNT(ta.id_aluno) AS vagas_disponiveis
        FROM turmas t
        LEFT JOIN turmas_alunos ta ON t.id = ta.id_turma
        WHERE t.id = $1
        GROUP BY t.vagas;
    `;
    const resultVagas = await pool.query(vagasQuery, [idTurmaToAdd]);
    const vagasDisponiveis = resultVagas.rows[0].vagas_disponiveis;

    // Verificar se há vagas disponíveis na turma
    if (vagasDisponiveis <= 0) {
      throw new Error('TurmaCheia');
    }

    const query = `
        INSERT INTO turmas_alunos (id_aluno, id_turma)
        VALUES ($1, $2)
        ON CONFLICT DO NOTHING;
    `;
    const values = [idAluno, idTurmaToAdd]; 
    const result = await pool.query(query, values);

    // Verificar se o aluno foi adicionado com sucesso à turma
    if (result.rowCount > 0) {
      return {
        success: true,
        message: 'Aluno adicionado à turma com sucesso.',
      };
    } else {
      throw new Error('AlunoJaInscrito');
    }
  }

  // addToTurma adiciona um aluno a uma ong
  async addToOng(idAluno, idOngToAdd) {
    // Query SQL para adicionar um aluno a uma ong
    const query = `
    INSERT INTO ongs_alunos (id_aluno, id_ong)
    VALUES ($1, $2)
    ON CONFLICT DO NOTHING;
  `;
    const values = [idAluno, idOngToAdd];

    try {
      // Executar a consulta usando o pool de conexões
      const result = await pool.query(query, values);

      // Verificar se o aluno foi adicionado com sucesso à ong
      if (result.rowCount > 0) {
        return {
          success: true,
          message: 'Aluno adicionado a ong com sucesso.',
        };
      } else {
        // Pode ser que o aluno já esteja inscrito na ong, caso rowCount seja 0
        return {
          success: false,
          message:
            'Aluno já está inscrito nesta ong ou não foi possível adicionar.',
        };
      }
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  // removeFromTurma remove o aluno de uma turma
  async removeFromTurma(idAluno, idTurmaToRemove) {
    // Query SQL para remover um aluno de uma turma específica
    const query = `
      DELETE FROM turmas_alunos
      WHERE id_aluno = $1 AND id_turma = $2;
    `;
    const values = [idAluno, idTurmaToRemove];

    try {
      // Executar a consulta usando o pool de conexões
      const result = await pool.query(query, values);

      // Verificar se o aluno foi removido com sucesso da turma
      if (result.rowCount > 0) {
        return {
          success: true,
          message: 'Aluno removido da turma com sucesso.',
        };
      } else {
        // Se rowCount for 0, o aluno especificado não estava inscrito na turma fornecida
        return { success: false, message: 'Aluno não encontrado nesta turma.' };
      }
    } catch (error) {
      throw error; // Lançar qualquer erro encontrado durante a execução da consulta
    }
  }

  async updateAluno(id, { nome, email, cpf, rg, endereco, bairro, numero, cidade, estado, telefone, celular }) {
    const query = `
    UPDATE alunos
    SET 
    nome = $2,
    email = $3,
    cpf = $4,
    rg = $5,
    endereco = $6,
    bairro = $7,
    numero = $8,
    cidade = $9,
    estado = $10,
    telefone = $11,
    celular = $12

  
    WHERE
    id = $1; 
      `;
    const values = [id, nome, email, cpf, rg, endereco, bairro, numero, cidade, estado, telefone, celular];

    try {
      const { rows } = await pool.query(query, values);

      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new AlunoRepository();
