import React from "react";
import { Menu, Button } from "antd";
import { Container } from "./Header.styled";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <Container>
      <Menu style={{ backgroundColor: "#4296d2", height: 100 }}>
        <a href="/">
          <img src={logo} className="logo-header" alt="Logo da ONGEstá" />
        </a>
        <Menu.Item style={{ marginRight: 40, backgroundColor: 'transparent' }}>
          <a href="/">Guia Primeiro Pet</a>
        </Menu.Item>
        <Menu.Item style={{ marginRight: 40, backgroundColor: 'transparent' }}>
          <a href="/">Resgate de Animais</a>
        </Menu.Item>
        <Menu.Item style={{ backgroundColor: 'transparent' }}>
          <Button type="primary">Login</Button>
        </Menu.Item>
      </Menu>
    </Container>
  );
};
