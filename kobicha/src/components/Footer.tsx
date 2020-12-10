import React from "react";
import styled from "styled-components";
import { Wrapper } from "./commons";

const Container = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.primary};
  & .copyright {
    background: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.gaps.sm} 0;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    & p {
      margin: 0;
    }
    & a {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  & .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    padding: ${({ theme }) => theme.gaps.md} 0;
    & > div {
      box-sizing: border-box;
      margin: 0 ${({ theme }) => theme.gaps.sm};
      min-width: 150px;
      padding: ${({ theme }) => theme.gaps.sm};
    }

    & .nav,
    & .social-link {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    & a {
      transition: 0.3s;
      text-decoration: none;
      font-weight: bold;
      opacity: 0.7;
      color: ${({ theme }) => theme.colors.primary};
      &:hover {
        opacity: 1;
      }
      & img {
        height: 30px;
      }
    }
    & .social-link a {
      display: flex;
      align-item: center;
      margin: ${({ theme }) => theme.gaps.xs} 0;
      & p {
        margin: 0 ${({ theme }) => theme.gaps.xs};
        margin-top: ${({ theme }) => theme.gaps.xs};
      }
    }
    & .nav {
      & a {
        display: block;
        margin: ${({ theme }) => theme.gaps.xs} 0;
      }
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    .flex-container {
      justify-content: space-between;
      & .social-link a {
        margin: 0;
      }
    }
  }
`;

interface Props {
  data: Data["footer"];
}

export const Footer: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper className="last-wrapper">
      <Container>
        <div className="flex-container">
          <div className="logo-section">
            <img height="135" src={data.logo} alt="logo" />
          </div>
          <div className="nav">
            {data.menu.map((item) => {
              return <a href={item.path}>{item.name}</a>;
            })}
          </div>
          <div className="social-link">
            {data.social_link.map((item) => {
              return (
                <a href={item.link}>
                  <img height="30" src={item.icon} alt="" />
                  <p>{item.name}</p>
                </a>
              );
            })}
          </div>
        </div>
        <div className="copyright">
          <p>
            Copyright &#169; <a href="https://rufat.tech/">Rufat Aliyev</a>
          </p>
        </div>
      </Container>
    </Wrapper>
  );
};
