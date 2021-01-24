import React, { Component } from "react";
import Brand from "./Brand";

export default class WelcomePage extends Component {
  render() {
    return (
      <>
        <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
          <div className="col-md-5 p-lg-5 mx-auto my-1">
            <Brand size={1} />
            
            <h3 className="display-5 mt-5 font-weight-normal">E-commerce Helper</h3>
            <p className="lead font-weight-normal">
              A Product Information Management Systems (PIMs) that easily
              connects your products to the major ecommerce sites like
              amazon.com, wayfair.com, walmart.com, and more.
            </p>
            <a className="btn btn-outline-secondary" href="/">
              Start
            </a>
          </div>
          <div className="product-device box-shadow d-none d-md-block"></div>
          <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
        </div>
      </>
    );
  }
}
