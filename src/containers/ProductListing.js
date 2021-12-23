import React, { useEffect } from "react";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";


const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("http://localhost:5000/AddProducts")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <> 
      <h2 style={{}}>Our Gorgeous Watches</h2> <hr
        style={{
          borderBottom: '3px solid #ff8c00',
          width: '30%',
          margin: 'auto'
        }} /> <br />
    <div className="ui grid container">
    <ProductComponent />
  </div> </>
  );
};

export default ProductListing;