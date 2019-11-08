import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import * as Context from './context';
// Components
import SideBar from './components/sidebar';
import CartList from './containers/cart';
import ProductList from './containers/product-list';
import Header from './components/header/Header';
// Styles
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // rewrite on async
  useEffect(() => {
    if (products.length === 0) {
      fetch('/prodList.json')
        .then(res => res.json())
        .then(products => {
          setProducts(products);
          return products;
        })
        .catch(function(err) {
          alert(`Fetch error: ${err}`);
        });
    }
  }, []);

  useEffect(() => {console.log('product list', products); console.log('cart list ', cart);});

    // Actions from product page

  function addCartItem(prod) {
    const inCart = cart.find(i => i.id === prod.id);

    if (!inCart) {
      changeOfAmountAndAvailableInProductList(prod);
      addProductToCart(prod);
    }

    if (inCart) {
      changeOfAmountAndAvailableInProductList(prod);
      changeOfAmountAndAvailableInCart(prod);
    }
  }

  function changeOfAmountAndAvailableInProductList(prod) {
    setProducts(products.map((item) => {
      if (item.id === prod.id) {
        ++item.amount;
        --item.available;
      }
      return item;
    }));
  }

  function changeOfAmountAndAvailableInCart(prod) {
    let newCart = cart.map((item) => {
      if(item.id === prod.id) {
        item.amount = item.amount + 1;
        item.available = item.available - 1;
      }
      return item;
    });
    setCart(newCart);
  }

  function addProductToCart(prod) {
    setCart([...cart, {...prod}]);
  }

  // Actions from cart page

  function handlerIncrease(prod) {
    increaseCartItem(prod);
    decreesInProductList(prod);
  };

  function increaseCartItem(prod) {
      let newCartArr = cart.map((item) => {
        if (item.id === prod.id) {
          item.amount = item.amount + 1;
          item.available = item.available - 1;
        }
        return item;
      })
      setCart(newCartArr);
    }

    function decreesInProductList(prod) {
      let newProductsArr = products.map((item) => {
        if (item.id === prod.id) {
          item.amount = item.amount + 1;
          item.available = item.available - 1;
        }
        return item;
      })
      setCart(newProductsArr);
    }

  function handlerDecrease(prod) {
    decrementCartItem(prod);
    increaseInProductList(prod);
  };

  function decrementCartItem(prod) {
    let newCartArr = cart.map((item) => {
      if (item.id === prod.id) {
        item.amount = item.amount - 1;
        item.available = item.available + 1;
      }
      return item;
    })
    setCart(newCartArr);
  }

  function increaseInProductList(prod) {
    let newProductsArr = cart.map((item) => {
      if (item.id === prod.id) {
        item.amount = item.amount - 1;
        item.available = item.available + 1;
      }
      return item;
    })
    setProducts(newProductsArr);
  }

  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="App-wrapper">
          <SideBar />
          <Context.Products.Provider value={{products, setProducts, addCartItem}}>
            <Context.Cart.Provider value={{handlerIncrease, handlerDecrease}}>
              <Switch>
                <Route path="/product" component={ProductList}/>
                <Route path="/cart" component={CartList}/>
              </Switch>
            </Context.Cart.Provider>
          </Context.Products.Provider>
        </div>
      </div>
    </Router>
  );
}
