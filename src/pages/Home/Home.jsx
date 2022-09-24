import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../components/Product/Product";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function Home() {
  // lấy dữ liệu từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getProductApi();
    dispatch(action);
  }, []);

  return (
    <div className="container">
      <h3 className="text-center">Shoe app</h3>
      <div className="row">
        {arrProduct.map((prod, index) => {
          return (
            <div className="col-3 mt-2" key={prod.id}>
              <Product product={prod}></Product>
            </div>
          );
        })}
      </div>
    </div>
  );
}
