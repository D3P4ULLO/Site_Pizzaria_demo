import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-primary-dark) 100%
  );
  color: white;
  padding: 0;
  position: stick;
  top: 0;
  z-index: 100;
  box-shadow: 0 4px 20px rgba(193, 39, 45, 0.25);
`;

export const Content = styled.div`
  max-width: 1200px;

  margin: auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Logo é um Link estilizado, por isso usamos styled(Link)
export const Logo = styled(Link)`
  font-family: var(--font-display);
  font-size: 28px;
  font-weight: 900;
  font-style: italic;
  text-decoration: none;
  color: white;
  letter-spacing: -0.5px;
  display: flex;
  align-items: center;
  gap: 10px
  transition: var(--transition);

  &::before{
    content: '🍕';
    font-style: normal;
    font-size: 32px;
  }

  &:hover {
  transform: scale(1.03);
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  font-size: 15px;
  padding: 8px 18px;
  border-radius: var(--radius-xl);
  position: relative;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: white;
  }
`;

export const CartCount = styled.span`
  background: var(--color-accent);
  color: var(--color-text);
  font-size: 11px;
  font-weight: 700;
  min-width: 22px;
  height: 22px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border-radius: 20px;
  margin-left: 2px;
  animation: pop 0.3s ease;

  @keyframes pop {
    0% {
      transform: scale(0.5);
    }
    70% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;
