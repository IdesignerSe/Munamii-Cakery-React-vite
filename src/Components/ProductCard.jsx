export default function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{price} SEK</p>
      <button>Add to Cart</button>
    </div>
  );
}
