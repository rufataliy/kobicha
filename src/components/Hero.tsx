import React from "react";
import styled from "styled-components";
import { Wrapper } from "./commons";
import MarkDown from "react-markdown";

const Container = styled.div`
  display: flex;

  & > * {
    width: 100%;
  }
  & .left {
    z-index: 1;
    background: ${({ theme }) => theme.colors.white};
    & p {
      font-size: ${({ theme }) => theme.sizes.sm};
    }
    & h1 {
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 20px;
    }
  }
  & .right {
    overflow: hidden;
    background: ${({ theme }) => theme.colors.primary};
    background-image: url("/img/beans-video-bg.png");
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
      border: 9px solid ${({ theme }) => theme.colors.primary};
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
      padding: ${({ theme }) => theme.gaps.sm};
    }
    & .right {
      height: 100%;
      height: 300px;
      order: 1;

      & .video-overlay-img,
      & video {
        display: none;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & .left {
      width: 85%;
      padding: ${({ theme }) => theme.gaps.md};
    }
    & .right {
      overflow: hidden;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: row;
    height: 500px;
    & .left {
      width: 50%;
      margin-top: 0;
      order: 0;
      & p {
        font-size: ${({ theme }) => theme.sizes.md};
      }
    }
    & .right {
      & video {
        display: block;
      }
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
            width="200"
            className="video-overlay-img"
            src="/img/video-overlay-img.JPG"
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
