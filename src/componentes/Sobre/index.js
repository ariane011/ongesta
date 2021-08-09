import React from "react";
import { Row, Col, Button } from "antd";
import IconeCoracao from "../../assets/icons/coracao.svg";
import ImageDogCaixa from "../../assets/images/dog-caixa.jpg";
import { Container } from "./style.styled";

export const Sobre = () => {
  return (
    <Container>
      <Row>
        <Col xs={24} md={24} xl={24}>
          <Row>
            <Col xs={24} md={12} xl={12}>
              <div className="title-doacoes">
                <div className="icone-coracao">
                  <img src={IconeCoracao} alt="Coração" />
                </div>
                <div>
                  <h3>Doações</h3>
                </div>
              </div>
              <div>
                <p>
                  Centenas de animais são abandonados toda semana, ajude-os a
                  ter uma vida melhor. Estas doações podem ser de serviços,
                  produtos ou dinheiro. Clique e escolha o tipo de doação que
                  deseja realizar e descubra quais ONG´s ficarão felizes com sua
                  doação.
                </p>
                <div className="btn-doar">
                  <Button>Quero doar</Button>
                </div>
              </div>
            </Col>
            <Col xs={24} md={12} xl={12}>
              <div className="img-dog-caixa">
                <img src={ImageDogCaixa} alt="Cachorro dentro da caixa" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xl={12}>
              <h1>Coluna 3</h1>
            </Col>
            <Col xl={12}>
              <h1>Coluna 3</h1>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
