import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Product from "../../components/Product/Product";
import { getProductApi } from "../../redux/reducers/productReducer";

export default function Home() {
  // lấy dữ liệu từ redux
  const { arrProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    // Sau khi giao diện load xong thì gọi api thực thi
    const action = getProductApi();
    dispatch(action);
  }, []);

  const renderProduct = () => {
    return arrProduct.map((item) => {
      return (
        <div className="col-2-4" key={item.id}>
          {/*  product item */}
          <a href="#" className="product-item">
            <div
              className="item-img"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            ></div>
            <h4 className="item-name">{item.name}</h4>
            <div className="item-price">
              <span className="price-old">1.200.000đ</span>
              <span className="price-new">{item.price}</span>
            </div>
            <div className="item-action">
              <span className="item-rating">
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
                <i className="bx bxs-star" />
              </span>
              <span className="item-sold">Đã bán 999,22k</span>
            </div>
            <div className="item-location">TP. Hồ Chí Minh</div>
            <div className="item-favourite">
              <i className="bx bx-check" />
              <span>Yêu thích</span>
            </div>
            <div className="item-sale">
              <span className="sale-percent">10%</span>
              <span className="sale-title">GIẢM</span>
            </div>
          </a>
        </div>
      );
    });
  };

  return (
    <>
      {/* <div className="container">
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
      </div> */}

      <section className="app-container">
        <div className="grid">
          <div className="grid-row">
            <div className="col-2">
              <nav className="category">
                <h3 className="category-heading">
                  <i className="bx bx-list-ul" />
                  Danh mục
                </h3>
                <ul className="category-list">
                  <li className="category-item category-item_active">
                    <a href="#" className="category-link">
                      Giày
                    </a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-link">
                      Thực phẩm
                    </a>
                  </li>
                  <li className="category-item">
                    <a href="#" className="category-link">
                      Thời trang ,dinh dưỡng
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-10">
              <div className="home-filter">
                <span className="filter-label">Sắp xếp theo</span>
                <button className="filter-btn btn btn-primary">Phổ biến</button>
                <button className="filter-btn btn">Mới nhất</button>
                <button className="filter-btn btn">Bán chạy</button>
                <div className="filter-select select-input">
                  <span className="select-label">Giá</span>
                  <i className="bx bx-chevron-down" />
                  {/* list option */}
                  <ul className="select-list">
                    <li className="select-item">
                      <a href className="select-link">
                        Giá: Thấp đến Cao
                      </a>
                    </li>
                    <li className="select-item">
                      <a href className="select-link">
                        Giá: Cao đến Thấp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-page">
                  <span className="page-num">
                    <span className="num-current">1</span>/11
                  </span>
                  <div className="page-control">
                    <a href className="control-btn">
                      <i className="bx bxs-chevron-left" />
                    </a>
                    <a href className="control-btn">
                      <i className="bx bxs-chevron-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="home-product">
                <div className="grid-row">{renderProduct()}</div>
              </div>
              <ul className="pagination pagination-main">
                <li className="pagination-item">
                  <a href className="pagination-link">
                    <i className="bx bx-chevron-left" />
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-link">
                    1
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-link">
                    2
                  </a>
                </li>
                <li className="pagination-item pagination-active">
                  <a href className="pagination-link">
                    3
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-link">
                    ...
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-link">
                    12
                  </a>
                </li>
                <li className="pagination-item">
                  <a href className="pagination-link">
                    <i className="bx bx-chevron-right" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
