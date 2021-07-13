import { Row, Col } from "antd";
import React from "react";
import { Container } from "./HomePage.styled";

export const HomePage = () => {
  return (
      <Row>
          <Col span={24}>
   <Container>
       <div className="bg-image">
           <h1>Te damos boas-vindas</h1>
           <h2>A Ong Está promove o encontro de animais abandonados com protetores e criadores apaixonados e bem intencionados.</h2>
       </div>
   </Container>
   </Col>
   </Row>
  )
}