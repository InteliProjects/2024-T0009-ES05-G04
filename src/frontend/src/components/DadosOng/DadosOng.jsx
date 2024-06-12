import { CardDado } from '../../components/CardDado/CardDado';
import { GraficoColuna } from '../../components/GraficoColuna/GraficoColuna';
import { GraficoColunaDupla } from '../../components/GraficoColunaDupla/GraficoColunaDupla';
import { GraficoDonuts } from '../../components/GraficoDonuts/GraficoDonuts';
import { Header } from '../../components/layout/Header/Header';
import { useQuery } from 'react-query';
import {
  fetchDadosGeraisOng,
  fetchDadosMensaisOng,
} from '../../services/ongsService';
import {
  DadosOngContainer,
  CardsGeralContainer,
  GraficoGeralContainer,
  CardsMensaisContainer,
  GraficosMensaisContainer,
  SecaoGeral,
  SecaoMensal,
  SecaoTitulo,
} from './styles';

export const DadosOng = ({idOng}) => {

  const { data: dadosGerais } = useQuery(['dadosGerais', idOng], () =>
    fetchDadosGeraisOng(idOng)
  );

  const { data: dadosMensais } = useQuery(['dadosMensais', idOng], () =>
    fetchDadosMensaisOng(idOng)
  );

  const formatarFrequencia = (dados) => {
    return dados.map((categoria) => ({
      ...categoria,
      frequencia: (parseFloat(categoria.frequencia) * 100).toFixed(0),
    }));
  };

  const cardDados = [
    { titulo: 'Alunos cadastrados na ONG', dado: dadosGerais?.alunosOng },
    { titulo: 'Alunos inscritos em turmas', dado: dadosGerais?.alunosTurmas },
    { titulo: 'Oficinas', dado: dadosGerais?.oficinas },
    { titulo: 'Turmas', dado: dadosGerais?.turmas },
  ];
  const cardDadosMensais = [
    { titulo: 'Atendimentos no mês', dado: dadosMensais?.atendimentosMensal },
    { titulo: 'Atendidos no mês', dado: dadosMensais?.atendidosMensal },
  ];

  return (
    <>
      <Header />
      {dadosGerais && dadosMensais && (
        <DadosOngContainer>
          <SecaoTitulo>Dados Gerais</SecaoTitulo>
          <SecaoGeral>
            <CardsGeralContainer>
              {cardDados.map((card, index) => (
                <CardDado
                  key={index}
                  titulo={card.titulo}
                  dado={card.dado}
                  index={index}
                />
              ))}
            </CardsGeralContainer>
            <GraficoGeralContainer>
              <GraficoColunaDupla
                dadosMatriculados={dadosGerais.alunosMatriculados}
                dadosVagas={dadosGerais.vagasTurmas}
              />
            </GraficoGeralContainer>
          </SecaoGeral>
          <SecaoTitulo>Dados Mensais - {dadosMensais.mesAno}</SecaoTitulo>
          <SecaoMensal>
            <CardsMensaisContainer>
              {cardDadosMensais.map((card, index) => (
                <CardDado
                  key={`dados-mensais-${index}`}
                  titulo={card.titulo}
                  dado={card.dado}
                  index={index + 5}
                />
              ))}
            </CardsMensaisContainer>
            <GraficosMensaisContainer>
              <GraficoColuna
                data={formatarFrequencia(dadosMensais.frequenciaPorCategoria)}
              />
              <GraficoDonuts
                data={dadosMensais.cargaHorariaPorCategoria}
                totalHoras={dadosMensais.totalHoras}
              />
            </GraficosMensaisContainer>
          </SecaoMensal>
        </DadosOngContainer>
      )}
    </>
  );
};
