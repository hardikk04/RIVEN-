import React from "react";

function LeftImg({ img }) {
  return (
    <div className="w-1/2 h-full overflow-hidden">
      <img className="h-full w-full object-cover" src={img} alt="" />
    </div>
  );
}

export default LeftImg;
