import React, { Component } from "react";
import { connect } from "react-redux";
import { addCartItem, decrementCartItem } from "../../../actions/cart.actions";
import { decreesOfAvailable, increaseOfAvailable } from "../../../actions/products.action";

class CartItem extends Component {
  handlerIncrease = () => {
    this.props.addCartItem(this.props.item);
    this.props.decreesOfAvailable(this.props.item);
  };

  handlerDecrease = () => {
    console.log(
      "this.props.products",
      this.props.products[this.props.index].amount
    );
    this.props.decrementCartItem(this.props.item);
    this.props.increaseOfAvailable(this.props.item);
  };

  render() {
    const product = this.props.products[this.props.index];
    return (
      <div>
        <div style={cartItemBox}>
          <div>
            <div>{this.props.item.name}</div>
            <div>price: {this.props.item.price}</div>
          </div>
          <div style={inputButtonBox}>
          {product.amount > 1 && (
              <button onClick={this.handlerDecrease}>-</button>
            )}
            <div>{product.amount}</div>
            {product.amount < product.available && (
              <button onClick={this.handlerIncrease}>+</button>
            )}
            <button
              style={btnElement}
              onClick={() => this.props.handleDeleteClick(this.props.item)}
            >
              X
            </button>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

const cartItemBox = {
  marginTop: "3px",
  width: "60vw",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
};

const btnElement = {
  marginLeft: "10px",
  background: "#ea4535",
  fontSize: "20px",
  borderRadius: "50%"
};

const inputButtonBox = {
  display: "flex",
  alignItems: "center"
};

const mapStateToProps = state => ({
  products: state.inCart
});

export default connect(
  mapStateToProps,
  { addCartItem, decrementCartItem, decreesOfAvailable, increaseOfAvailable}
)(CartItem);
