import React, { createContext } from 'react';
import { GlobalStyle } from './styles/GlobalStyle.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Login } from './pages/Login/Login.jsx';
import { TurmasProfessor } from './pages/professor/TurmasProfessor/TurmasProfessor.jsx';
import { DetalhesTurmaProfessor } from './pages/professor/DetalhesTurmaProfessor/DetalhesTurmaProfessor.jsx';
import { ProximasAulasProfessor } from './pages/professor/ProximasAulasProfessor/ProximasAulasProfessor.jsx';
import { OficinasLider } from './pages/lider/OficinasLider/OficinasLider.jsx';
import { DetalhesOficinaLider } from './pages/lider/DetalhesOficinaLider/DetalhesOficinaLider.jsx';
import { TurmasLider } from './pages/lider/TurmasLider/TurmasLider.jsx';
import { DetalhesTurmaLider } from './pages/lider/DetalhesTurmaLider/DetalhesTurmaLider.jsx';
import { HistoricoAulasLider } from './pages/lider/HistoricoAulasLider/HistoricoAulasLider.jsx';
import { ProximasAulasLider } from './pages/lider/ProximasAulasLider/ProximasAulasLider.jsx';
import { CadastradosLider } from './pages/lider/CadastradosLider/CadastradosLider.jsx';
import { DetalhesAlunos } from './pages/lider/DetalhesAlunosCadastradosLider/DetalhesAlunosCadastradosLider.jsx';
import { DetalhesProfessor } from './pages/lider/DetalhesProfessoresCadastradosLider/DetalhesProfessoresCadastradosLider.jsx';
import { OngsGestor } from './pages/gestor/OngsGestor/OngsGestor.jsx';
import { DadosOngLider } from './pages/lider/DadosOngLider/DadosOngLider.jsx';
import { DetalhesOngGestor } from './pages/gestor/DetalhesOngGestor/DetalhesOngGestor.jsx';
import { OficinasGestor } from './pages/gestor/OficinasGestor/OficinasGestor.jsx';
import { DetalhesOficinaGestor } from './pages/gestor/DetalhesOficinaGestor/DetalhesOficinaGestor.jsx';
import { TurmasGestor } from './pages/gestor/TurmasGestor/TurmasGestor.jsx';
import { DetalhesTurmaGestor } from './pages/gestor/DetalhesTurmaGestor/DetalhesTurmaGestor.jsx';
import { HistoricoAulasGestor } from './pages/gestor/HistoricoAulasGestor/HistoricoAulasGestor.jsx';
import { ProximasAulasGestor } from './pages/gestor/ProximasAulasGestor/ProximasAulasGestor.jsx';
import { DadosOngGestor } from './pages/gestor/DadosOngGestor/DadosOngGestor.jsx';

// Cria um contexto para a aplicação
export const AppContext = createContext();

// Componente principal da aplicação
function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/turmas" element={<TurmasProfessor />} />
            <Route path="/turmas/:idTurma" element={<DetalhesTurmaProfessor />} />
            <Route path="/proximas-aulas" element={<ProximasAulasProfessor />} />

            <Route path="/dados" element={<DadosOngLider />} />
            <Route path="/oficinas" element={<OficinasLider />} />
            <Route path="/oficinas/:idOficina" element={<DetalhesOficinaLider />} />
            <Route path="/oficinas/:idOficina/turmas" element={<TurmasLider />} />
            <Route path="/oficinas/:idOficina/turmas/:idTurma" element={<DetalhesTurmaLider />} />
            <Route path="/oficinas/:idOficina/turmas/:idTurma/aulas/historico" element={<HistoricoAulasLider />} />
            <Route path="/oficinas/:idOficina/turmas/:idTurma/aulas/proximas" element={<ProximasAulasLider />} />
            <Route path="/cadastrados" element={<CadastradosLider />} />
            <Route path="/cadastrados/alunos/:idAluno" element={<DetalhesAlunos />} />
            <Route path="/cadastrados/professores/:idProfessor" element={<DetalhesProfessor />} />

            <Route path="/ongs" element={<OngsGestor />} />
            <Route path="/ongs/:idOng/dados" element={<DadosOngGestor />} />
            <Route path="/ongs/:idOng" element={<DetalhesOngGestor />} />
            <Route path="/ongs/:idOng/oficinas" element={<OficinasGestor />} />
            <Route path="/ongs/:idOng/oficinas/:idOficina" element={<DetalhesOficinaGestor />} />
            <Route path="/ongs/:idOng/oficinas/:idOficina/turmas" element={<TurmasGestor />} />
            <Route path="/ongs/:idOng/oficinas/:idOficina/turmas/:idTurma" element={<DetalhesTurmaGestor />} />
            <Route path="/ongs/:idOng/oficinas/:idOficina/turmas/:idTurma/aulas/historico" element={<HistoricoAulasGestor />} />
            <Route path="/ongs/:idOng/oficinas/:idOficina/turmas/:idTurma/aulas/proximas" element={<ProximasAulasGestor />} />

          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
