import { createSlice } from "@reduxjs/toolkit";
import { http } from "../../util/config";
const initialState = {
  arrProduct: [],
  productDetail: {},
};

const productReducer = createSlice({
  name: "productReducer",
  initialState,
  reducers: {
    setArrProductAction: (state, action) => {
      state.arrProduct = action.payload;
    },
    setProductDetailAction: (state, action) => {
      // Lấy dữ liệu từ payload
      const productDetail = action.payload;
      // Cập nhật lại state.productDetail
      state.productDetail = productDetail;
    },
  },
});

export const { setArrProductAction, setProductDetailAction } =
  productReducer.actions;

export default productReducer.reducer;

// ------ action thunk ( api )

export const getProductApi = () => {
  return async (dispatch2) => {
    try {
      // call api
      const result = await http.get("/Product");
      // lấy dữ liệu về đưa lên redux
      const action = setArrProductAction(result.data.content);
      dispatch2(action);
    } catch (err) {
      console.log(err);
    }
  };
};

// closure function
export const getProductDetailActionApi = (idProduct) => {
  return async (dispatch) => {
    // logic api gọi tại đây
    try {
      const result = await http.get(`/product/getbyid?id=${idProduct}`);
      // sau khi có dử liệu gửi lên action loại 1 đưa lên reducer
      const actionLoai1 = setProductDetailAction(result.data.content);

      dispatch(actionLoai1);
    } catch (err) {
      console.log(err);
    }
  };
};
