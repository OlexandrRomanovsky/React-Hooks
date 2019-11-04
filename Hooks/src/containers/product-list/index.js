import React, { useState, useEffect } from 'react';
import {addCartItem} from '../../actions/cart.actions';
import Product from './Product';
import './product-list.css';

function ProductList () {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (product.length === 0) {
      fetch('/prodList.json')
        .then(res => res.json())
        .then(products => {
          setProduct(products);
          return products;
        })
        .catch(function(err) {
          alert(`Fetch error: ${err}`);
        });
    }
  }, [product.length]);

  function sortByPrice() {
    setProduct([...product].sort((a, b) => (b.price > a.price) ? 1 : -1));
  }

  function sortByName() {
    setProduct([...product].sort((a, b) => (b.price > a.price) ? 1 : -1));
  }

  function sortByAvailability() {
    setProduct([...product].sort((a, b) => (b.price > a.price) ? 1 : -1));
  }

  // addCartItem = product => {
  //   this.props.addCartItem(product);
  // }

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
        {product.map((product, index) => (
          <Product
            key={product.id}
            product={product}
            index={index}
            addCartItem={addCartItem()}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
