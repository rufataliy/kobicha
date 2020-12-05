import React from "react";
import styled from "styled-components";
import { Button } from ".";

const Container = styled.div`
  height: 300px;
  width: 200px;
  display flex;
  flex-direction: column;
`;
interface Props {
  data: Product;
}

export const Product: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <img src={data.image} alt="" />
      <h2>{data.title}</h2>
      <h3>{data.subtitle}</h3>
      <p>{data.description}</p>
      {data.new ? <span>new</span> : "null"}
      <Button btnType={"primary"}>But it now</Button>
      <Button btnType={"secondary"}>Add to cart</Button>
    </Container>
  );
};
