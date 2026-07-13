import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import OrderModal from "../components/OrderModal";
import * as Styles from "./Checkout.styles";

const paymentOptions = [
  { value: "Dinheiro", label: "💵  Dinheiro" },
  { value: "Cartão de Crédito", label: "💳  Cartão de Crédito" },
  { value: "Cartão de Débito", label: "💳  Cartão de Débito" },
  { value: "Vr", label: "🎫  VR" },
  { value: "Pix", label: "📱  Pix" },
];

function generateOrderNumber() {
  const num = Math.floor(Math.random() * 9000) + 1000;
  return `#${num}`;
}

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
  const [orderNumber, setOrderNumber] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

    const number = generateOrderNumber();
    setOrderNumber(number);
    setShowModal(true);
    setLoading(false);
  }

  function handleCloseModal() {
    clear();
    setShowModal(false);
    navigate("/");
  }

  // Modal por cima de tudo — renderiza independente do carrinho
  if (showModal) {
    return <OrderModal orderNumber={orderNumber} onClose={handleCloseModal} />;
  }

  // Carrinho vazio (sem modal ativo)
  if (items.length === 0) {
    return (
      <Styles.Container>
        <Styles.EmptyState>
          <p>Seu carrinho está vazio</p>
          <Styles.EmptyBtn onClick={() => navigate("/cardapio")}>
            Ver Cardápio
          </Styles.EmptyBtn>
        </Styles.EmptyState>
      </Styles.Container>
    );
  }

  // Formulário normal
  return (
    <Styles.Container>
      <Styles.PageTitle>Finalizar Pedido</Styles.PageTitle>
      <Styles.Subtitle>Preencha seus dados para entrega</Styles.Subtitle>

      <form onSubmit={handleSubmit}>
        <Styles.Form>
          <Styles.InputGroup>
            <Styles.Label>Nome</Styles.Label>
            <Styles.Input
              type="text"
              name="name"
              onChange={handleChange}
              value={form.name}
              placeholder="Seu nome completo"
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <Styles.Label>Endereço</Styles.Label>
            <Styles.Input
              type="text"
              name="address"
              onChange={handleChange}
              value={form.address}
              placeholder="Rua, número, bairro"
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <Styles.Label>Telefone</Styles.Label>
            <Styles.Input
              type="text"
              name="phone"
              onChange={handleChange}
              value={form.phone}
              placeholder="(11) 99999-9999"
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <Styles.Label>Ponto de referência (opcional)</Styles.Label>
            <Styles.Input
              type="text"
              name="reference"
              onChange={handleChange}
              value={form.reference}
              placeholder="Próximo ao..."
            />
          </Styles.InputGroup>

          <Styles.InputGroup>
            <Styles.Label>Forma de pagamento</Styles.Label>
            <CustomSelect
              options={paymentOptions}
              value={form.payment}
              onChange={(val) => setForm((prev) => ({ ...prev, payment: val }))}
              placeholder="Selecione o pagamento"
            />
          </Styles.InputGroup>

          <Styles.TotalRow>
            <span>Total do pedido</span>
            <strong>R$ {total.toFixed(2)}</strong>
          </Styles.TotalRow>

          <Styles.SubmitBtn type="submit" disabled={loading}>
            {loading && <Styles.Spinner />}
            {loading ? "Enviando..." : "Enviar Pedido"}
          </Styles.SubmitBtn>
        </Styles.Form>
      </form>
    </Styles.Container>
  );
};

export default Checkout;
