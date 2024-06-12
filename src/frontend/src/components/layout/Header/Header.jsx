import React, { useEffect, useState, useRef } from 'react';
import { StyledHeader, StyledAvatar, StyledMenu, StyledImage } from './styles';
import logoImage from '../../../assets/logo-gf.png';
import { UserOutlined } from '@ant-design/icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { useAuth } from '../../../context/AuthContext';
import { UserInfoPopUp } from '../../LoginPopUp/LoginPopUp';

export const Header = () => {
  const location = useLocation();
  const { idCargo } = useAuth();  
  const navigate = useNavigate();

  useEffect(() => {
    if (!idCargo) {
      navigate('/');
    }
  }, [idCargo, navigate]);

  const menus = {
    1: [
      { name: 'Turmas', path: '/turmas' },
      { name: 'Próximas Aulas', path: '/proximas-aulas' },
    ],
    2: [
      { name: 'Dados', path: '/dados' },
      { name: 'Oficinas', path: '/oficinas' },
      { name: 'Cadastrados', path: '/cadastrados' },
    ],
    3: [
      { name: 'Ongs', path: '/ongs' },
    ],
  };

  const menuItems = menus[idCargo] || [];

  const handleLogoClick = () => {
    if (idCargo === 1) {
      navigate('/turmas');
    }
    if (idCargo === 2) {
      navigate('/dados')
    }
    if (idCargo === 3) {
      navigate('/ongs');
    }
  };

  const [showUserInfoPopUp, setShowUserInfoPopUp] = useState(false); // Estado para controlar a exibição do popup

  const popoverRef = useRef();

  const handleAvatarClick = () => {
    setShowUserInfoPopUp(!showUserInfoPopUp); // Toggle para abrir/fechar o Popover
  };

  const handlePopoverCancel = () => {
    setShowUserInfoPopUp(false); // Fecha o Popover
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setShowUserInfoPopUp(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
  }, []);


  return (
    <>
      <StyledHeader>
        <StyledImage src={logoImage} alt="Logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        <StyledMenu mode="horizontal" selectedKeys={[location.pathname]}>
          {menuItems.map((item) => (
            <Menu.Item key={item.path}>
              <Link to={item.path}>{item.name}</Link>
            </Menu.Item>
          ))}
        </StyledMenu>
        <StyledAvatar size="medium" icon={<UserOutlined />} onClick={handleAvatarClick} style={{ cursor: 'pointer' }} />
        {showUserInfoPopUp && <UserInfoPopUp visible={showUserInfoPopUp} onCancel={handlePopoverCancel} ref={popoverRef} />}
      </StyledHeader>
    </>
  );
};
