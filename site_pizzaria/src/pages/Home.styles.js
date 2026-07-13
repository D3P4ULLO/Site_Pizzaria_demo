import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 60px 48px;
  margin: 32px 0;
  background: linear-gradient(
    135deg,
    var(--color-bg-alt) 0%,
    var(--color-surface) 100%
  );
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  overflow: hidden;
  position: relative;
  animation: ${fadeInUp} 0.7s ease;

  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      var(--color-accent-light) 0%,
      transparent 70%
    );
    opacity: 0.3;
    border-radius: 50%;
  }

  img {
    width: 380px;
    height: 380px;
    object-fit: cover;
    border-radius: var(--radius-lg);
    box-shadow: 0 16px 48px var(--color-shadow-strong);
    flex-shrink: 0;
  }

  div {
    max-width: 440px;
    position: relative;
    z-index: 1;
  }

  p {
    font-size: 18px;
    color: var(--color-text-muted);
    margin: 16px 0 28px;
    line-height: 1.6;
  }

  a {
    display: inline-block;
    background: var(--color-primary);
    color: white;
    padding: 14px 32px;
    border-radius: var(--radius-md);
    text-decoration: none;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.3px;
    transition: var(--transition);
    box-shadow: 0 4px 16px rgba(193, 39, 45, 0.3);

    &:hover {
      background: var(--color-primary-dark);
      transform: translateY(-2px);
      box-shadow: 0 6px 24px rgba(193, 39, 45, 0.4);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 32px 24px;
    gap: 32px;
    text-align: center;

    img {
      width: 100%;
      height: 260px;
    }

    div {
      max-width: 100%;
    }
  }
`;

export const Title = styled.h1`
  font-family: var(--font-display);
  font-size: 2.8rem;
  color: var(--color-text);
  line-height: 1.15;
  letter-spacing: -0.5px;

  span {
    corlor: var(--color-primary);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--color-text);
  text-align: center;
  margin: 56px 0 32px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  &::before,
  &::after {
    content: "";
    height: 2px;
    width: 48px;
    ackground: var(--color-accent);
    border-radius: 2px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
  margin-bottom: 60px;
  animation: ${fadeInUp} 0.7s ease 0.2s both;
`;

// Como Funciona
export const HowItWorksSection = styled.div`
  margin: 20px 0 60px;
  text-align: center;
  animation: ${fadeInUp} 0.7s ease 0.3s both;
`;

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-top: 28px;
  }
`;

export const StepCard = styled.div`
  padding: 36px 28px;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: var(--transition);
  position: relative;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px var(--color-shadow);
    border-color: var(--color-accent-light);
  }

  @media (max-width: 768px) {
    padding: 20px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
  }
`;

export const StepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;
export const StepEmoji = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

export const StepNumber = styled.span`
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-text);
  font-weight: 800;
  font-size: 13px;
  width: 28px;
  height: 28px;
  line-height: 28px;
  border-radius: 50%;
  margin-bottom: 12px;
  font-family: var(--font-body);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StepTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 4px;
  }
`;

export const StepText = styled.p`
  font-size: 14px;
  color: var(--color-text-muted);
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
    line-height: 1.5;
  }
`;

// Banner Promocional
export const PromoBanner = styled.div`
  margin: 0 0 60px;
  padding: 40px 48px;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 60%,
    #6b1115 100%
  );
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  overflow: hidden;
  position: relative;
  animation: ${fadeInUp} 0.7s ease 0.4s both;

  &::after {
    content: "🍕";
    position: absolute;
    right: -20px;
    top: -20px;
    font-size: 140px;
    opacity: 0.08;
    transform: rotate(15deg);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 32px 24px;
  }
`;

export const PromoContent = styled.div`
  position: relative;
  z-index: 1;
`;

export const PromoTag = styled.span`
  display: inline-block;
  background: var(--color-accent);
  color: var(--color-text);
  font-size: 12px;
  font-weight: 700;
  padding: 4px 14px;
  border-radiu: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 12px;
`;

export const PromoTitle = styled.h3`
  font-family: var(--font-display);
  font-size: 1.8rem;
  color: white;
  margin-botom: 8px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const PromoText = styled.p`
  font-size: 15px;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5;
`;

export const PromoButton = styled(Link)`
display: inline-block;
background: white;
color: var(--color-primary);
padding: 14px 36px;
border-radius: var(--radius-md)
font-weight: 700;
font-size: 15px;
text-decoration: none;
transition: var(--transition)
white-space: nowrap;
position: relative;
z-index: 1;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);

 &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  }
`;

// CTA Final
export const CtaSection = styled.div`
  margin: 20px 0 0;
  padding: 56px 48px;
  background: var(--color-bg-alt);
  border-radius: var(--radius-xl);
  border: 2px dashed var(--color-border);
  text-align: center;
  animation: ${fadeInUp} 0.7s ease 0.5s both;

  @media (max-width: 768px) {
    padding: 40px 24px;
  }
`;

export const CtaEmoji = styled.div`
  font-size: 56px;
  margin-bottom: 16px;
  line-height: 1;
`;

export const CtaTitle = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--color-text);
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const CtaText = styled.p`
font-size: 16px;
color: var(--color-text-muted);
margin-bottom: 28px
max-width: 480px;
margin-left: auto;
margin-right: auto;
line-height: 1.6;
`;

export const CtaButton = styled(Link)`
  display: inline-block;
  background: var(--color-primary);
  color: white;
  padding: 16px 40px;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  transition: var(--transition);
  box-shadow: 0 4px 16px rgba(193, 39, 45, 0.3);

  &:hover {
    background: var(--color-primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 8px 28px rgba(193, 39, 45, 0.4);
  }
`;
