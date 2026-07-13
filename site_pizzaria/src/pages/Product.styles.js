import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 24px 60px;
  animation: ${fadeIn} 0.5s ease;
`;

export const ProductLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: 0 8px 32px var(--color-shadow-strong);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductName = styled.h2`
  font-family: var(--font-display);
  font-size: 2.2rem;
  color: var(--color-text);
`;

export const ProductDesc = styled.p`
  font-size: 16px;
  color: var(--color-text-muted);
  line-height: 1.7;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--color-text-muted);
`;

export const Select = styled.select`
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  background: var(--color-surface);
  cursor: pointer;
  outline: none;
  transition: var(--transition);

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(193, 39, 45, 0.1);
  }
`;

export const NumberInput = styled.input`
  padding: 12px 16px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 500;
  color: var(--color-text);
  background: var(--color-surface);
  width: 100px;
  outline: none;
  transition: var(--transition);

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(193, 39, 45, 0.1);
  }
`;

export const PriceTag = styled.div`
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  padding: 16px 0 8px;
  border-top: 1px solid var(--color-border);
`;

export const AddButton = styled.button`
  padding: 16px 32px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  letter-spacing: 0.3px;
  box-shadow: 0 4px 16px rgba(193, 39, 45, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(193, 39, 45, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;
