import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchProducts } from "../../redux/features/productSlice";
import { addBasket } from "../../redux/features/basketSlice";
import "./Detail.scss";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  console.log(products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const findProducts = products.find((item) => item._id === id);
  console.log(findProducts);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="detail">
            <div>
              <div className="detailImg">
                <img src={findProducts?.image} alt="" />
              </div>
            </div>
            <div >
              <p>Title: {findProducts?.name}</p>
              <p>Price: ${findProducts?.price}</p>
              <p>Category: {findProducts?.category}</p>
              <button
                className="btn btn-success"
                onClick={() => dispatch(addBasket(findProducts))}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;