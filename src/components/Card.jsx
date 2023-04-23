import React from "react";
import { data } from "./data";

function Card() {
  return (
    <>
      <div className="">
        {data.map((item) => (
          <img key={item.id}
            className="w-full sm:px-7 px-3 sm:h-80 h-44 inline-block  cursor-pointer "
            src={item.img}
            alt="/"
          />  
        ))}
      </div>
    </>
  );
}

export default Card;
