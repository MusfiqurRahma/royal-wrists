import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
      const { _id,name, title, image, price } = product;
      return (
        <div className="four wide column product-container" key={_id}>
            <div className="ui link cards">
              <div className="card">
                <div className="image">
                  <img src={image} alt={title} style={{height:'300px'}}/>
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">{name}</div>
                <div className="meta">$ {price}</div>
                <Link to={`/product/${_id}`}><Button style={{background:'gray',border:'1px solid gray'}}>Buy Now</Button></Link>
                </div>
              </div>
            </div>
        </div>
      );
    });
    return <>{renderList}</>;
  };
export default ProductComponent;