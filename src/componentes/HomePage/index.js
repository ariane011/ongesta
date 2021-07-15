import React from "react";
import { Row, Col } from "antd";
import { Container } from "./HomePage.styled";
import { BuscaOngs } from "../Form/BuscaOngs";

export const HomePage = () => {
  return (
    <Row>
      <Col span={24}>
        <Container>
          <div className="bg-image">
            <h1>Te damos boas-vindas!</h1>
            <h2>
              A OngEstá promove o encontro de animais abandonados com protetores
              e criadores apaixonados e bem intencionados.
            </h2>
          </div>
          <div style={{ marginTop: 32 }}>
            <p>
              Não recolhemos animais e não mantemos abrigo, mas promovemos boas
              práticas de conscientização contra maus tratos aos animais e
              divulgamos ONG´s responsáveis de todo Brasil.
            </p>

            <h3>Para continuarmos, precisamos saber onde procurar.</h3>
            <BuscaOngs />
          </div>
        </Container>
      </Col>
    </Row>
  );
};
