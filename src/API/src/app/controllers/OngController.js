const OngRepository = require('../repositories/OngRepository');


class OngController {
    
    async getAll(req, res){
        try {
            const ongs = await OngRepository.findAll();
            res.json(ongs);
        } catch (error) {
            console.log('Erro ao buscar ongs', error);
            res.status(500).send('Erro ao buscar ongs');
        }
    };


    async getOng(req, res){
        const { id } = req.params;

        try {
            const ong = await OngRepository.findById(Number(id)); // Retorna a ong com o id passado
            res.json(ong);
        } catch(error){
            console.log('Erro ao buscar ong', error);
            res.status(500).send('Erro ao buscar ong');
        }
    };

    async getInfos(req, res){
        const { id } = req.params;

        try {
            const alunosOng = await OngRepository.countAlunosByOng(Number(id)); // Retorna a quantidade de alunos que a ONG tem
            const alunosTurmas = await OngRepository.countAlunosTurmasByOng(Number(id)); // Retorna a quantidade de alunos que a ONG tem em turmas 
            const totalOficinas = await OngRepository.countOficinasByOng(Number(id)); // Retorna a quantidade de oficinas que a ONG tem
            const totalTurmas = await OngRepository.countTurmasByOng(Number(id)); // Retorna a quantidade de turmas que a ONG tem
            const vagasTurmas = await OngRepository.countVagasTurmasByOng(Number(id)); // Retorna a quantidade de vagas que a ONG tem em cada categoria de turma
            const alunosMatriculados = await OngRepository.countAlunosMatriculados(Number(id)); // Retorna a quantidade de alunos matriculados em turmas em cada categoria de turma
             
            const infosGeraisOngs = {
                "alunosOng": Number(alunosOng["count"]),
                "alunosTurmas":  Number(alunosTurmas["count"]),
                "oficinas": Number(totalOficinas["count"]),
                "turmas": Number(totalTurmas["count"]),
                "vagasTurmas": vagasTurmas.map( categoria => { return { "sum": Number(categoria["sum"]), "categoria": categoria["categoria"]} }),
                "alunosMatriculados": alunosMatriculados.map( categoria => { return { "count": Number(categoria["count"]), "categoria": categoria["categoria"]}}),
            }

            res.json(infosGeraisOngs);
        } catch(error){
            console.log('Erro ao buscar ong', error);
            res.status(500).send('Erro ao buscar ong');
        }
    };

    async getInfosMensais(req, res){
        const { id } = req.params;

        try {
            const dataAtual = new Date();
            const meses = {
                0: "Janeiro",
                1: "Fevereiro",
                2: "Março",
                3: "Abril",
                4: "Maio",
                5: "Junho",
                6: "Julho",
                7: "Agosto",
                8: "Setembro",
                9: "Outubro",
                10: "Novembro",
                11: "Dezembro"
            }
            
            const numeroPresencas = await OngRepository.countPresencasOficinas(Number(id)); // Retorna a quantidade de presenças em oficinas no mês
            const numeroAtendidos = await OngRepository.countAtendidos(Number(id)); // Retorna a quantidade de atendidos em oficinas no mês
            const frequenciaCategorias = await OngRepository.countFrequenciaCategorias(Number(id)); // Retorna a quantidade de presenças em oficinas no mês por categoria
            const horasOferecidas = await OngRepository.countHorasOferecidas(Number(id)); // Retorna a quantidade de horas oferecidas em oficinas no mês
            let totalHoras = 0;

            horasOferecidas.forEach(categoria => { totalHoras += Number(categoria["sum"]) / 60}); // Soma a quantidade de horas oferecidas em todas as categorias

            const infosMensais = {
                "mesAno": `${meses[dataAtual.getMonth() - 1]} ${dataAtual.getFullYear()}`,
                "atendimentosMensal": Number(numeroPresencas["count"]),
                "atendidosMensal": Number(numeroAtendidos["count"]),
                "frequenciaPorCategoria": frequenciaCategorias.map((categoria) => { return { "categoria": categoria["categoria"], "frequencia": Number(categoria["frequencia"])}}),
                "cargaHorariaPorCategoria": horasOferecidas.map((categoria) => { return  {"categoria": categoria["categoria"], "horas": Number(categoria["sum"]) / 60}}),
                "totalHoras": totalHoras
            }

            res.json(infosMensais);
        } catch(error){
            console.log('Erro ao buscar ong', error);
            res.status(500).send('Erro ao buscar ong');
        }
    };

    async createOng(req, res){
        const { nome, endereco, bairro, numero, cidade, estado } = req.body;
        try {
            const id = await OngRepository.create([
                nome,
                endereco,
                bairro,
                numero,
                cidade,
                estado
            ]);
            res.status(201).json(id);
        } catch (error) {
            console.log('Erro ao criar ong', error);
            res.status(500).send('Erro ao criar ong');
        }
    }

}

module.exports = new OngController();