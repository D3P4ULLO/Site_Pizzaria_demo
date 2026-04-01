import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = styled.div`
  background: #f0f0f0;
  border-radius: 12px;
  padding: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  transition: 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;

  margin-bottom: 12px;
`;

export const ProductTitle = styled.h3`
  font-size: 1remx;
  font-weight: bold;
  margin: 8px 0;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
  text-align: center;
`;

export const ProductPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin-bottom: 8px;
`;

export const ViewButton = styled(Link)`
  width: 100%;
  max-width: 200px;
  text-align: center;
  font-size: 14px;
  color: #030303;
  background: #e0e0e0;
  text-decoration: none;
  font-weight: 500;
  font-style: italic;
  border-radius: 20px;
  padding: 5px 12px;

  transition: 0.2s;

  &:hover {
    background: #d0d0d0;
    font-weight: 600;
  }
`;
