import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import * as Styles from "./CartPage.styles";

const CartPage = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <Styles.Container>
        <Styles.EmptyState>
          <p>Seu carrinho está vazio!</p>
          <Styles.BackLink to="/cardapio">Ver Cardápio</Styles.BackLink>
        </Styles.EmptyState>
      </Styles.Container>
    );
  }

  return (
    <Styles.Container>
      <Styles.PageTitle>Seu Carrinho</Styles.PageTitle>

      <div>
        {items.map((i) => (
          <Styles.CartItem key={i.key}>
            <Styles.ItemImage src={i.image} alt={i.name} />
            <Styles.ItemInfo>
              <h3>{i.name}</h3>
              <p>R$ {i.price.toFixed(2)}</p>
            </Styles.ItemInfo>
            <Styles.ItemActions>
              <Styles.QtyInput
                type="number"
                min={1}
                value={i.quantity}
                onChange={(e) => updateQuantity(i.key, Number(e.target.value))}
              />
              <Styles.RemoveBtn onClick={() => removeItem(i.key)}>
                Remover
              </Styles.RemoveBtn>
            </Styles.ItemActions>
          </Styles.CartItem>
        ))}
      </div>

      <Styles.Summary>
        <h3>Resumo do Pedido</h3>
        <Styles.TotalRow>
          <span>Total</span>
          <strong>R$ {subtotal.toFixed(2)}</strong>
        </Styles.TotalRow>
        <Styles.CheckoutBtn onClick={() => navigate("/checkout")}>
          Finalizar Pedido
        </Styles.CheckoutBtn>
      </Styles.Summary>
    </Styles.Container>
  );
};

export default CartPage;
