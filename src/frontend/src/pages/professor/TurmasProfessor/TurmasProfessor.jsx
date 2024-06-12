import { Header } from "../../../components/layout/Header/Header"; // Importa o componente Header
import React from "react"; // Importa a biblioteca React
import { useQuery } from "react-query"; // Importa o hook useQuery do React Query
import { Col } from "antd"; // Importa o componente Col da antd
import { CardTurma } from "../../../components/CardTurma/CardTurma"; // Importa o componente CardTurma
import { useAuth } from "../../../context/AuthContext"; // Importa o hook useAuth do contexto de autenticação
import { fetchTurmasByProfessor } from "../../../services/turmasService"; // Importa a função fetchTurmas do serviço turmasService
import { TurmasProfessorContainer, StyledRow } from "./styles"; // Importa os estilos do contêiner e da linha

// Componente funcional Turmas
export const TurmasProfessor = () => {

  // Obtém o idUser do contexto de autenticação
  const { idUser } = useAuth();

  // Busca as turmas do usuário logado usando o hook useQuery
  const { data: turmas } = useQuery("turmas", () => fetchTurmasByProfessor(idUser));

  // Retorna a renderização do componente
  return (
    <TurmasProfessorContainer>
      <Header />
      <StyledRow gutter={[16, 16]}>
        {turmas &&
          turmas.map((turma, index) => (
            <Col key={turma.id} span={8}>
              <CardTurma turma={turma} index={index} />
            </Col>
          ))}
      </StyledRow>
    </TurmasProfessorContainer>
  );
};