import React, { Component } from "react";


export default class HomeScraper extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="alert alert-warning" role="alert">
          This feature is not yet available — check back later!
        </div>
        <br />
        <div className="card border border-info w-100">
          <div className="card-header">Lets start scraping</div>
          <div className="card-body">
            <h5 className="card-title">Provide the page URL below</h5>
            <p className="card-text">
              If you want to scrape multiple pages, click the{" "}
              <span className="badge badge-pill badge-primary">+</span> symbol
              to add URL.
            </p>

            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Add URL Here"
                aria-label="URL to be scraped"
                aria-describedby="button-addon4"
              />
              <div className="input-group-append" id="button-addon4">
                <button className="btn btn-primary" type="button">
                  Scrape
                </button>
                <button className="btn btn-outline-primary" type="button">
                  <span className="badge badge-pill badge-primary">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <br />
        <small className="text-muted">Scraped data will display here</small>
      </div>
    );
  }
}
