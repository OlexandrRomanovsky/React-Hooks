import React, {useContext, useState} from 'react';
import * as Context from '../../../context';

export default function Product({product}) {
  const {addCartItem} = useContext(Context.Products);
  const [prod, setProd] = useState(product);

  return (
    <div className="product_list_item">
      <p>{product.name}</p>
      <p>Price: {product.price}</p>
      <p>
        {product.available ? 'In stock' : 'Sold out'}
      </p>
      {product.available ? (
        <button
          className="add-to-cart-btn"
          onClick={() => addCartItem(prod)}
        >
          Buy
        </button>
      ) : null}
    </div>
  );
}
