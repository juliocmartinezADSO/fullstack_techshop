import React, { useState } from 'react';
import axios from 'axios';

function CrearProducto() {
  const [producto, setProducto] = useState({
    nombre: '',
    descripcion: '',
    precio: 0,
    categoria: '',
    imagenURL: '',
    stock: 0
  });

  const handleChange = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del producto
    const nuevoProducto = {
      name: producto.nombre,
      description: producto.descripcion,
      price: producto.precio,
      category: producto.categoria,
      imageUrl: producto.imagenURL,
      stock: producto.stock
    };

    // Hacer una solicitud POST al backend para crear el producto
    try {
      await axios.post('http://192.168.1.9:3000/api/products', nuevoProducto);
      alert('Producto creado con éxito');
      // Limpiar el formulario después de la creación exitosa
      setProducto({
        nombre: '',
        descripcion: '',
        precio: 0,
        categoria: '',
        imagenURL: '',
        stock: 0
      });
    } catch (error) {
      alert('Error al crear el producto');
    }
  }

  return (
    <div className="container mt-4">
      <h2>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre:</label>
          <input type="text" className="form-control" name="nombre" value={producto.nombre} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descripción:</label>
          <textarea className="form-control" name="descripcion" value={producto.descripcion} onChange={handleChange}></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Precio:</label>
          <input type="number" className="form-control" name="precio" value={producto.precio} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Categoría:</label>
          <input type="text" className="form-control" name="categoria" value={producto.categoria} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Imagen URL:</label>
          <input type="text" className="form-control" name="imagenURL" value={producto.imagenURL} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label className="form-label">Stock:</label>
          <input type="number" className="form-control" name="stock" value={producto.stock} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Crear Producto</button>
      </form>
    </div>
  );
}

export default CrearProducto;
