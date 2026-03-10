import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

// Importação de estilos
import * as Styles from "./Home.styles";

const Home = () => {
  const destaque = products.slice(0, 3);

  return (
    <section>
      <Styles.Container>
        <Styles.HeroSection>
          <div>
            <Styles.Title>Bem vindo ao Pizzas Dons !!</Styles.Title>
            <p>Faça seu pedido online !</p>
            <Link to="/cardapio">Ver nosso Cardápio</Link>
          </div>

          {destaque[0] && <img src={destaque[0].image} alt="Pizza destaque" />}
        </Styles.HeroSection>

        <Styles.SectionTitle>Destaques</Styles.SectionTitle>

        <Styles.ProductsGrid>
          {destaque.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Styles.ProductsGrid>
      </Styles.Container>
    </section>
  );
};

export default Home;
