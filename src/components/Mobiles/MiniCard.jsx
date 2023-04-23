import React from 'react'
import {Link} from "react-router-dom"

function MiniCard({item}) {
    const saveData = (itemID) => {
        console.log("ItemID: ", itemID);
        localStorage.setItem("itemID", itemID);
    };
    return (
        <Link to="/details">
        <button onClick={() => saveData(item.itemID)}>
            <div className="w-50 h-72 sm:w-52 flex flex-col items-center gap-2  px-2 py-3 lg:px-3 lg:py-5 rounded-lg shadow-[0px_0px_15px_rgba(0,0,0,0.25)]  font-poppins cursor-pointer">
              <img
                src={item.imageURL}
                
                alt=""
                className="h-44"
              />
              <div>
                <div>
                  <div className="flex gap-4 justify-between items-center">
                    <p className="font-bold text-sm">{item.productName}</p>
                    <div className="flex items-center font-bold">
                      <span className="text-sm">$</span>
                      <p className="text-md">{item.price}</p>
                    </div>
                  </div>
                </div>
                <button className="border-2 px-5 py-1 rounded-full hover:bg-black hover:text-white duration-200 mt-3">
                  Add to Cart
                </button>
              </div>
            </div>
            </button>
            </Link>
      );
}

export default MiniCard