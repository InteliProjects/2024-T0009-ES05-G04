import React, { useState } from "react";
import { Header } from "../../../components/layout/Header/Header";
import { StyledTable } from "./style";
import { fetchProximasAulasProfessor } from "../../../services/aulasService";
import { useQuery } from "react-query";
import { useAuth } from "../../../context/AuthContext";
import { format } from "date-fns";
import { Space, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { PresencaPopUp } from "../../../components/PresencaPopUp/PresencaPopUp";

export const ProximasAulasProfessor = () => {
  const { idUser } = useAuth();
  const [isPresencaModalVisible, setIsPresencaModalVisible] = useState(false);
  const [aulaSelecionada, setAulaSelecionada] = useState(null);

  const { data: proximasAulas, refetch } = useQuery(
    ["proximas-aulas", idUser],
    () => fetchProximasAulasProfessor(idUser)
  );

  const handleOpenPresenca = (aula) => {
    setAulaSelecionada(aula);
    setIsPresencaModalVisible(true);
  };

  const handleClosePresenca = () => {
    setIsPresencaModalVisible(false);
    setAulaSelecionada(null);
  };

  // Definição de colunas fora do loop
  const colunas = [
    {
      title: "Oficina",
      dataIndex: "nome_oficina",
    },
    {
      title: "Turma",
      dataIndex: "nome_turma",
    },
    {
      title: "Data/Hora",
      dataIndex: "data",
      render: (data) => format(new Date(data), "dd/MM/yyyy HH:mm"), // Formata a data e hora
    },

    {
      title: "Lista de Presença",
      key: "listaPresenca",
      render: (text, aula) => (
        <Space size="middle">
          <Button
            shape="circle"
            icon={<CheckCircleOutlined />}
            onClick={() => handleOpenPresenca(aula)}
          />
        </Space>
      ),
    },
  ];

  return (
    <>
      <Header />
      <h1 style={{ marginLeft: "20px" }}>Próximas Aulas</h1>
      {proximasAulas && (
        <StyledTable dataSource={proximasAulas} columns={colunas} />
      )}
      {aulaSelecionada && (
        <PresencaPopUp
          aula={aulaSelecionada}
          open={isPresencaModalVisible}
          onOk={() => {
            handleClosePresenca();
            refetch();
          }}
          onCancel={handleClosePresenca}
        />
      )}
    </>
  );
};
