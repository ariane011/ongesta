import React from "react";
import { Button, Row, Select } from "antd";
import { ContainerButton } from "./style.styled";

const { Option } = Select;

function onChange(value) {
  console.log(`selected ${value}`);
}

export const BuscaOngs = () => {
  return (
    <div>
      <Row justify="center">
        <Select
          showSearch
          style={{ width: 500, marginBottom: 10 }}
          placeholder="Selecione seu estado"
          onChange={onChange}
        >
          <Option value="sp">SP</Option>
          <Option value="rj">RJ</Option>
        </Select>
      </Row>
      <Row justify="center">
        <Select
          showSearch
          style={{ width: 500, marginBottom: 10 }}
          placeholder="Selecione sua cidade"
          onChange={onChange}
        >
          <Option value="sao paulo">São Paulo</Option>
          <Option value="rio de janeiro">Rio de Janeiro</Option>
        </Select>
      </Row>
      <Row justify="center">
        <ContainerButton>
          <Button>Procurar ONG</Button>
        </ContainerButton>
      </Row>
    </div>
  );
};
