import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  margin: 40px 0;

  Img {
    width: 400px;
    border-radius: 10px;
  }

  div {
    max-width: 280px;
  }

  p {
    font-size: 18px;
    margin: 10px 0 20px;
  }

  a {
    display: inline-block;
    background-color: #e63946;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;

    transition: background-color 0.3s;

    &:hover {
      background-color: #c1121f;
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #222;
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  margin: 40px 0 20px;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;

  margin-bottom: 40px;
`;
