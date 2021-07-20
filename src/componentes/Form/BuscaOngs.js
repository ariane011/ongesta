import React from "react";
import { Button, Row, Select } from "antd";
import { BtnPesquisar } from "./style.styled";

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
          style={{ width: 400, marginBottom: 10 }}
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
          style={{ width: 400, marginBottom: 10 }}
          placeholder="Selecione sua cidade"
          onChange={onChange}
        >
          <Option value="sao paulo">São Paulo</Option>
          <Option value="rio de janeiro">Rio de Janeiro</Option>
        </Select>
      </Row>
      <Row justify="center">
        <BtnPesquisar className="btn" style={{ width: 400 }}>Procurar ONG</BtnPesquisar>
      </Row>
    </div>
  );
};
