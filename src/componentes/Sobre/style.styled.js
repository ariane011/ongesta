import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  p {
    //min-width: 650px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    font-size: 18px;
    line-height: 22px;
    color: #424242;
    margin: 20px 20px 25px 45px;
    @media screen and (max-width: 600px) {
      margin: 20px 20px 25px 20px;
    }
  }
  h3 {
    margin: 0px auto;
    width: auto;
  }
  .icone-coracao {
    margin-right: 16px;
    width: auto;
  }
  Button {
    background-color: #fbcb6b;
    //min-width: 165px;
    height: 45px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #424242;
    border: none;
    filter: drop-shadow(0px 4px 7px rgba(50, 50, 50, 0.25));
    border-radius: 10px;
    &:hover {
      background-color: #ffd880;
      transition: 0.3s;
      color: #424242;
    }
    &:focus {
      background-color: #ffd880;
      color: #424242;
    }
    margin: 15px 20px 25px 35px;
    @media screen and (max-width: 767px) {
      margin: 15px 20px 25px 20px;
    }

    @media screen and (min-width: 768px) and (max-width: 990px) {
      margin: 0px 20px 25px 20px;
    }
  }
  .btn-doar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .img-dog-caixa img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    width: 410px;
    @media screen and (max-width: 600px) {
      width: 310px !important;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    @media screen and (min-width: 768px) and (max-width: 990px) {
      width: 350px;
    }
  }
  .title-doacoes {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    //min-width: 650px;
    margin: 0 20px 0 45px;
    @media screen and (max-width: 600px) {
      margin: 0 10px 0 10px;
    }
  }
`;
