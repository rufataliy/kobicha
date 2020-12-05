import React from "react";
import styled from "styled-components";
import { Wrapper } from "./commons";

const Container = styled.div`
  display: flex;
  background: green;
  flex-wrap: wrap;
  & > div {
    width: 50%;
    height: 450px;
  }
  & > div:first-child,
  & > div:last-child {
    background: red;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    & > div {
      width: 100%;
      height: 450px;
    }
    & .text-content {
      width: 85%;
      background: white;
      margin: 0 auto;
      margin-top: -5%;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    & > div {
      width: 50%;
      height: 450px;
    }
    & .text-content {
      width: 50%;
      background: white;
      margin: 0 auto;
      margin-top: 0;
    }
  }
`;

export const Values = () => {
  return (
    <Wrapper>
      <h1>Values</h1>
      <Container>
        <div></div>
        <div></div>
        <div></div>
        <div className="text-content"></div>
      </Container>
    </Wrapper>
  );
};
