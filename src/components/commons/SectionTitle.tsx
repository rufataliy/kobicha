import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.gaps.lg};
  & h1 {
    width: 80%;
    text-align: center;
    margin: 0 auto;
    margin-bottom: ${({ theme }) => theme.gaps.sm};
    padding-bottom: ${({ theme }) => theme.gaps.sm};
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid #6b4423;
  }
  & p {
    width: 40%;
    margin: 0 auto;
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.sizes.md};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & h1 {
      width: 50%;
      font-size: ${({ theme }) => theme.sizes.lg};
    }
    & p {
      font-size: ${({ theme }) => theme.sizes.md};
    }
  }
`;

export const SectionTitle: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
