import React, { useEffect, useState } from "react";

import Table from "react-bootstrap/Table";
import "./AdminPanel.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addProducts, deleteProducts, fetchProducts, searchProduct, sortAz, sortHighToLow, sortLowToHigh, sortZa } from "../../redux/features/productSlice";
import { productSchema } from "../../schema/productSchema";
import "./AdminPanel.scss"

const AdminPanel = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [open, setOpen] = useState(false);

  const { values, handleChange, handleSubmit, errors, resetForm } = useFormik({
    initialValues: {
      image: "",
      name: "",
      price: "",
      category: "",
    },
    onSubmit: (values) => {
      dispatch(addProducts(values));
      resetForm();
      setOpen(false);
    },
    validationSchema: productSchema,
  });

  

  return (
    <div>
      <div className="container">
        {open && (
          <form
            action=""
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            <h3>Create Product</h3>
            <div className="form-group">
              <label htmlFor="image">Image</label>
              <div className="text-danger">{errors.image}</div>
              <input
                type="text"
                id="image"
                className="form-control"
                onChange={handleChange}
                value={values.image}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <div className="text-danger">{errors.name}</div>
              <input
                type="text"
                id="name"
                className="form-control"
                onChange={handleChange}
                value={values.name}
              />
            </div>
            <div className="form-group">
              <label htmlFor="price">Price</label>
              <div className="text-danger">{errors.price}</div>
              <input
                type="text"
                id="price"
                className="form-control"
                onChange={handleChange}
                value={values.price}
              />
            </div>
            <div className="form-group">
              <label htmlFor="category">Category</label>

              <div className="text-danger">{errors.category}</div>
              <input
                type="text"
                id="category"
                className="form-control"
                onChange={handleChange}
                value={values.category}
              />
            </div>
            <button className="btn btn-danger">Add</button>
            <button className="btn btn-secondary" onClick={()=>setOpen(!open)}>Close</button>
          </form>
        )}

        <div className="d-flex justify-content-between p-3">
          <div>
            <button className="btn btn-success" onClick={() => setOpen(!open)}>
              Create
            </button>
          </div>
          <div>
            <input
              type="text"
              onChange={(e) => dispatch(searchProduct(e.target.value))}
            />
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-primary"
              onClick={() => dispatch(sortAz())}
            >
              AZ
            </button>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(sortZa())}
            >
              ZA
            </button>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(sortLowToHigh())}
            >
              low to high
            </button>
            <button
              className="btn btn-primary"
              onClick={() => dispatch(sortHighToLow())}
            >
              high to low
            </button>
          </div>
        </div>

        <div>
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
              {products && products.length > 0 ? (
                products.map((item) => (
                  <tr key={item._id}>
                    <td style={{
                        width:"300px"
                    }}>
                      <img src={item.image} alt="" style={{
                        width:"100%"
                        ,height:"100%"
                      }} />
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => dispatch(deleteProducts(item._id))}
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
                    Not product
                  </th>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;