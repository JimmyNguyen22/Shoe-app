import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function HomeMobile() {
  // lấy dữ liệu từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);

  const renderProduct = () => {
    return arrProduct.map((prod, index) => {
      return (
        <div className="d-flex mt-2" key={index}>
          <div className="w-25">
            <img src={prod.image} alt="..." className="w-100" />
          </div>
          <div className="w-75">
            <h3>{prod.name}</h3>
            <p>{prod.description}</p>
            <NavLink to={`/detail/${prod.id}`} className="btn btn-dark">
              Detail
            </NavLink>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="container">
      <h3 className="text-center">Shoe app</h3>
      {renderProduct()}
    </div>
  );
}
