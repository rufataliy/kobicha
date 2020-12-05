import React, { useState } from "react";
import styled from "styled-components";
import { MenuBtn, Wrapper } from "./commons";
import Link from "next/link";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;

  & .header-link:not(last-child) {
    margin-right: 20px;
  }
  & .logo-section {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding: ${({ theme }) => theme.gaps.sm + " 0px"};
    background: rgba(255, 255, 255, 0.7);
    & .logo-img {
      position: relative;
      height: 50px;
      z-index: 1000;
    }
    & .menuBtn {
      z-index: 1000;
    }

    & .menu {
      padding: 0 50px;
      padding-top: 100px;
      position: absolute;
      width: 100%;
      height: 650px;
      top: -650px;
      background: rgba(255, 255, 255, 0.9);
      z-index: 10;
      transition: 0.3s ease-out;
      & ul {
        list-style: none;
        & a {
          text-decoration: none;
          color: ${({ theme }) => theme.colors.primary};
          font-size: 1.5rem;
          font-weight: bold;
          transition: 0.2s;
          display: block;
          padding: 20px;
        }
        & a:hover {
          margin-left: 10px;
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
    & .menu.open {
      top: 0%;
    }
  }

  & .user-section {
    position: relative;
    width: 50%;
  }
  & .profile-part {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    & .user-section {
      display: none;
      & .profile-part {
        display: none;
      }
    }
    & .logo-section {
      width: 100%;
      & .menu {
        left: 0;
      }
      & .profile-part {
        display: flex;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    & .user-section {
      display: flex;
      & .profile-part {
        display: flex;
      }
    }
    & .logo-section {
      width: 50%;
      & .menu {
        left: 100%;
      }
      & .profile-part {
        display: none;
      }
    }
  }
`;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

interface Props {
  data?: Data["header"];
}

export const Header: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <HeaderStyled>
          <div className="logo-section">
            <img
              className="logo-img"
              height="50"
              src={data?.logo_full}
              alt=""
            />
            <MenuBtn onClick={() => setOpen(!open)} />
            <div className={`menu ${open ? "open" : ""}`}>
              <nav>
                <div className="profile-part">
                  <Link href="/cart">
                    <a className="header-link">
                      <img height="30" src="/img/shopping-cart.png" alt="" />
                    </a>
                  </Link>
                  <Link href="/cart">
                    <a className="header-link">
                      <img height="30" src="/img/user.png" alt="" />
                    </a>
                  </Link>
                </div>
                <ul>
                  {data.menu.map((item) => {
                    return (
                      <li>
                        <Link href={item.path}>
                          <a className="header-link">{item.name}</a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
          <div className="user-section">
            <div className="profile-part hide-mobile">
              <Link href="/cart">
                <a className="header-link">
                  <img height="30" src="/img/shopping-cart.png" alt="" />
                </a>
              </Link>
              <Link href="/cart">
                <a className="header-link">
                  <img height="30" src="/img/user.png" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </HeaderStyled>
      </Wrapper>
    </Container>
  );
};
