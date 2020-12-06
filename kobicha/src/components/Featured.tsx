import React from "react";
import styled from "styled-components";
import { Product, SectionTitle, Wrapper } from "./commons";

const Contianer = styled.div`
  & > div {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    overflow: auto;
    align-items: center;
    height: 550px;
  }
`;

interface Props {
  data: Product[];
}
export const Featured: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <SectionTitle>
        <h1>Featured</h1>
        <p>Check out some of our most popular products</p>
      </SectionTitle>
      <Contianer>
        <div>
          {data.map((product) => {
            if (product.featured) {
              return <Product data={product} />;
            }
          })}
        </div>
      </Contianer>
    </Wrapper>
  );
};
