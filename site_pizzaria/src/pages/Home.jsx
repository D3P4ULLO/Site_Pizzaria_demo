import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import * as Styles from "./Home.styles";

const Home = () => {
  const destaque = products.slice(0, 3);

  return (
    <section>
      <Styles.Container>
        {/* HERO */}
        <Styles.HeroSection>
          <div>
            <Styles.Title>
              Bem-vindo ao <span>Dons Pizzas </span>!
            </Styles.Title>
            <p>
              Sabor artesanal direto do forno para a sua mesa. Faça seu pedido
              online e receba em casa.
            </p>
            <Link to="/cardapio">Ver nosso Cardápio</Link>
          </div>
          {destaque[0] && <img src={destaque[0].image} alt="Pizza destaque" />}
        </Styles.HeroSection>

        {/* COMO FUNCIONA */}
        <Styles.SectionTitle>Como Funciona</Styles.SectionTitle>

        <Styles.HowItWorksSection>
          <Styles.StepsGrid>
            <Styles.StepCard>
              <Styles.StepEmoji>📋</Styles.StepEmoji>
              <Styles.StepContent>
                <Styles.StepNumber>1</Styles.StepNumber>
                <Styles.StepTitle>Escolha</Styles.StepTitle>
                <Styles.StepText>
                  Navegue pelo nosso cardápio e escolha suas pizzas e
                  hambúrgueres favoritos.
                </Styles.StepText>
              </Styles.StepContent>
            </Styles.StepCard>

            <Styles.StepCard>
              <Styles.StepEmoji>🛒</Styles.StepEmoji>
              <Styles.StepContent>
                <Styles.StepNumber>2</Styles.StepNumber>
                <Styles.StepTitle>Peça</Styles.StepTitle>
                <Styles.StepText>
                  Adicione ao carrinho, informe seu endereço e finalize o pedido
                  em poucos cliques.
                </Styles.StepText>
              </Styles.StepContent>
            </Styles.StepCard>

            <Styles.StepCard>
              <Styles.StepEmoji>🏍️</Styles.StepEmoji>
              <Styles.StepContent>
                <Styles.StepNumber>3</Styles.StepNumber>
                <Styles.StepTitle>Receba</Styles.StepTitle>
                <Styles.StepText>
                  Relaxe! Entregamos quentinho na sua porta com rapidez e
                  carinho.
                </Styles.StepText>
              </Styles.StepContent>
            </Styles.StepCard>
          </Styles.StepsGrid>
        </Styles.HowItWorksSection>

        {/* DESTAQUES */}
        <Styles.SectionTitle>Destaques</Styles.SectionTitle>

        <Styles.ProductsGrid>
          {destaque.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </Styles.ProductsGrid>

        {/* BANNER PROMOCIONAL */}
        <Styles.PromoBanner>
          <Styles.PromoContent>
            <Styles.PromoTag>Oferta Especial</Styles.PromoTag>
            <Styles.PromoTitle>
              Frete grátis na primeira compra!
            </Styles.PromoTitle>
            <Styles.PromoText>
              Peça agora pelo site e ganhe entrega gratuita no seu primeiro
              pedido. Sem código, sem complicação.
            </Styles.PromoText>
          </Styles.PromoContent>
          <Styles.PromoButton to="/cardapio">
            Aproveitar Agora
          </Styles.PromoButton>
        </Styles.PromoBanner>

        {/* CTA FINAL */}
        <Styles.CtaSection>
          <Styles.CtaEmoji>🍕</Styles.CtaEmoji>
          <Styles.CtaTitle>Bateu aquela fome?</Styles.CtaTitle>
          <Styles.CtaText>
            Não perca tempo! Explore nosso cardápio completo e peça a melhor
            pizza da cidade sem sair de casa.
          </Styles.CtaText>
          <Styles.CtaButton to="/cardapio">Pedir Agora</Styles.CtaButton>
        </Styles.CtaSection>
      </Styles.Container>
    </section>
  );
};

export default Home;
