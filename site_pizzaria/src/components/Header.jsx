import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

// importação de estilos
import * as Styles from "./Header.styles";

function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.quantity, 0);
  return (
    <Styles.HeaderContainer>
      <Styles.Content>
        <Styles.Logo to="/">Pizzaria</Styles.Logo>
        <Styles.Nav>
          <Styles.NavLink to="/cardapio">Cardápio</Styles.NavLink>
          <Styles.NavLink to="/carrinho">
            Carrinho
            {count > 0 && <Styles.CartCount>{count}</Styles.CartCount>}
          </Styles.NavLink>
        </Styles.Nav>
      </Styles.Content>
    </Styles.HeaderContainer>
  );
}
export default Header;
