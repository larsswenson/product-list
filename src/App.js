import React from 'react';
import ProductList from './ProductList';
import './App.css';

// Render product list component 
const App = () => {
  return (
    <div>
        <div className = "container">
          <h1>Product List</h1>
          <ProductList />
        </div>
    </div>
  );
};

export default App;
