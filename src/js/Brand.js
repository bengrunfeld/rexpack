import React from "react";

function Brand(props) {
  let { size } = props;

  return (
    <a
      className={`display-${
        !size ? 4 : size
      } text-secondary  font-weight-normal`}
      href="/"
    >
      pES.<span className="text-warning">js</span>
    </a>
  );
}
export default Brand;
