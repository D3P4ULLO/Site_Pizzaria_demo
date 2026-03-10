import React from "react";

import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const price = product.options[0].price;

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <div>
        <span>R$ {price.toFixed(2)}</span>
        <Link to={`/produto/${product.id}`}> Ver</Link>
      </div>
    </div>
  );
}
