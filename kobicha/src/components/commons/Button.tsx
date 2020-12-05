import styled from "styled-components";

interface Props {
  btnType: "primary" | "secondary";
}

export const Button = styled.button<Props>`
  ${({ btnType, theme }) =>
    btnType === "primary"
      ? `background: ${theme.colors.primary};
  color: ${theme.colors.white};
  `
      : `background: ${theme.colors.white};
  color: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  `}

}
  padding: 10px 30px;

`;
