import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px 60px;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-display);
  font-size: 2.4rem;
  color: var(--color-text);
  text-align: center;
  margin-bottom: 32px;
`;

export const FiltersBar = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 20px 24px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  box-shadow: 0 2px 12px var(--color-shadow);
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;

  &::before {
    content: "🔍";
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 15px;
    pointer-events: none;
  }
`;

export const SearchInput = styled.input`
  padding: 12px 16px 12px 42px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 14px;
  color: var(--color-text);
  background: var(--color-bg);
  min-width: 280px;
  transition: var(--transition);
  outline: none;

  &::placeholder {
    color: var(--color-text-light);
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(193, 39, 45, 0.1);
  }

  &:hover {
    border-color: var(--color-primary-light);
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  animation: ${fadeIn} 0.5s ease;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: var(--color-text-muted);
  padding: 60px 20px;
  grid-column: 1 / -1;
  font-style: italic;
`;
