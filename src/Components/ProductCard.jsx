import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ id, image, name, price }) {
  // Debug logs (keep these until we fix the undefined ID issue)
  console.log("🔥 ProductCard LOADED from:", import.meta.url);
  console.log("🔥 ProductCard received id:", id);

  const { addToCart } = useCart();

  const product = {
    id,
    name,
    price,
    image,
  };

  return (
    <div className="product-card">
      <img
        src={`/images/${image}`}
        alt={name}
        className="product-image"
      />

      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price} kr</p>

      <div className="card-buttons">
        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>

        <Link
          to={`/product/${id}`}
          className="details-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
