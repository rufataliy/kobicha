import React, { useState } from "react";
import styled from "styled-components";
import { MenuBtn, Wrapper } from "./commons";
import Link from "next/link";

const HeaderStyled = styled.header`
  width: 100%;
  display: flex;

  & .header-link {
    text-decoration: none;
    color: inherit;
    transition: 0.3s;
    color: ${({ theme }) => theme.colors.primary};
  }
  & .header-link:not(:last-child) {
    margin-right: ${({ theme }) => theme.gaps.sm};
  }
  & .profile-part {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  & .profile-part .header-link {
    text-align: center;
    opacity: 0.65;
    border-bottom: 2px solid transparent;
    & p {
      font-weight: bold;
      margin: 0;
      color: ${({ theme }) => theme.colors.primary};
    }
    &:hover {
      opacity: 1;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
    & img {
      height: 25px;
      display: inline-block;
    }
  }
  & .logo-section {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 50%;
    padding: ${({ theme }) => theme.gaps.sm + " 0px"};
    & .logo-img {
      position: relative;
      height: 50px;
      z-index: 1000;
    }
    & .menuBtn {
      z-index: 1000;
    }

    & .menu {
      position: absolute;
      width: 100%;
      top: -650px;
      background: rgba(255, 255, 255, 0.9);
      z-index: 10;
      transition: 0.3s ease-out;
      & ul {
        padding: 0;
        list-style: none;
        & a {
          font-size: 1.5rem;
          font-weight: bold;
          transition: 0.2s;
          display: block;
          padding: ${({ theme }) => theme.gaps.sm};
        }
        & a:hover {
          padding-left: ${({ theme }) => theme.gaps.md};
          background: ${({ theme }) => theme.colors.primary};
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
    & .menu.open {
      top: 100%;
    }
  }

  & .user-section {
    position: relative;
    width: 50%;
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
        padding: 0 ${({ theme }) => theme.gaps.md};
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
  background: rgba(255, 255, 255, 0.9);
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
                <SubHeader />
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
            <SubHeader className="hide-mobile" />
          </div>
        </HeaderStyled>
      </Wrapper>
    </Container>
  );
};

interface SubHeaderProps {
  className?: string;
}

var SubHeader: React.FC<SubHeaderProps> = ({ className }) => {
  return (
    <div className={`profile-part ${className ? className : ""}`}>
      <Link href="#cart">
        <a className="header-link">
          <img height="30" src="/img/shopping-cart.png" alt="" />
          <p>Cart</p>
        </a>
      </Link>
      <Link href="#user">
        <a className="header-link">
          <img height="30" src="/img/user.png" alt="" />
          <p>Account</p>
        </a>
      </Link>
    </div>
  );
};
