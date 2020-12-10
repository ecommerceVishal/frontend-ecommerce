import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a href="index.html" className="brand">
              anand
            </a>
          </div>
          <div>
            <a href="cart.html">Cart</a>
            <a href="signing.html">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/" component={HomeScreen} exact />
        </main>
        <footer className="row centre">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
