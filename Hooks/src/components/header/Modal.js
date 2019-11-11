import React, { useState, useRef, useContext } from 'react';
import * as Context from '../../context';

export default function Modal() {
  let dialog = useRef();

  const newProduct = {
    name: '',
    price: '',
    available: '',
    amount: 0,
    id: (Math.floor(Math.random() * 1000))
  };
  const [product, setProduct] = useState(newProduct);
  const {products, setProducts} = useContext(Context.Products);

  function addNewProduct(product) {
    const newProduct = {...product};
    setProducts([...products, newProduct]);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewProduct(product);
    closeDialog();
  }

  function inputChange(event) {
    setProduct({...product, [event.target.name]: event.target.value });
  }

  function showDialog() {
    dialog.showModal();
  }

  function closeDialog() {
    dialog.close();
  }

  function renderDialog() {
    return (
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <input
          type="text"
          name="name"
          value={product.name}
          placeholder="Name"
          onChange={event => inputChange(event)}
        />
        <input
          type="number"
          name="price"
          value={product.price}
          placeholder="Price"
          onChange={event => inputChange(event)}
        />
        <input
          type="number"
          name="available"
          value={product.available}
          placeholder="Quantity"
          onChange={event => inputChange(event)}
        />
        <div>
          <button type="submit">Submit</button>
          <button onClick={() => closeDialog()} type="button">
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <button onClick={() => showDialog()}>Add product</button>
      <dialog className="dialog" ref={ref => dialog = ref}>
        {renderDialog()}
      </dialog>
    </div>
  );
}
