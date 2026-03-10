import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  const navigate = useNavigate();

  if (items.length === 0) {
    return (
      <div>
        <p>Seu carrinho está vazio!</p>
        <Link to="/cardapio">Ver Cardapio</Link>
      </div>
    );
  }
  return (
    <section>
      <div>
        {items.map((i) => (
          <div key={i.key}>
            <img src={i.image} alt={i.name} />
            <div>
              <h3>{i.name}</h3>
              <p>R${i.price.toFixed(2)}</p>
              <div>
                <input
                  type="number"
                  min={1}
                  value={i.quantity}
                  onChange={(e) =>
                    updateQuantity(i.key, Number(e.target.value))
                  }
                />
                <button onClick={() => removeItem(i.key)}>Remover Item</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <container>
        <h3>Resumo:</h3>
        <div>
          <span>Total:</span> <strong>R$ {subtotal.toFixed(2)}</strong>
        </div>
        <button onClick={() => navigate("/checkout")}>
          Finalizar meu Pedido
        </button>
      </container>
    </section>
  );
};

export default CartPage;
