import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  text-align: center;
  margin-top: 150px;
  & h1 {
    font-size: 3.5rem;
    width: 50%;
    text-align: center;
    padding-bottom: 10px;
    margin: 0 auto;

    margin-top: ${({ theme }) => theme.gaps.lg};
    margin-bottom: ${({ theme }) => theme.gaps.sm};
    color: ${({ theme }) => theme.colors.primary};
    border-bottom: 1px solid #6b4423;
  }
  & p {
    width: 40%;
    margin: 0 auto;
    font-style: italic;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const SectionTitle: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};
