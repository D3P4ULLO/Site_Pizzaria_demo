import { useState, useMemo } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import CustomSelect from "../components/CustomSelect";
import * as Styles from "./Menu.styles";

function Menu() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categoryOptions = useMemo(() => {
    const cats = ["All", ...new Set(products.map((p) => p.category))];
    return cats.map((c) => ({
      value: c,
      label: c === "All" ? "Todas as categorias" : c,
    }));
  }, []);

  const filtered = products.filter((p) => {
    const matchCategory = category === "All" || p.category === category;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section>
      <Styles.Container>
        <Styles.PageTitle>Nosso Cardápio</Styles.PageTitle>

        <Styles.FiltersBar>
          <CustomSelect
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            placeholder="Todas as categorias"
          />

          <Styles.SearchWrapper>
            <Styles.SearchInput
              type="text"
              placeholder="Buscar no cardápio..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Styles.SearchWrapper>
        </Styles.FiltersBar>

        <Styles.ProductsGrid>
          {filtered.length > 0 ? (
            filtered.map((p) => <ProductCard key={p.id} product={p} />)
          ) : (
            <Styles.EmptyMessage>Nenhum produto encontrado</Styles.EmptyMessage>
          )}
        </Styles.ProductsGrid>
      </Styles.Container>
    </section>
  );
}

export default Menu;
