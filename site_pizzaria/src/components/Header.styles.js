import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: #fa6868;
  color: white;
  padding: 20px 30px;
  border-bottom: 4px solid #99363f;
  border-radius: 2px 2px 20px 20px;
`;

export const Content = styled.div`
  max-width: 1200px;

  margin: auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
// Logo é um Link estilizado, por isso usamos styled(Link)
export const Logo = styled(Link)`
  font-size: 1.7rem;
  font-weight: bold;
  font-style: italic;
  text-decoration: none;
  color: whitesmoke;
  margin-left: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  margin-right: 1.4rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: whitesm;
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
