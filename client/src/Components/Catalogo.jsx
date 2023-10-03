import React, { useState } from "react";
import { useEffect } from "react";
import "./catalogo.css";
function Catalogo() {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="grid-container">
      {products.map((product) => (
       <div class="card" style={{width:'18rem'}}>
       <img src={product.imageUrl} style={{width:'150px', height:'180px'}} class="card-img-top" alt="..." />
       <div class="card-body">
         <h5 class="card-title">{product.name}</h5>
         <p class="card-text">{product.description}</p>
         <a href="#" class="btn btn-primary">Comprar</a>
       </div>
     </div>
      ))}
    </div>
  );
}

export default Catalogo;
