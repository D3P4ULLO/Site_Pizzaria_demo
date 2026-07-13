import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 24px 60px;
  animation: ${fadeIn} 0.5s ease;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 32px;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;

  p {
    font-size: 18px;
    color: var(--color-text-muted);
    margin-bottom: 24px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  background: var(--color-primary);
  color: white;
  border-radius: var(--radius-md);
  font-weight: 600;
  transition: var(--transition);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  margin-bottom: 16px;
  transition: var(--transition);

  &:hover {
    box-shadow: 0 4px 16px var(--color-shadow);
  }

  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: var(--radius-md);
  flex-shrink: 0;
`;

export const ItemInfo = styled.div`
  flex: 1;

  h3 {
    font-family: var(--font-display);
    font-size: 1.1rem;
    margin-bottom: 4px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--color-primary);
  }
`;

export const ItemActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const QtyInput = styled.input`
  width: 64px;
  padding: 8px 12px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-sm);
  text-align: center;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  transition: var(--transition);

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const RemoveBtn = styled.button`
  padding: 8px 16px;
  border: 2px solid var(--color-primary-light);
  background: transparent;
  color: var(--color-primary);
  border-radius: var(--radius-sm);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--color-primary);
    color: white;
  }
`;

export const Summary = styled.div`
  margin-top: 32px;
  padding: 28px;
  background: var(--color-surface);
  border: 2px solid var(--color-border);
  border-radius: var(--radius-lg);

  h3 {
    font-family: var(--font-display);
    font-size: 1.2rem;
    margin-bottom: 16px;
  }
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-border);

  strong {
    font-family: var(--font-display);
    font-size: 24px;
    color: var(--color-primary);
  }
`;

export const CheckoutBtn = styled.button`
  width: 100%;
  padding: 16px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 16px rgba(193, 39, 45, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }
`;
