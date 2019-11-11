import React, {useContext, useState} from 'react';
import * as Context from '../../context';
// Components
import CartItem from './components/CartItem';
// Styles
import './cart-list.css';

export default function CartList() {
  const [totalPrice, setTotalPrice] = useState(false);
  const {cart, setCart} = useContext(Context.Cart);
  const {products, setProducts} = useContext(Context.Products);

  function handleDeleteClick(prod) {
    setCart(cart.filter(item => item.id !== prod.id));
    const newProductListArr = products.map((item) => {
      if (item.id === prod.id) {
        item.available+= item.amount;
        item.amount = 0;
      }
      return item;
    });
    setProducts(newProductListArr);
  }

  function handleNextClick() {
    setTotalPrice(true);
  }

  function getTotalPrice() {
    return cart.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
  }

  function renderItems() {
    return (
      <div>
        {cart.map((product, index) => 
          <CartItem
            key={product.id}
            product={product}
            index={index}
            handleDeleteClick={handleDeleteClick}
          />
        )}
      </div>
    );
  }

  function renderSummary() {
    return (
      <div>
        <div>
          <h2>Summary</h2>
          {cart.map(({name, price, amount}) => (
            <div key={name.id}>
              {name}<br/>
              Price: {price} | Amount: {amount}
              <hr/>
              <br/>
            </div>
          ))}
          <h3>Total: {getTotalPrice()}</h3>
          <h2>Successful shopping</h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className='App-cart'>
        {cart ? (
          <div>
            {totalPrice ? (
              renderSummary()
            ) : (
              <div>
                {renderItems()}
                <button onClick={handleNextClick}>Next</button>
              </div>
            )}
          </div>
        ) : (
          <button onClick={() => alert('Buy Something')}>theme</button>
        )}
      </div>
    </div>
  );
}
