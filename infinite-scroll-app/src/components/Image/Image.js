import React from "react";

function Image({ id, url }) {
  return (
    <div className="image_wrapper">
      <li>
        <img className="_image" src={url} alt={id} loading="lazy" />
      </li>
    </div>
  );
}

export default Image;
