import React from "react";

function Img({ src }) {
  return (
    <div className="img h-[90vh] w-1/3 overflow-hidden hover:opacity-80">
      <img className="h-full w-full object-cover" src={src} alt="" />
    </div>
  );
}

export default Img;
