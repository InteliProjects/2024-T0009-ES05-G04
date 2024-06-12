import { useLocation } from 'react-router-dom';
import { TabelaOficinas } from '../../../components/TabelaOficinas/TabelaOficinas';
import { Header } from '../../../components/layout/Header/Header';
import { OficinasGestorContainer } from './styles';
import { Cabecalho } from '../../../styles/GlobalStyle';

export const OficinasGestor = () => {
  const { state } = useLocation();
  const { idOng, nomeOng } = state;
  return (
    <OficinasGestorContainer>
      <Header />
      <Cabecalho>
        <h1>{nomeOng} - Oficinas </h1>
      </Cabecalho>
      <TabelaOficinas idOng={idOng} />
    </OficinasGestorContainer>
  );
};
