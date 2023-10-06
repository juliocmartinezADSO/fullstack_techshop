import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Cart from "./Cart";


import "./products.css";
function Products() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]); // Nuevo estado para el carrito
  const [isCartOpen, setIsCartOpen] = useState(false); // Estado para controlar si el carrito está abierto

  useEffect(() => {
    fetch("http://192.168.1.7:3001/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al obtener los productos:", error);
      });
  }, []);
  const addToCart = (product) => {
    setCart([...cart, product]); // Agrega un producto al carrito
  };

  // Función para eliminar un producto del carrito
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter(
      (product) => product._id !== productToRemove._id
    );
    setCart(updatedCart);
  };
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen); // Cambia el estado del carrito (abrir/cerrar)
  };
  return (
    <>
<div className="cart-icon" onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="cart-count">{cart.length}</span>
      </div>
      
      {isCartOpen && <Cart cart={cart} removeFromCart={removeFromCart} />}
      <div className="grid-container">
        {products.map((product) => (
          <div className="card" key={product._id} style={{ width: "18rem" }}>
            <img
              src={product.imageUrl}
              style={{ width: "150px", height: "180px" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <h5 className="card-title">${product.price}</h5>
              <button
                onClick={() => addToCart(product)} // Agrega el producto al carrito al hacer clic en el botón
                className="btn btn-primary"
              >
                Agregar al Carrito
              </button>{" "}
            </div>
          </div>
        ))}
      </div>

    </>
  );
}

export default Products;
