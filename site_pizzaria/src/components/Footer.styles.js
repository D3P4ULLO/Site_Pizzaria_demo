import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: var(--color-text);
  color: rgba(255, 255, 255, 0.7);
  padding: 48px 24px 32px;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 32px 20px 24px;
  }
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 24px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const Brand = styled.div`
  font-family: var(--font-display);
  font-size: 24px;
  font-weight: 900;
  font-style: italic;
  color: wihte;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 4px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 1.7;
  max-width: 280px;

  @media (max-width: 768px) {
    font-size: 13px;
    max-width: 260px;
  }
`;

export const ColumnTitle = styled.h4`
  font-family: var(--font-display);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-accent);
  margin-bottom: 4px;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 2px;
  }
`;

export const FooterLink = styled.span`
  font-size: 14px;
  cursor: default;
  transition: var(--transition);

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 32px 0 20px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    margin: 20px 0 14px;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.4);
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
