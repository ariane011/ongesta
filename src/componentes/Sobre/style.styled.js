import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  p {
    width: 650px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: normal;
    text-align: justify;
    font-size: 18px;
    line-height: 22px;
    color: #424242;
    margin: 25px 0 25px auto;
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
    width: 165px;
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
  }
  .btn-doar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .img-dog-caixa {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 370px;
    border-radius: 15px;
  }
  .title-doacoes {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 650px;
    margin: 0 0 0 auto;
  }
`;
