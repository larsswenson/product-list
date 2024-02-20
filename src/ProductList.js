import React from 'react';

// Define product array
const ProductList = () => {
  const products = [
    {
        id: 1,
        name: "Fender Telecaster",
        description: "Solid body bolt-on neck electric guitar",
        price: 1599
      },
      {
        id: 2,
        name: "Gibson Les Paul",
        description: "Solid body neck-through electric guitar",
        price: 2299
      },
      {
        id: 3,
        name: "Rickenbacker 360",
        description: "Semi-hollow body neck-through electric guitar",
        price: 2899
      },

  ];
  
// Map over array and render each product
  return (
    <div className="product-list">
      {products.map(product => (
        <div key = {product.id} className = "product-card">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
