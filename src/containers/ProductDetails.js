import React, { useEffect } from 'react';
import { Card, Button} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";

const ProductDetails = () => {
  const {productId}= useParams();
    const dispatch = useDispatch();
    // console.log(productId);

    useEffect(() => {
        fetch(`http://localhost:5000/addProducts/${productId}`)
            .then(res => res.json())
            .then(data => {
                dispatch(selectedProduct(data[0]));
                // console.log(data);
            })
        return () => {
            dispatch(removeSelectedProduct());
        }
    }, [productId])
  
    const product = useSelector((state) => state.product);
    console.log(product);
    const { image,title, description, price} = product;

  return (
             <div>
                <Card>
                  <Card.Img
                      variant="top"
                      src={image} style={{
                          width: '25%',
                          margin: "auto"
                      }} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <h3>${price}</h3>
                        <Card.Text>
                            {description}
            </Card.Text>
                      <Link to="/home">
                          <Button>Go back Home</Button>
                      </Link>
                      <Button
                          variant="outline-primary mx-2">Purchase</Button>
                    </Card.Body>
                </Card>
            </div>
           
  );
};

export default ProductDetails;