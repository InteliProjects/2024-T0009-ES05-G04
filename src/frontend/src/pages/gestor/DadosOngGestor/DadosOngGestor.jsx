import { useLocation } from 'react-router-dom';
import { DadosOng } from '../../../components/DadosOng/DadosOng';

export const DadosOngGestor = () => {
  const { state } = useLocation();
  const { idOng } = state;

  return <DadosOng idOng={idOng}/>;
};
