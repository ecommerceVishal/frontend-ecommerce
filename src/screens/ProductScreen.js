import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//import data from "../data/data";
import Rating from "../component/Rating";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import { detailsProduct } from "../actions/productAction";

const ProductScreen = props => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;
  //const product = data.products.find(x => x._id === props.match.params.id);
  // if (!product) {
  //   return <div>Product Not Found</div>;
  // }

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  const addToCardHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/">Back To Home</Link>
          <div className="row top">
            <div className="col-2">
              <img className="large" src={product.image} alt={product.name} />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReview={product.numReview}
                  />
                </li>
                <li>Price: {product.price}</li>
                <li>
                  Description:
                  <p>{product.description}</p>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStoke > 0 ? (
                          <span className="success">In Stoke</span>
                        ) : (
                          <span className="error">Out Of Stoke</span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStoke > 0 && (
                    <>
                      <li>
                        <div className="row">
                          <div>Qty</div>
                          <div>
                            <select
                              value={qty}
                              onChange={e => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStoke).keys()].map(
                                x => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          className="primary block"
                          onClick={addToCardHandler}
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProductScreen;
