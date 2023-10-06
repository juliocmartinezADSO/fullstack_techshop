// Cart.js

import React from "react";

function Cart({ cart, removeFromCart }) {

  const calculateTotal = () => {
    // Calcula el total sumando los precios de los productos en el carrito
    return cart.reduce((total, product) => total + product.price, 0);
  };

//   if (!cart) {
//     // Si cart es undefined, puedes manejar este caso
//     return <p>El carrito está vacío</p>;
//   }
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product._id}>
              {product.name} - ${product.price}
              <button onClick={() => removeFromCart(product)}>Eliminar</button>
            </li>
          ))}
        </ul>
      )}
      {cart.length > 0 && (
        <p>Total: ${calculateTotal().toFixed(2)}</p>
      )}
    </div>
  );
}

export default Cart;
