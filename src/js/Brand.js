import React from "react";

function Brand(props) {
  return (
    <a
      className={`display-${!props ? 4 : props.size} text-secondary  font-weight-normal`}
      href="/"
    >
      pES.<span className="text-warning">js</span>
    </a>
  );
}
export default Brand;
