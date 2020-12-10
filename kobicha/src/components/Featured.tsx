import React from "react";
import styled from "styled-components";
import { Product, SectionTitle, Wrapper } from "./commons";

const Contianer = styled.div`
  & > div {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    overflow: auto;
    align-items: center;
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
              return (
                <Product
                  selected={false}
                  link={`/?product_id=${product.id}#quick-view-${product.id}`}
                  data={product}
                />
              );
            }
          })}
        </div>
      </Contianer>
    </Wrapper>
  );
};
