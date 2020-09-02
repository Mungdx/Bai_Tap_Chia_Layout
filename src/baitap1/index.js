import React, { Component } from "react";
import Header from "./header";
import Content from "./content";
import Sidebar from "./sidebar";
import Footer from "./footer";

// Tên component phải viết hoa chữ cái đầu tiên
export default class Baitap1 extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="body_content">
          <Content />
          <Sidebar />
        </div>
        <Footer />
      </>
    );
  }
}
