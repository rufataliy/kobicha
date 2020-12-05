import React from "react";
import styled from "styled-components";
import { Wrapper } from "./commons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fbe095;
  & > div {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    & > div:nth-child(2) {
      overflow: auto;
      display: flex;
      flex-wrap: nowrap;
      justify-content: start;
      padding: 0 90px;
      background: lightgrey;
      & > div {
        width: 200px;
        height: 200px;
        margin: 30px;
        background: #a79562;
        flex-shrink: 0;
        &:last-child {
          position: relative;
          &::after {
            position: absolute;
            content: "";
            right: -100px;
            width: 70px;
            height: 100%;
          }
        }
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    & > div:nth-child(2) {
      padding: 0;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const Products = () => {
  return (
    <Wrapper>
      <Container>
        <div></div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </Wrapper>
  );
};
