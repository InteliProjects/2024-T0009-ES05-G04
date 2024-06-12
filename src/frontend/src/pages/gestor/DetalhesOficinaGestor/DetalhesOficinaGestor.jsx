import { DetalhesOficina } from '../../../components/DetalhesOficina/DetalhesOficina';
import { Header } from '../../../components/layout/Header/Header';
import { DetalhesOficinaGestorContainer } from './styles';

export const DetalhesOficinaGestor = () => {
  return (
    <DetalhesOficinaGestorContainer>
      <Header />
      <DetalhesOficina />
    </DetalhesOficinaGestorContainer>
  );
};
