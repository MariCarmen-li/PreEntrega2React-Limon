import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
  const { id } = useParams();

  // Utiliza los datos mockeados o carga los detalles del producto con el ID proporcionado.

  return (
    <div>
      <h1>Product Detail for ID: {id}</h1>
      {/* Renderiza los detalles del producto aquí */}
    </div>
  );
};

export default ItemDetail;
