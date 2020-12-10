import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Button, Product, SectionTitle, Wrapper } from "./commons";
import { ProductView } from "./ProductView";
import { useRouter } from "next/router";

const Container = styled.div`
  width: 100%;
  display: flex;
  padding-top: ${({ theme }) => theme.gaps.md};
  & > div {
    width: 100%;
  }
  & .view-section.closed {
    bottom: -100%;
  }
  & .main-img {
    overflow: hidden;
    margin-bottom: ${({ theme }) => theme.gaps.xs};
  }
  & .product-img {
    margin-right: ${({ theme }) => theme.gaps.sm};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    & .product-list {
      overflow: auto;
      display: flex;
      flex-wrap: nowrap;
      justify-content: start;
    }
    & .view-section {
      overflow: auto;
      position: fixed;
      bottom: 0;
      background: rgba(255 255 255 / 90%);
      z-index: 1000;
      height: 80vh;
      width: 95%;
      right: 2%;
      margin: 0 auto;
      box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.6);
      & .product-view {
        height: auto;
      }
      & .text-content {
        height: auto;
      }
      padding: ${({ theme }) => theme.gaps.md} ${({ theme }) => theme.gaps.sm};
      & .close-btn {
        display: block;
        position: sticky;
        bottom: 0;
        margin-left: auto;
        box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.6);
      }
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    & .view-section {
      height: 60vh;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    & .view-section {
      z-index: 1;
      position: static;
      height: 100%;
      right: 0;
      margin: 0 auto;
      overflow: hidden;
      box-shadow: none;
      & .product-view {
        height: 100%;
      }
      & .close-btn {
        display: none;
      }
    }
    & .view-section.closed {
      bottom: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    & .view-section {
      position: sticky;
      top: ${({ theme }) => theme.gaps.md};
      height: auto;
      max-height: 90vh;
      & .text-content {
        overflow: auto;
        height: 100%;
      }
    }
    & .product-list {
      flex-wrap: wrap;
      justify-content: center;
      border-left: 1px solid ${({ theme }) => theme.colors.primary};
      padding: 0 ${({ theme }) => theme.gaps.sm};
    }
  }
`;

interface Props {
  data: Product[];
}

const getQuickViewProduct = (data: Product[], id: string | undefined) => {
  console.log(id);

  if (Boolean(data)) {
    return { ...data.find((product) => product.id === id) };
  }
  return null;
};

export const Products: React.FC<Props> = ({ data }) => {
  const [showProductView, setShowProductView] = useState(false);
  const viewRef = useRef<HTMLDivElement>(null);
  const { query, replace, pathname } = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewClose = () => {
    setShowProductView(false);
  };
  const handleProductSelect = () => {
    setShowProductView(true);
  };
  useEffect(() => {
    if (!query.product_id) {
      replace(`/?product_id=${data[0].id}`);
    } else {
      setSelectedProduct(() => {
        const selected = data.find(
          (product) => product.id === query.product_id
        );
        return { ...selected };
      });
    }
  }, [query.product_id]);

  return (
    <Wrapper>
      <SectionTitle>
        <h1>Products</h1>
        <p>For more products check out our online shop</p>
      </SectionTitle>
      <Container id="quick-view">
        <div
          ref={viewRef}
          className={`view-section ${!showProductView ? "closed" : ""}`}
        >
          {selectedProduct && <ProductView data={selectedProduct} />}
          <Button
            btnType="primary"
            className="close-btn"
            onClick={handleViewClose}
          >
            close
          </Button>
        </div>
        <div className="product-list">
          {data.map((product) => {
            return (
              <Product
                htmlId={`quick-view-${product.id}`}
                selected={product.id === selectedProduct?.id}
                onSelect={handleProductSelect}
                link={`/?product_id=${product.id}#quick-view-${product.id}`}
                data={product}
              />
            );
          })}
        </div>
      </Container>
    </Wrapper>
  );
};
