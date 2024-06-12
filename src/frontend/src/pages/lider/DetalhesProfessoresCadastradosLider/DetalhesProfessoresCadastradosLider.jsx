import React from 'react';
import { useLocation } from 'react-router-dom';
import { DetalhesProfessorLiderContainer } from './styles';
import { Header } from '../../../components/layout/Header/Header';
import { DetalhesProfessoresCadastradosLider } from '../../../components/DetalhesProfessoresCadastradosLider/DetalhesProfessoresCadastradosLider';

export const DetalhesProfessor = () => {
    const { state } = useLocation();
    const { idProfessor } = state;

    return (
        <DetalhesProfessorLiderContainer>
            <Header />
            <DetalhesProfessoresCadastradosLider idProfessor={idProfessor} />
        </DetalhesProfessorLiderContainer>
    );
};
