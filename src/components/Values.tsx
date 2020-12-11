import React from "react";
import styled from "styled-components";
import { SectionTitle, Wrapper } from "./commons";
import Markdown from "react-markdown";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & .with-bg {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    height: 350px;
  }
  & .right {
    background-image: url("/img/cafe.jpg");
  }
  & .left {
    background-image: url("/img/coffee-beans.jpg");
  }

  & .text-content {
    background: ${({ theme }) => theme.colors.white};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    & .inner-container {
      margin-bottom: 50px;
    }
    & .text-content {
      width: 95%;
      padding: ${({ theme }) => theme.gaps.sm};
      margin: 0 auto;
      margin-top: -20%;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      & h2 {
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & .text-content {
      width: 85%;
      padding: ${({ theme }) => theme.gaps.md};
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    & > .inner-container > div {
      width: 50%;
      height: 350px;
    }
    & > .inner-container {
      margin: 0;
    }

    & .right {
      float: right;
    }
    & .right + .text-content {
      float: left;
      border: none;
    }

    & .left {
      float: left;
    }
    & .left + .text-content {
      float: right;
      border: none;
    }

    & .text-content {
      width: 50%;
      margin: 0 auto;
      margin-top: 0;
    }
  }
`;

interface Props {
  data: Data["values"];
}

export const Values: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <SectionTitle>
        <h1>Values</h1>
        <p>What we value is what we are</p>
      </SectionTitle>
      <Container id="about">
        <div className="inner-container">
          <div className="with-bg left"></div>
          <Markdown className="text-content">{data.left}</Markdown>
        </div>
        <div className="inner-container">
          <div className="with-bg right"></div>
          <Markdown className="text-content">{data.right}</Markdown>
        </div>
      </Container>
    </Wrapper>
  );
};
