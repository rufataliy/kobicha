import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Button } from ".";

interface ContainerProps {
  withBorder: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 250px;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: ${({ theme }) => theme.gaps.sm + " " + "auto"};
  padding: ${({ theme }) => theme.gaps.md};
  transition: 0.25s linear;
  border: 1px solid
    ${(props) =>
      props.withBorder ? props.theme.colors.primary : "transparent"};

  & a {
    text-decoration: none;
  }
  & a:hover .title {
    text-decoration: underline;
  }
  & a:hover .product-img img {
    transform: translateY(-5px);
  }

  & .product-img {
    position: relative;
    height: 170px;
    display: flex;
    justify-content: center;
    & .new {
      font-size: ${({ theme }) => theme.sizes.xs};
      font-weight: bold;
      padding: ${({ theme }) => theme.gaps.xs} ${({ theme }) => theme.gaps.sm};
      border-radius: 20px;
      color: ${({ theme }) => theme.colors.white};
      position: absolute;
      top: 40%;
      right: 0;
      background: ${({ theme }) => theme.colors.primary};
    }
    & img {
      transition: 0.2s;
      height: 100%;
    }
    width: 100%;
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
    & p {
      margin: 0;
    }
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
  link: string;
  selected: boolean;
  htmlId?: string;
  onSelect?: () => void;
}

export const Product: React.FC<Props> = ({
  data,
  link,
  selected,
  htmlId,
  onSelect,
}) => {
  const price = data.price.split(".");
  return (
    <Container {...(htmlId ? { id: htmlId } : {})} withBorder={selected}>
      <Link shallow href={link}>
        <a onClick={onSelect}>
          <div className="product-img">
            <img src={data.image[0]} alt="" />
            {data.new && <span className="new">NEW</span>}
          </div>
          <div className="title">
            <h2>{data.title}</h2>
          </div>
        </a>
      </Link>
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
