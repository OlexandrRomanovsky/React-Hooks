import React, {useState, useContext} from 'react';
import * as Context from '../../context';

// Components
import Product from './components/Product';

// Styles
import './product-list.css';

export default function ProductList() {
  const {products, setProducts} = useContext(Context.Products);

  function sortByPrice() {
    setProducts([...products].sort((a, b) => (b.price > a.price) ? 1 : -1));
  }

  function sortByName() {
    setProducts([...products].sort((a, b) => (a.name > b.name) ? 1 : -1));
  }

  function sortByAvailability() {
    setProducts([...products].sort((a, b) => (b.available > a.available) ? 1 : -1));
  }

  return (
    <div>
      <div>
        Sort by: {' '}
        <button onClick={sortByPrice}>Highest price</button>
        |{' '}
        <button onClick={sortByName}>Name A-Z</button>
        |{' '}
        <button onClick={sortByAvailability}>Availability</button>
      </div>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {
          products.map((product) => (
            <Product
              key={product.id}
              product={product}/>
          ))
        }
      </div>
    </div>
  );
}

