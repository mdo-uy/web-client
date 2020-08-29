import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/logo-white.png';
import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    return (
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/"}>
                    <img className="menu-top__left-logo" src={Logo} alt="Mauricio De Oliveira"/>
                </Link>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
            </div>
            
            <div className="menu-top__right">
                <Button type="link" onClick={()=> console.log('Desconectado!')}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    );
}