import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { addBasket } from "../../redux/features/basketSlice";

const Cards = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
 


  const addToBasket = () => {
    dispatch(addBasket(product));
    console.log(product);
  };

  return (
    <div>
      <Card style={{ width: "18rem" ,marginTop:"10px"}}>
        <Card.Img
          variant="top"
          src={product.image}
          onClick={() => navigate(`/productdetail/${product._id}`, product)}
        />
      
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>${product.price}.00</Card.Text>
          <Button variant="success" onClick={() => addToBasket(product)}>
            Add to Basket
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;