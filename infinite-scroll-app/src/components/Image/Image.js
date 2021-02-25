import React from "react";

function Image({ id, url }) {
  return (
    <div className="image_wrapper">
      <li>
        <img className="image" src={url} alt={id} />
      </li>
    </div>
  );
}

export default Image;
