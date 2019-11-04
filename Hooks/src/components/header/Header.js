import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "./Modal";

export class Header extends Component {
  render() {
    let result = this.props.inCart.map(({ amount }) => amount)
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
}

const mapStateToProps = state => ({
  inCart: state.inCart
});

export default connect(mapStateToProps, {})(Header);
