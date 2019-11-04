import React, {Component} from 'react';
import {connect} from 'react-redux';

import './cart.css';
import {removeFromCart} from '../../actions/cart.actions';
import {increaseOfAvailableDeleted} from '../../actions/products.action';
import CartItem from './components/CartItem';

export class Cart extends Component {
  state = {
      showSummary: false
  };


  handleDeleteClick = item => {
    this.props.removeFromCart(item.id);
    console.log('item', item);
    this.props.increaseOfAvailableDeleted(item);
  };

  handleNextClick = () => {
    this.setState({showSummary: true});
  };

  getTotalPrice() {
    return this.props.inCart.reduce(
      (sum, item) => sum + item.price * item.amount,
      0
    );
  }

  renderItems() {
    return (
      <div>
        {this.props.inCart.map((item, index) => (
          <CartItem
            key={item.id}
            item={item}
            index={index}
            handleDeleteClick={this.handleDeleteClick}
          />
        ))}
      </div>
    );
  }

  renderSummary() {
    return (
      <div>
        <div>
          <h2>Summary</h2>
          {this.props.inCart.map(({name, price, amount}) => (
            <div>
              {name}<br/>
              Price: {price} | Amount: {amount}
              <hr/>
              <br/>
            </div>
          ))}
          <h3>Total: {this.getTotalPrice()}</h3>
          <h2>Successful shopping</h2>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="App-cart">
          {this.props.inCart.length ? (
            <div>
              {this.state.showSummary ? (
                this.renderSummary()
              ) : (
                <div>
                  {this.renderItems()}
                  <button onClick={this.handleNextClick}>Next</button>
                </div>
              )}
            </div>
          ) : (
            'Your cart is empty :('
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({...state});

export default connect(
  mapStateToProps,
  {removeFromCart, increaseOfAvailableDeleted}
)(Cart);
