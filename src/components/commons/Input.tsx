import React, { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  notEmpty: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  position: relative;
  padding: 20px 0;
  & .label {
    font-weight: bold;
    position: absolute;
    left: 10px;
    top: ${(props) => (props.notEmpty ? "0" : "30%")};
    transition: 0.3s;
  }

  &.focused > label {
    top: 0;
  }
  & input,
  & textarea {
    font-size: 1.1rem;
    font-family: ralewaylight;
    padding: 10px;
    padding-left: 25px;
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    margin-bottom: 20px;
  }
  & input:focus + label,
  & textarea:focus + label {
    top: 0;
  }
`;

interface Props {
  label: string;
  type: "input" | "textarea";
}

export const Input: React.FC<Props> = ({ label, type }) => {
  const [value, setValue] = useState("");
  const notEmpty = Boolean(value.trim());
  return (
    <Container notEmpty={notEmpty}>
      {type === "input" && (
        <input
          type="text"
          id={label.toLocaleLowerCase()}
          name={label.toLowerCase()}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      )}
      {type === "textarea" && (
        <textarea
          style={{
            width: "100&",
            maxWidth: "100%",
            minWidth: "100%",
            maxHeight: "70px",
            minHeight: "50px",
          }}
          rows={3}
          id={label.toLocaleLowerCase()}
          name={label.toLowerCase()}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
      )}
      <label className="label" htmlFor={label}>
        {label}
      </label>
    </Container>
  );
};
