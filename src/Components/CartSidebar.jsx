import React from "react";

export default function CartSidebar({ open, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div className={open ? "cart-overlay open" : "cart-overlay"} onClick={onClose}></div>

      {/* Sidebar */}
      <div className={open ? "cart-sidebar open" : "cart-sidebar"}>
        <div className="cart-header">
          <h2>Your Cart</h2>
          <button className="cart-close" onClick={onClose}>✕</button>
        </div>

        <div className="cart-content">
          <p>Your cart is empty.</p>
        </div>
      </div>
    </>
  );
}
