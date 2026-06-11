import { useCart } from "../context/CartContext";

export default function CartSidebar({ open, onClose }) {
  const { cart, increaseQty, decreaseQty, removeFromCart, total } = useCart();

  return (
    <>
      <div className={open ? "cart-overlay open" : "cart-overlay"} onClick={onClose}></div>

      <div className={open ? "cart-sidebar open" : "cart-sidebar"}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-content">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={`/images/${item.image}`} alt={item.name} />
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.price} kr</p>

                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <h3>Total: {total} kr</h3>
        </div>
      </div>
    </>
  );
}
