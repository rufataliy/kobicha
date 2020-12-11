import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "./commons";
import Markdown from "react-markdown";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  & .flex-container {
    display: flex;
  }
  & .side-section {
    width: 40%;
  }
  & .side-section > * {
    margin-bottom: ${({ theme }) => theme.gaps.sm};
  }

  & .text-content {
    overflow: auto;
    padding-right: ${({ theme }) => theme.gaps.sm};
  }

  & .product-img {
    width: 50%;
    & > .main-img {
      width: 100%;
      height: 200px;
      display: flex;
      justify-content: center;
      & img {
        height: 100%;
      }
    }
    & .img-list {
      display: flex;
      alignt-items: center;
      & .btn-img {
        border: none;
        background: none;
        border: 1px solid transparent;
        transition: 0.3s;
        cursor: pointer;
        &.withBorder {
          border: 1px solid ${({ theme }) => theme.colors.primary};
        }
        &: hover {
          border: 1px solid ${({ theme }) => theme.colors.primary};
        }
        width: 90px;
        & img {
          width: 100%;
        }
      }
    }
  }
  & .title {
    display: flex;
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
    align-items: baseline;
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
      & p {
        margin: 0;
      }
    }
    & .price-main {
      font-size: 1.6rem;
      margin-left: 3px;
    }
  }
  & .flex-container {
    flex-direction: column;
    & > div {
      width: 100%;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & .flex-container {
      flex-direction: row;
      & > div {
        width: 50%;
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    flex-direction: column;
    & > div {
      width: 100%;
      padding: ${({ theme }) => theme.gaps.sm};
    }
    & .flex-container {
      flex-direction: row;
      & > div {
        width: 50%;
      }
    }
  }
`;

interface Props {
  data: Product;
}

export const ProductView: React.FC<Props> = ({ data }) => {
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    if (Array.isArray(data.image)) {
      setSelectedImg(data.image[0]);
    }
  }, [data.image]);

  const price = data.price.split(".");
  return (
    <Container className="product-view">
      <div className="flex-container">
        <div className="product-img">
          <div className="main-img">
            <img height="200" src={selectedImg} alt={data.title} />
          </div>
          <div className="img-list">
            {data.image.map((img, index) => {
              return (
                <button
                  key={img + index}
                  className={`btn-img ${
                    img === selectedImg ? "withBorder" : "  "
                  }`}
                  onClick={() => setSelectedImg(img)}
                >
                  <img src={img} />
                </button>
              );
            })}
          </div>
        </div>
        <div className="side-section">
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
        </div>
      </div>

      <div className="text-content">
        <Markdown source={data.description} />
        <Markdown source={data.extra_content} />
      </div>
    </Container>
  );
};
