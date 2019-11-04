import React, { Component } from "react";
import { connect } from "react-redux";
import { decreesOfAvailable } from "../../actions/products.action";

class Product extends Component {
  state = {
    clicks: 0,
    available: this.props.product.available
  };

  render() {
    const { product } = this.props;

    return (
      <div className="product_list_item">
        <p>{this.props.product.name}</p>
        <p>Price: {this.props.product.price}</p>
        <p>
          {product.available ? "In stock" : "Sold out" }
        </p>
        {product.available ? (
          <button
            className="add-to-cart-btn"
            onClick={() => {
              this.addToCart(this.props.product);
              this.props.decreesOfAvailable(this.props.product);
              this.setState({clicks: ++this.state.clicks});
              // console.log("this.state.clicks", this.state.clicks);
              // console.log("this.state.available", this.state.available);
            }}
          >
            Add to card
          </button>
        ) : null}
      </div>
    );
  }

  addToCart = product => {
    this.props.addCartItem(product);
  };
}


export default connect(
  null,
  { decreesOfAvailable }
)(Product);
