import React from "react";
import styled from "styled-components";
import { Wrapper } from "./commons";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  & > div {
    width: 50%;
    height: 450px;
    flex-shrink: 0;
  }
  & > div:last-child {
    width: 100%;
    background: grey;
  }
  & .address {
    background: chocolate;
  }
  & .message-form {
    background: bisque;
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

export const Contact = () => {
  return (
    <Wrapper>
      <h1>Contact</h1>
      <Container>
        <div className="address"></div>
        <div className="message-form"></div>
        <div></div>
      </Container>
    </Wrapper>
  );
};
