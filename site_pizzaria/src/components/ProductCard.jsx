import React from "react";

import { Link } from "react-router-dom";

// importação de estilos
import * as Styles from "./ProductCard.styles.js";

export default function ProductCard({ product }) {
  const price = product.options[0].price;

  return (
    <Styles.ProductCard>
      <Styles.ProductImage src={product.image} alt={product.name} />
      <Styles.ProductTitle>{product.name}</Styles.ProductTitle>
      <Styles.ProductDescription>
        {product.description}
      </Styles.ProductDescription>
      <Styles.ProductPrice>R$ {price.toFixed(2)}</Styles.ProductPrice>
      <Styles.ViewButton to={`/produto/${product.id}`}>Ver Detalhes</Styles.ViewButton>
    </Styles.ProductCard>
  );
}
