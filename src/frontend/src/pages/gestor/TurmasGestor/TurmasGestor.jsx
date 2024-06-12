import { useLocation } from 'react-router-dom';
import { TabelaTurmas } from '../../../components/TabelaTurmas/TabelaTurmas';
import { Header } from '../../../components/layout/Header/Header';
import { TurmasGestorContainer } from './styles';

export const TurmasGestor = () => {
    const { state } = useLocation();
    const { idOng, idOficina, nomeOficina } = state
    
  return (
    <TurmasGestorContainer>
      <Header />
      <h1>{nomeOficina} - Turmas </h1>
      <TabelaTurmas idOng={idOng} idOficina={idOficina} nomeOficina={nomeOficina}/>
    </TurmasGestorContainer>
  );
};
