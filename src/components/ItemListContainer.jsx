import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../mocks';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams(); 

  useEffect(() => {
    fetchProducts(id) // Pasa el categoryId 
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div className="item-list-container">
      <h1>Productos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
