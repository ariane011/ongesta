import styled from "styled-components";

export const Container = styled.span`
  width: auto;
  img {
    width: 72%;
  }
  ul,
  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  li,
  a {
    height: auto;
    margin: auto;
    text-decoration: none;
    color: #ffff;
    &:hover {
      color: #ffff;
    }
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
  .ant-menu-item .ant-menu-item-only-child {
    height: 0;
    background-color: transparent;
    &:focus {
      background-color: transparent;
    }
    &:active {
      background-color: transparent;
    }
  }
`;
