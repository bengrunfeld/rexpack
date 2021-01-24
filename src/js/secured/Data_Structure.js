import React, { Component } from "react";

export default class Data_Structure extends Component {
  constructor() {
    super();
    this.state = {
      userId: "admin-test",
      supplierId: "0001",
      productFields: [
        { name: "Uno", id: 999081842976 },
        { name: "Dos", id: 72886 },
        { name: "Tres", id: 987655 },
      ],
    };
  }

  render() {
    return (
      <div className="mt-5">
        <div className="row">
          <div className="col">
            <h4 className="bd-title">Product Description Fields</h4>
            <p className="bd-lead">Here are a few, add more</p>

            <div className="container mt-1">
              <div className="list-group">
                {/**
                 * map state to display list of product fields
                 * create button for each
                 */}
                {this.state.productFields.map((field) => (
                  <button
                    key={field.id}
                    type="button"
                    className="list-group-item list-group-item-action"
                  >
                    {field.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="col">
            <h3 className="bd-title">Product Fields</h3>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="i.e. country of manufacture and certification"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
