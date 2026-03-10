import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

// Importação de estilos
import * as Styles from "./Product.styles";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selected, setSelected] = useState(product.options[0]);
  const [qty, setQty] = useState(1);

  if (!product) return <p>Produto não encontrado</p>;

  function handleAdd() {
    addItem(product, selected, qty);
    navigate("/carrinho");
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div>
          <label>Tamanho</label>
          <select
            value={selected.size}
            onChange={(e) =>
              setSelected(
                product.options.find((o) => o.size === e.target.value)
              )
            }
          >
            {product.options.map((o) => (
              <option key={o.size} value={o.size}>
                {o.size} - R$ {o.price.toFixed(2)}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Quantidade</label>
          <input
            type="number"
            min={""}
            value={qty}
            onChange={(e) => setQty(Number(e.target.value || 1))}
          />
        </div>
        <button onClick={handleAdd}>Adicionar ao carrinho</button>
      </div>
    </div>
  );
}

export default ProductDetails;
