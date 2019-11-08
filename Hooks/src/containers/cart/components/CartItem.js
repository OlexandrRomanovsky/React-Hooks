import React, { useState, useContext } from 'react';
import { Cart } from '../../../context';

// Styles
import './cart-item.css';

export default function CartItem(props) {
  const [product, setProduct] = useState(props.product);
  const {handlerIncrease, handlerDecrease} = useContext(Cart);

  return (
    <div>
      <div className='cartItemBox'>
        <div>
          <div>{product.name}</div>
          <div>price: {product.price}</div>
        </div>
        <div className='inputButtonBox'>
          {product.amount > 1 && (
              <button onClick={handlerDecrease(product)}>-</button>
            )}
          <div>{product.amount}</div>
          {product.amount < product.available && (
            <button onClick={handlerIncrease(product)}>+</button>
          )}
          <button
            className='btnElement'
            onClick={() => props.handleDeleteClick(product)}
          >
            X
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
}
