import styled from "styled-components";

interface Props {
  btnType: "primary" | "secondary";
}

export const Button = styled.button<Props>`
  cursor: pointer;
  border: none;
  transition: 0.3s;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.primary};

  ${({ btnType, theme }) =>
    btnType === "primary"
      ? `background: ${theme.colors.primary};
  color: ${theme.colors.white};
  `
      : `background: ${theme.colors.white};
  color: ${theme.colors.primary};

  &:hover{
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
  `}

  padding: 10px 30px;
`;
