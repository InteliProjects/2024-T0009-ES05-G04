import React from "react";
import { HistoricoAulas } from "../../../components/HistoricoAulas/HistoricoAulas"
import { Header } from "../../../components/layout/Header/Header"
import { useLocation } from 'react-router-dom';
import { HistoricoAulasGestorContainer } from "./styles"

export const HistoricoAulasGestor = () => {
    const { state } = useLocation();
  const { idTurma, nomeTurma } = state;

    return (
        <HistoricoAulasGestorContainer>
            <Header />
            <HistoricoAulas idTurma={idTurma} nomeTurma={nomeTurma}/>
        </HistoricoAulasGestorContainer>
    )
}