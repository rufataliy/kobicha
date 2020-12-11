import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1266px;
  margin: 0 auto;

  margin-bottom: ${({ theme }) => theme.gaps.lg};

  &:first-child,
  &:last-child {
    margin: 0 auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 95%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    margin-bottom: ${({ theme }) => theme.gaps.xlg};

    &:first-child,
    &:last-child {
      margin: 0 auto;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 75%;
  }
`;
