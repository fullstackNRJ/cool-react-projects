import React from "react";
import Image from "../Image/Image";
function ImageGrid({ data }) {
  return (
    <div className="imageGrid_wrapper">
      <ul>
        {data?.map(({ id, download_url, author }) => {
          return <Image key={id} id={id} url={download_url} author={author} />;
        })}
      </ul>
    </div>
  );
}

export default ImageGrid;
