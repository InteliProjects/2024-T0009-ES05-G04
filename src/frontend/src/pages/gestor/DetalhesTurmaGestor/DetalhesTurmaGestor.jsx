import { useLocation } from 'react-router-dom';
import { DetalhesTurma } from '../../../components/DetalhesTurma/DetalhesTurma';
import { Header } from '../../../components/layout/Header/Header';
import { DetalhesTurmaGestorContainer } from './styles';

export const DetalhesTurmaGestor = () => {
    const { state } = useLocation()
    const { idOng, idTurma, nomeOficina } = state
    
  return (
    <DetalhesTurmaGestorContainer>
      <Header />
      <DetalhesTurma idOng={idOng} idTurma={idTurma} nomeOficina={nomeOficina}/>
    </DetalhesTurmaGestorContainer>
  );
};
