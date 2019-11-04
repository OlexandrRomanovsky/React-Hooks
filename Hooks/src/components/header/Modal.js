import React, { Component } from "react";
import { addNewProduct } from "../../actions/products.action";
import { connect } from "react-redux";

class Modal extends Component {
  state = {
    name: "",
    price: "",
    available: "",
    id: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewProduct(this.state);
    this.closeDialog();
  };

  inputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  showDialog = () => {
    this.dialog.showModal();
  };

  closeDialog = () => {
    this.dialog.close();
  };

  renderDialog() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Name"
          onChange={event => this.inputChange(event)}
        />
        <input
          type="number"
          name="price"
          value={this.state.price}
          placeholder="Price"
          onChange={event => this.inputChange(event)}
        />
        <input
          type="number"
          name="available"
          value={this.state.available}
          placeholder="Quantity"
          onChange={event => this.inputChange(event)}
        />
        <div>
          <button type="submit">Submit</button>
          <button onClick={this.closeDialog} type="button">
            Cancel
          </button>
        </div>
      </form>
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.showDialog}>Add product</button>
        <dialog className="dialog" ref={ref => (this.dialog = ref)}>
          {this.renderDialog()}
        </dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { addNewProduct }
)(Modal);
