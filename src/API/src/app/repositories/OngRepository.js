const pool = require('../../../database/db');

class OngRepository {

    async findAll(){
        const query = 'SELECT id, nome FROM ongs';

        try {
            const { rows } = await pool.query(query);
            if(rows.length > 0){
                return rows;
            } else {
                throw new Error('Ongs não encontradas');
            }
        } catch (error) {
            throw error;
        }
    }

    async findById(id){
        const query = `SELECT ongs.*, users.nome AS nome_lider FROM ongs 
        INNER JOIN users ON ongs.id = users.id_ong
        WHERE ongs.id = $1`;
        const values = [id];

        try {
            const { rows } = await pool.query(query, values);
            if(rows.length > 0){
                return rows[0];
            } else {
                throw new Error('Ong não encontrada');
            }
        } catch (error) {
            throw error;
        }
    }

    async countAlunosByOng(idOng){
        const query = `SELECT COUNT(*) FROM ongs_alunos WHERE id_ong = $1`;
        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async countAlunosTurmasByOng(idOng){
        const query = `SELECT COUNT(DISTINCT turmas_alunos.id_aluno) FROM turmas_alunos 
        INNER JOIN ongs_alunos ON turmas_alunos.id_aluno = ongs_alunos.id_aluno 
        WHERE id_ong = $1`;
        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async countOficinasByOng(idOng){
        const query = `SELECT COUNT(*) FROM oficinas WHERE id_ong = $1`;
        const values = [idOng];

        try{
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async countTurmasByOng(idOng){
        const query = `SELECT COUNT(*) FROM turmas 
        INNER JOIN oficinas ON turmas.id_oficina = oficinas.id
        INNER JOIN ongs ON oficinas.id_ong = ongs.id
        WHERE ongs.id = $1;`

        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {   
            throw error;
        }
    }

    async countVagasTurmasByOng(idOng){
        const query = `SELECT SUM(turmas.vagas), oficinas.categoria FROM turmas 
        INNER JOIN oficinas ON turmas.id_oficina = oficinas.id 
        INNER JOIN ongs ON oficinas.id_ong = ongs.id
        WHERE ongs.id = $1
        GROUP BY oficinas.categoria;`

        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async countAlunosMatriculados(idOng) {
        const query = `SELECT COUNT(turmas_alunos), oficinas.categoria FROM turmas_alunos
        INNER JOIN turmas ON turmas_alunos.id_turma = turmas.id
        INNER JOIN oficinas ON turmas.id_oficina = oficinas.id 
        INNER JOIN ongs ON oficinas.id_ong = ongs.id
        WHERE ongs.id = $1
        GROUP BY oficinas.categoria;`

        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async countPresencasOficinas(idOng){
        const query = `SELECT COUNT(*) FROM presencas 
        INNER JOIN aulas ON presencas.id_aula = aulas.id
        INNER JOIN turmas ON aulas.id_turma = turmas.id
        INNER JOIN oficinas ON turmas.id_oficina = oficinas.id
        WHERE oficinas.id_ong = $1 
        AND EXTRACT(MONTH FROM aulas.data) = EXTRACT(MONTH FROM CURRENT_DATE - INTERVAL '1 month')
        AND presencas.presente = true;`

        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    } 

    async countAtendidos(idOng){
        const query = `SELECT COUNT(DISTINCT presencas.id_aluno) FROM presencas
        INNER JOIN aulas ON aulas.id = presencas.id_aula
        INNER JOIN turmas ON turmas.id = aulas.id_turma
        INNER JOIN oficinas ON oficinas.id = turmas.id_oficina
        WHERE oficinas.id_ong = $1
        AND EXTRACT(MONTH FROM aulas.data) = EXTRACT(MONTH FROM CURRENT_DATE - INTERVAL '1 month')
        AND presencas.presente = true`

    
        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error) {
            throw error;
        }
    }

    async countFrequenciaCategorias(idOng){
        const query = `SELECT o.categoria, AVG(CASE WHEN pr.presente THEN 1 ELSE 0 END) AS frequencia
        FROM presencas pr
        INNER JOIN aulas a ON pr.id_aula = a.id
        INNER JOIN turmas t ON a.id_turma = t.id
        INNER JOIN oficinas o ON t.id_oficina = o.id
        INNER JOIN ongs og ON o.id_ong = og.id
        WHERE og.id = $1
        AND EXTRACT(MONTH FROM a.data) = EXTRACT(MONTH FROM NOW()) - 1
        GROUP BY o.categoria;`

        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async countHorasOferecidas(idOng){
        const query = `SELECT oficinas.categoria, SUM(aulas.duracao) FROM aulas
        INNER JOIN turmas ON aulas.id_turma = turmas.id
        INNER JOIN oficinas ON turmas.id_oficina = oficinas.id
        WHERE oficinas.id_ong = $1 AND aulas.ocorrida
        AND EXTRACT(MONTH FROM aulas.data) = EXTRACT(MONTH FROM CURRENT_DATE - INTERVAL '1 month')
        GROUP BY oficinas.categoria;`

        const values = [idOng];

        try {
            const { rows } = await pool.query(query, values);
            return rows;
        } catch (error) {
            throw error;
        }
    }

    async create(values) {
        const query = `INSERT INTO ongs (nome, endereco, bairro, numero, cidade, estado) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;

        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (error){
            throw error;
        }
    }
}

module.exports = new OngRepository();