import React from "react";
import { Row, Menu, Button } from "antd";
import { Container } from "./Header.styled";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <Row>
      <Container>
        <Menu style={{ paddingTop: 15}}>
          <Menu.Item>
            <a href="/">
              <img src={logo} className="logo-header" alt="Logo da ONGEstá" />
            </a>
          </Menu.Item>
          <Menu.Item style={{ marginRight: 40}}>
            <a href="/">Guia Primeiro Pet</a>
          </Menu.Item>
          <Menu.Item style={{ marginRight: 40}}>
            <a href="/">Resgate de Animais</a>
          </Menu.Item>
          <Menu.Item>
            <Button>Login</Button>
          </Menu.Item>
        </Menu>
      </Container>
    </Row>
  );
};
