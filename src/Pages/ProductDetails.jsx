import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="details-page">
      <div className="details-container">

        {/* LEFT COLUMN */}
        <div className="details-left">
          <img
            src={`/images/${product.image}`}
            alt={product.name}
            className="details-image"
          />

          <h1>{product.name}</h1>
          <p className="details-description">{product.description}</p>

          <p className="details-grams"><strong>Weight:</strong> {product.grams} g</p>

          <p className="details-price">{product.price} kr</p>

          <button
            className="add-btn details-add-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>

        {/* RIGHT COLUMN */}
        <div className="details-right">
          <h2>Nutrition Facts</h2>

          <table className="nutrition-table">
            <tbody>
              <tr>
                <td>Calories</td>
                <td>{product.nutrition.calories} kcal</td>
              </tr>
              <tr>
                <td>Sugar</td>
                <td>{product.nutrition.sugar} g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>{product.nutrition.fat} g</td>
              </tr>
              <tr>
                <td>Carbs</td>
                <td>{product.nutrition.carbs} g</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>{product.nutrition.protein} g</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
