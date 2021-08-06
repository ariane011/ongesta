import React from "react";
import { Row, Select } from "antd";
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
          <a href="/" class="btn btn-1">
            <svg>
              <rect x="0" y="0" fill="none" width="100%" height="100%" />
            </svg>
            Procurar ONG
          </a>
        </ContainerButton>
      </Row>
    </div>
  );
};
