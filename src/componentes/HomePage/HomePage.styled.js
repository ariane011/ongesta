import styled from "styled-components";
import imgPrincipal from "../../assets/images/slide-001.jpg";

export const Container = styled.div`
  .bg-image {
    width: auto;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${imgPrincipal});
    min-height: 50vh;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 1;
  }
  h1,
  h2 {
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
    width: auto;
    margin: auto;
  }
  p {
    display: flex;
    text-align: center;
    justify-content: center;
    width: auto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 22px;
    text-align: center;
    color: #7a7a7a;
    margin: auto;
  }

  h3 {
    display: flex;
    text-align: center;
    justify-content: center;
    width: auto;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #424242;
    margin: 60px auto;
  }
`;
