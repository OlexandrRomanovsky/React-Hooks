import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Components
import SideBar from "./components/sidebar";
import Cart from "./containers/cart";
import ProductList from "./containers/product-list";
import Header from "./components/header/Header";

// CSS
import "./App.css";

export default class App extends Component {
  state = {
    showForm: true
  };

  showForm = () => {
    this.setState({ showForm: !this.state.showForm }, () => console.log('this.state.showForm', this.state.showForm));
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header showForm={this.showForm} />
          {this.state.showForm && (
            <div className="App-wrapper">
              <SideBar />
              <Switch>
                <Route
                  path="/product"
                  render={props => (
                    <React.Fragment>
                      <ProductList />
                    </React.Fragment>
                  )}
                />
                <Route path="/cart" component={Cart} />
              </Switch>
            </div>
          )}
        </div>
      </Router>
    );
  }
}
