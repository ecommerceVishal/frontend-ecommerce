import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//import axios from "axios";
//import data from "../data/data";
import Product from "../component/Product";
import LoadingBox from "../component/LoadingBox";
import MessageBox from "../component/MessageBox";
import { listProducts } from "../actions/productAction";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const productList = useSelector(state => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     setLoading(true);
    //     const { data } = await axios.get("/api/products");
    //     setLoading(false);
    //     setProducts(data);
    //   } catch (err) {
    //     setError(err.message);
    //     setLoading(false);
    //   }
    // };
    // fetchData();
    dispatch(listProducts());
  }, []);
  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row centre">
          {products.map(product => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

export default HomeScreen;
