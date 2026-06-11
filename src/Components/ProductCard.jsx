import { useCart } from "../context/CartContext";

export default function ProductCard({ image, name, price }) {
  const { addToCart } = useCart();

  const product = { id: name, name, price, image };

  return (
    <div className="product-card">
      <img
        src={`/images/${image}`}
        alt={name}
        className="product-image"
      />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price} kr</p>

      <button className="add-btn" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
