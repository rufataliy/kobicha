import React from "react";
import styled from "styled-components";
import { Product, Wrapper } from "./commons";

const Contianer = styled.div`
  & h1 {
    text-align: center;
    margin: ${({ theme }) => theme.gaps.xlg} 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  & > div {
    width: 100%;
    display: flex;
    flex-wrap: norap;
    justify-content: center;
    overflow: auto;
    align-items: center;
    height: 400px;
    background: grey;
  }
`;

interface Props {
  data: Product[];
}
export const Featured = ({ data }) => {
  return (
    <Wrapper>
      <Contianer>
        <h1>Featured</h1>
        <div>
          {data.map((product) => {
            return <Product data={product} />;
          })}
        </div>
      </Contianer>
    </Wrapper>
  );
};
