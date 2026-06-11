import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) =>
          filter === "wedding"
            ? p.image.startsWith("wedding")
            : p.image.startsWith("cupcake")
        );

  return (
    <div className="page products-page">
      <h1 className="page-title">Our Products</h1>

      {/* FILTER BUTTONS */}
      <div className="filter-buttons">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          All
        </button>

        <button
          className={filter === "wedding" ? "active" : ""}
          onClick={() => setFilter("wedding")}
        >
          Wedding Cakes
        </button>

        <button
          className={filter === "cupcakes" ? "active" : ""}
          onClick={() => setFilter("cupcakes")}
        >
          Cupcakes
        </button>
      </div>

      {/* PRODUCT GRID */}
      <section className="product-grid">
        {filteredProducts.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            name={p.name}
            price={p.price}
          />
        ))}
      </section>
    </div>
  );
}
