import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section className="product-grid">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          image={p.image}
          name={p.name}
          price={p.price}
        />
      ))}
    </section>
  );
}
