export default function ProductCard({ image, name, price }) {
  return (
    <div className="product-card">
      <img
        src={`/images/${image}`}
        alt={name}
        className="product-image"
      />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">{price} kr</p>
    </div>
  );
}
