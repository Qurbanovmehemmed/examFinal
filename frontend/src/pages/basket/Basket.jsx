import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/features/productSlice";
import { deleteBasket, minusBtn, plusBtn } from "../../redux/features/basketSlice";
import { useNavigate } from "react-router";


const Basket = () => {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state.basket);
const navigate =useNavigate()
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const deleted = (item) => {
    dispatch(deleteBasket(item));
  };

  const total = basket.reduce((acc, sum) => acc + sum.price * sum.count, 0);

  const up = (item) => {
    dispatch(plusBtn(item));
  };

  return (
    <div>
      <div className="container">
        <div className="table-container">
          <Table striped bordered hover responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {basket && basket.length > 0 ? (
                basket.map((item, index) => (
                  <tr key={item._id}>
                    <td  style={{
                      width: "300px"
                    }}><img src={item.image} alt="" style={{
                      width: "100%"
                    }}   /></td>
                    <td>{item.name}</td>
                    <td>${item.price * item.count}</td>
                    <td>{item.category}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                          fontSize: "20px",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <button className="btn btn-secondary" onClick={() => up(item)}>+</button>
                        <p>{item.count}</p>
                        <button className="btn btn-secondary" onClick={() => dispatch(minusBtn(item))}>-</button>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleted(item)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th
                    colSpan={5}
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Your basket is empty
                  </th>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        <div className="total-price">
          <p>Total Price: ${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Basket;