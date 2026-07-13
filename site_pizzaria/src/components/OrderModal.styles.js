import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.95); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

const confetti = keyframes`
  0% { transform: translateY(0) rotate(0deg); opacity: 1; }
  100% { transform: translateY(-60px) rotate(360deg); opacity: 0; }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(45, 24, 16, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
  animation: ${fadeIn} 0.3s ease;
`;

export const Modal = styled.div`
  background: var(--color-surface);
  border-radius: var(--radius-xl);
  padding: 48px 40px 40px;
  max-width: 440px;
  width: 100%;
  text-align: center;
  position: relative;
  box-shadow: 0 24px 64px rgba(45, 24, 16, 0.25);
  animation: ${slideUp} 0.4s ease;

  @media (max-width: 480px) {
    padding: 36px 24px 32px;
  }
`;

export const Emoji = styled.div`
  font-size: 56px;
  margin-bottom: 16px;
  line-height: 1;
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: "🎉";
    position: absolute;
    font-size: 24px;
    animation: ${confetti} 1s ease forwards;
  }

  &::before {
    top: 0;
    left: -20px;
  }

  &::after {
    top: 0;
    right: -20px;
    animation-delay: 0.2s;
  }
`;

export const Brand = styled.h2`
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  font-style: italic;
  color: var(--color-primary);
  margin-bottom: 8px;
`;

export const Message = styled.p`
  font-size: 16px;
  color: var(--color-text);
  font-weight: 500;
  margin-bottom: 24px;
`;

export const OrderNumber = styled.div`
  background: var(--color-bg-alt);
  border: 2px dashed var(--color-border);
  border-radius: var(--radius-md);
  padding: 16px 24px;
  margin-bottom: 24px;
`;

export const OrderLabel = styled.span`
  display: block;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--color-text-muted);
  margin-bottom: 4px;
`;

export const OrderCode = styled.span`
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-text);
  letter-spacing: 2px;
`;

export const WhatsAppLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #25d366;
  color: white;
  padding: 14px 24px;
  border-radius: var(--radius-md);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition);
  margin-bottom: 16px;

  &:hover {
    background: #1da851;
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(37, 211, 102, 0.3);
  }
`;

export const CloseBtn = styled.button`
  background: none;
  border: none;
  color: var(--color-text-muted);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 8px 20px;
  transition: var(--transition);

  &:hover {
    color: var(--color-primary);
  }
`;
