import styled from "styled-components";

export const ContainerButton = styled.div`

  a {
    background: rgba($white, 0);
    border-bottom: 0px solid;
    color: $white;
    line-height: 1.4;
    padding: .25em;
    text-decoration: none;

    &:hover {
      background: rgba($white, 1);
      color: $red;
    }
  }
}

.btn {
  color: #424242;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  line-height: 45px;
  position: relative;
  text-decoration: none;
  letter-spacing: 0.04em;
  display: inline-block;
  background-color: #FBCB6B;
  @media(min-width: 600px) {
    margin: 0 1em 2em;
  }
  &:hover { text-decoration: none; }
}

.btn-1 {
  height: 46px;
  width: 500px;
  border-radius: 10px;
  svg {
    height: 46px;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    border-radius: 8px;
  }

  rect {
    fill: none;
    stroke: #2c2d2c;
    stroke-width: 2.5;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
}

.btn-1:hover {
  background: rgba($red, 0);
  font-weight: 700;
  letter-spacing: 0.5px;

  rect {
    stroke-width: 2.5;
    stroke-dasharray: 200, 690;
    stroke-dashoffset: 200;
    transition: all 1.35s cubic-bezier(0.5, 1.3, 0, 1);
  }
}
`;
