import React, { Component, Fragment } from "react";
import Data_Structure from "./Data_Structure";

export default class Manage_Product extends Component {
  constructor() {
    super();
    this.state = {
      componentName: "product_data",
    };
  }

  render() {
    let { componentName } = this.state;
    return (
      <Fragment>
        <div className={`container mt-5`}>
          <h2 className="text-secondary">Manage Catalog</h2>
          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a
                onClick={(e) => this.setState({ componentName: e.target.name })}
                name="product_data"
                className="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Data
              </a>
              <a
                onClick={(e) => this.setState({ componentName: e.target.name })}
                name="add_product"
                className="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Add Product
              </a>
              <a
                onClick={(e) => this.setState({ componentName: e.target.name })}
                name="edit_product"
                className="nav-item nav-link"
                id="nav-contact-tab"
                data-toggle="tab"
                href="#nav-contact"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Edit Product
              </a>
            </div>
          </nav>
          <div>
            {componentName === "product_data" ? (
              <Data_Structure />
            ) : componentName === "edit_product" ? (
              <p>edit _ componenet</p>
            ) : componentName === "add_product" ? (
              <p>add _ product componenet</p>
            ) : (
              <noscript>
                Err {componentName} does not have an assigned Component
              </noscript>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
