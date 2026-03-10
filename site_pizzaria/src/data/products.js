const products = [
  {
    id: "p1",
    name: "Margherita",
    description: "Molho de tomate, mussarela, tomate e manjericão fresco.",
    category: "Pizzas",
    image: "/images/Pizza_Marguerita.png",
    options: [
      { size: "Pequena", price: 25 },
      { size: "Média", price: 35 },
      { size: "Grande", price: 45 },
    ],
  },
  {
    id: "p2",
    name: "Pepperoni",
    description: "Muito pepperoni e queijo extra.",
    category: "Pizzas",
    image: "/images/Pizza_Pepperoni.png",
    options: [
      { size: "Pequena", price: 30 },
      { size: "Média", price: 40 },
      { size: "Grande", price: 55 },
    ],
  },
  {
    id: "p3",
    name: "Portuguesa",
    description: "Pizza com presunto, ovos, cebola, azeitonas e ervilhas. ",
    category: "Pizzas",
    image: "/images/Pizza_Portuguesa.png",
    options: [
      { size: "Pequena", price: 30 },
      { size: "Média", price: 40 },
      { size: "Grande", price: 55 },
    ],
  },
  {
    id: "h1",
    name: "Classic Burger",
    description:
      "Pão brioche, Carne 180g, queijo, alface, tomate e molho especial.",
    category: "Hambúrgueres",
    image: "/images/Burger_Tradicional.jpg",
    options: [{ size: "Único", price: 28 }],
  },
  {
    id: "h2",
    name: "Bacon Supreme",
    description:
      "Pão brioche, Carne 180g, Bacon crocante, cheddar e cebola caramelizada.",
    category: "Hambúrgueres",
     image: "/images/Burguer_Bacon.png",
    options: [{ size: "Único", price: 34 }],
  },
];

export default products;
