import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProductCard = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 16px var(--color-shadow);
  transition: var(--transition);
  border: 1px solid var(--color-border);

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px var(--color-shadow-strong);
    border-color: transparent;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 16px 20px 6px;
  color: var(--color-text);
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  color: var(--color-text-muted);
  margin: 0 20px 12px;
  line-height: 1.5;
  flex: 1;
`;

export const ProductPrice = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 20px 4px;
  font-family: var(--font-display);

  &::before {
    content: "a partir de ";
    font-size: 12px;
    font-weight: 400;
    color: var(--color-text-muted);
    font-family: var(--font-body);
    display: block;
    margin-bottom: 2px;
  }
`;

export const ViewButton = styled(Link)`
  display: block;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  color: var(--color-surface);
  background: var(--color-primary);
  text-decoration: none;
  padding: 12px 20px;
  margin: 16px 20px 20px;
  border-radius: var(--radius-md);
  transition: var(--transition);
  letter-spacing: 0.3px;

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-1px);
  }
`;
