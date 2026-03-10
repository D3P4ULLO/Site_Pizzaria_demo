import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #fa6a62;
  color: white;
  padding: 16px 0px;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Logo é um Link estilizado, por isso usamos styled(Link)
export const Logo = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  color: white;
  margin-left: 0px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;

  position: relative;

  &:hover {
    opacity: 0.8;
  }
`;

export const CartCount = styled.span`
  background: white;
  color: #e64956;
  font-size: 12px;
  font-weight: bold;

  padding: 4px 8px;
  border-radius: 20px;

  margin-left: 6px;
`;
