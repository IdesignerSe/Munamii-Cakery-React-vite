import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const base = import.meta.env.BASE_URL;

export default function ProductCard({ id, image, name, price }) {

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
        src={`${base}images/${image}`}
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
