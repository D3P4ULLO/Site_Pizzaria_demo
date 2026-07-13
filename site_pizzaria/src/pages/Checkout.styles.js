import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

export const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
  padding: 40px 24px 60px;
  animation: ${fadeIn} 0.5s ease;
`;

export const PageTitle = styled.h1`
font-family: var(--font-display)
font-size: 2rem;
color: var(--color-text);
margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  color: var(--color-text-muted);
  margin-bottom: 32px;
  font-size: 15px;
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

export const EmptyBtn = styled.button`
  padding: 12px 28px;
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);

  &:hover {
    background: var(--color-primary-dark);
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--color-text-muted);
`;

export const Input = styled.input`
  padding: 14px 16px;
  border: 2px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: 15px;
  color: var(--color-text);
  background: var(--color-surface);
  outline: none;
  transition: var(--transition);

  &::placeholder {
    color: var(--color-text-light);
  }

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(193, 39, 45, 0.1);
  }
`;

export const Select = styled.select`
  padding: 14px 16px;
  border: 2px solid var (--color-border);
  border-radius: var(--radius-md);
  font-size: 15px;
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

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  margin-top: 8px;
  border-top: 2px solid var(--color-border);
  font-size: 16px;

  strong {
    font-family: var(--font-display);
    font-size: 28px;
    color: var(--color-primary);
  }
`;

export const SubmitBtn = styled.button`
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
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover:not(:disabled) {
    background: var(--color-primary-dark);
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: wait;
  }
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  boder-top-color: white;
  border-radius: 50%;
  animation: ${spin} 0.6s linear infinite;
`;
