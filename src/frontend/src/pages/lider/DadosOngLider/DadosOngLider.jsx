import { DadosOng } from '../../../components/DadosOng/DadosOng';
import { useAuth } from '../../../context/AuthContext';

export const DadosOngLider = () => {
  const { idOng } = useAuth();
  return <DadosOng idOng={idOng} />;
};
