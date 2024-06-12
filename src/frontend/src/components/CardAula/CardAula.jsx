import React, { useState } from 'react';
import { StyledCard } from './styles';
import { PresencaPopUp } from '../PresencaPopUp/PresencaPopUp';
import { format } from 'date-fns';

export const CardAula = ({ aula, refetchAulas }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dataAulaFormatada = format(new Date(aula.data), 'dd/MM/yyyy HH:mm');

  const showModal = () => {
    setIsModalVisible(true);
  };

  return (
    <div>
      <StyledCard aula={aula} onClick={showModal}>
          <h2>Aula</h2>
          <p>{dataAulaFormatada}</p>
      </StyledCard>
      <PresencaPopUp
        open={isModalVisible}
        onOk={() => {
          setIsModalVisible(false);
          refetchAulas();
        }}
        onCancel={() => setIsModalVisible(false)}
        aula={aula}
      />
    </div>
  );
};
