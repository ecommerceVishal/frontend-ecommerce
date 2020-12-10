import React, { Component } from "react";
import Rating from "./Rating";

class Product extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="card" key={product._id}>
        <a href={`/product/${product._id}`}>
          <img className="medium" src={product.image} alt={product.name} />
        </a>
        <div className="card-body">
          <a href={`/product/${product._id}`}>
            <h2>{product.name}</h2>
          </a>
          <Rating rating={product.rating} numReview={product.numReview} />
          <div className="price">${product.price}</div>
        </div>
      </div>
    );
  }
}

export default Product;