import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function HomeTemplate() {
  return (
    <>
      <Header>aaa</Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}
