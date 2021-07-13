import styled from "styled-components";
import imgPrincipal from "../../assets/images/slide-01.jpg";

export const Container = styled.div`
  .bg-image {
    width: 100vw;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${imgPrincipal});
    min-height: 50vh;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.9;
  }
  h1, h2 {
    display: flex;
    text-align: center;
    justify-content: center;
    color: #eeeaf1;
    font-style: normal;
  }
  h1 {
    padding-top: 90px;
    font-weight: 600;
    font-size: 42px;
    line-height: 51px;
  }
  h2 {
    padding-top: 20px;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    width: 970px;
    margin: auto;
  }
`;
