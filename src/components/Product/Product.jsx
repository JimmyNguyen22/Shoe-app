import React from "react";

export default function Product({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt="..." />
      <div className="card-body">
        <p>{product.name}</p>
        <p>{product.price}</p>
        <button className="btn btn-dark">
          Add to cart <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}
