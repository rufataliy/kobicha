import React from "react";
import styled from "styled-components";
import { Wrapper } from "./commons";
import MarkDown from "react-markdown";

const Container = styled.div`
  height: 500px;
  display: flex;
  & > * {
    width: 100%;
  }
  & .left {
    z-index: 1;
    padding: 60px;
    background: ${({ theme }) => theme.colors.white};
    & p {
      font-size: 1.2rem;
    }
    & h1 {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 20px;
    }
  }
  & .right {
    background: ${({ theme }) => theme.colors.primary};
    background-image: url("/img/coffee-beans.jpg");
    background-size: cover;
    background-position: center;
    z-index: -1;
    position: relative;
    & .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0, 0, 0, 0.3);
    }
    & .video-overlay-img {
      top: 20%;
      position: absolute;
      height: 300px;
      left: 30%;
      border: 9px solid #6b4423;
      display: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    height: auto;
    & .left {
      height: 100%;
      width: 95%;
      margin: 0 auto;
      margin-top: -90px;
      order: 2;
    }
    & .right {
      height: 100%;
      height: 300px;
      order: 1;
      & .video-overlay-img {
        display: none;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    & .left {
      padding: 30px;
      width: 85%;
      margin: 0 auto;
      margin-top: -90px;
      order: 2;
    }
    & .right {
      overflow: hidden;
      order: 1;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    height: 500px;
    & .left {
      width: 50%;
      margin-top: 0;
      order: 0;
    }
    & .right {
      height: 100%;
      width: 50%;
      order: 0;
      & .video-overlay-img {
        display: block;
      }
    }
  }
`;

interface Props {
  data: { text: string; video: string };
}

export const Hero: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Container>
        <div className="left">
          <MarkDown source={data.text} />
        </div>
        <div className="right">
          <div className="overlay"></div>
          <img
            height="300"
            className="video-overlay-img"
            src="/img/iloveyou.jpg"
            alt="i love you "
          />
          <video muted loop autoPlay height="520">
            <source src={data.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </Wrapper>
  );
};
