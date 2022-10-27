import React from "react";
import "./reset.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./assets/scss/main.scss";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Search from "./pages/Search/Search";
import Detail from "./pages/Detail/Detail";
import Profile from "./pages/Profile/Profile";
import Cart from "./pages/Cart/Cart";
import HomeTemplate from "./templates/HomeTemplate";
// Cấu hình redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
// Cấu hình react router dom

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate></HomeTemplate>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="search" element={<Search></Search>}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail></Detail>}></Route>
          </Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path="*" element={<Navigate to=""></Navigate>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
