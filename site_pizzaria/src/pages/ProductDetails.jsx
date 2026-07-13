import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import CustomSelect from "../components/CustomSelect";
import * as Styles from "./Product.styles";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === id);
  const { addItem } = useCart();

  const [selected, setSelected] = useState(product?.options[0]);
  const [qty, setQty] = useState(1);

  if (!product)
    return (
      <Styles.Container>
        <p>Produto não encontrado</p>
      </Styles.Container>
    );

  const sizeOptions = product.options.map((o) => ({
    value: o.size,
    label: `${o.size} — R$ ${o.price.toFixed(2)}`,
  }));

  function handleSizeChange(size) {
    setSelected(product.options.find((o) => o.size === size));
  }

  function handleAdd() {
    addItem(product, selected, qty);
    navigate("/carrinho");
  }

  return (
    <Styles.Container>
      <Styles.ProductLayout>
        <Styles.ProductImage src={product.image} alt={product.name} />
        <Styles.Info>
          <Styles.ProductName>{product.name}</Styles.ProductName>
          <Styles.ProductDesc>{product.description}</Styles.ProductDesc>

          <Styles.FormGroup>
            <Styles.Label>Tamanho</Styles.Label>
            <CustomSelect
              options={sizeOptions}
              value={selected.size}
              onChange={handleSizeChange}
              placeholder="Selecione o tamanho"
            />
          </Styles.FormGroup>

          <Styles.FormGroup>
            <Styles.Label>Quantidade</Styles.Label>
            <Styles.NumberInput
              type="number"
              min={1}
              value={qty}
              onChange={(e) => setQty(Number(e.target.value || 1))}
            />
          </Styles.FormGroup>

          <Styles.PriceTag>
            R$ {(selected.price * qty).toFixed(2)}
          </Styles.PriceTag>

          <Styles.AddButton onClick={handleAdd}>
            Adicionar ao Carrinho
          </Styles.AddButton>
        </Styles.Info>
      </Styles.ProductLayout>
    </Styles.Container>
  );
}

export default ProductDetails;
