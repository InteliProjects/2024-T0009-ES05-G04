import React from 'react';
import { Popover, Button } from 'antd';
import { useNavigate, useParams,  } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useQuery } from 'react-query';
import { fetchUserById } from '../../services/usersService';
import { fetchDetalhesOng } from '../../services/ongsService';

export const UserInfoPopUp = ({ visible, onCancel }) => {


    const { idCargo, idOng, idUser, login} = useAuth();


    const { data: users } = useQuery(['users', idUser], () =>
        fetchUserById(idUser),
    );

    const { data: ongs } = useQuery(['ongs', idOng], () =>
        fetchDetalhesOng(idOng),
    );
    
    const navigate = useNavigate();
  
    const handleLogout = () => {
    // Limpar as informações de autenticação
        login(null, null, null);
    
    // Navegar para a página de login
        navigate('/');
    };

    const cargoNomes = {
        1: 'Professor',
        2: 'Líder',
        3: 'Gestor',
    };

    return (
        <Popover
        title={users?.nome}
        content={
        <div>
            <p>Tipo de Usuário: {cargoNomes[idCargo]}</p>
            <p>{ongs?.nome}</p>
            <Button key="logout" onClick={handleLogout}>Logout</Button>
        </div>}
        placement='bottomLeft'
        visible={visible}
        onCancel={onCancel}
        
        >
        </Popover>
    );
};
