import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  // background: lightblue;
  margin: 0 auto;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 90%;
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 75%;
  }
`;
