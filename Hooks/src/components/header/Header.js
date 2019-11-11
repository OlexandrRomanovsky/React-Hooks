import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

// Component
import Modal from './Modal';
import * as Context from '../../context';

export default function Header() {
  const {cart, setCart} = useContext(Context.Cart);

  let result = cart.map(({ amount }) => amount);
  return (
    <header className="App-header">
      <Link to="/product" className="App-title">
        <h1>My simple shop</h1>
      </Link>
      <Modal />
      <Link to="/cart" className="App-title">
        <h2>Cart {result.reduce((sum, current) => sum + current, 0)}</h2>
      </Link>
    </header>
  );
}

