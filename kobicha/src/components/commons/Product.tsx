import React from "react";
import styled from "styled-components";
import { Button } from ".";

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: 20px 40px;

  & .product-img {
    width: 100%;
    & > img {
      width: 100%;
    }
  }
  & > * {
    margin-bottom: 20px;
  }
  & .title {
    display: flex;
    height: 50px;
    color: ${({ theme }) => theme.colors.primary};

    & h2 {
      font-size: 1.25rem;
    }
  }
  & .subtitle {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1rem;
    font-weight: normal;
    margin-bottom: 10px;
  }
  & .btn-group > button {
    width: 100%;
  }
  & .btn-group > button:first-child {
    margin-bottom: 10px;
  }
  & .price-section {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    text-align: right;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.primary};
    & .info {
      font-weight: normal;
      font-size: 0.9rem;
      font-family: Arial;
      color: ${({ theme }) => theme.colors.secondary};
    }
    & .price-main {
      font-size: 1.6rem;
      margin-left: 3px;
    }
  }
`;
interface Props {
  data: Product;
}

export const Product: React.FC<Props> = ({ data }) => {
  const price = data.price.split(".");
  return (
    <Container>
      <div className="product-img">
        <img src={data.image} alt="" />
      </div>
      <div className="title">
        <h2>{data.title}</h2>
      </div>
      <h3 className="subtitle">{data.subtitle}</h3>
      <div className="price-section">
        <div className="info">
          <p>{data.weight}</p>
        </div>
        <div className="price">
          $<span className="price-main">{price[0]}</span>.{price[1]}
        </div>
      </div>
      <div className="btn-group">
        <Button btnType={"primary"}>But it now</Button>
        <Button btnType={"secondary"}>Add to cart</Button>
      </div>
    </Container>
  );
};
