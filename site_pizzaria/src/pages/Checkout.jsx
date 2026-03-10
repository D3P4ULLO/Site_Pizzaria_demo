import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items, total, clear } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    reference: "",
    payment: "Dinheiro",
  });

  const [loading, setLoading] = useState(false);

  if (items.length === 0)
    return (
      <div>
        <p>Seu carrinho está vazio</p>
        <button onClick={() => navigate("/cardapio")}>Ver Cardapio</button>
      </div>
    );

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.address || !form.phone) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));

    clear();
    alert("Pedido enviado com sucesso!");

    navigate("/");
  }

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
          placeholder="Nome"
        />
        <input
          type="text"
          name="address"
          onChange={handleChange}
          value={form.address}
          placeholder="Endereço"
        />
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={form.phone}
          placeholder="Telefone"
        />
        <input
          type="text"
          name="reference"
          onChange={handleChange}
          value={form.reference}
          placeholder="Ponto de referência (opcional)"
        />

        <select name="payment" onChange={handleChange} value={form.payment}>
          <option>Dinheiro</option>
          <option>Cartão de Crédito</option>
          <option>Cartão de Débito</option>
          <option>Vr</option>
          <option>Pix</option>
        </select>
        <div>
          <span>Total: </span>
          <strong>R$ {total.toFixed(2)}</strong>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando Pedido..." : "Enviar Pedido"}
        </button>
      </form>
    </div>
  );
};
export default Checkout;
