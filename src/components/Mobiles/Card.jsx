import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailPage from "../../pages/DetailPage";
import MiniCard from "./MiniCard";

const Card = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    const itemsList = await axios.get("http://127.0.0.1:5000/getItems");
    setItems(itemsList.data);
    console.log(itemsList.data);
  };

  return (
    // <button onClick={saveData(1)}>
    <div className="  sm:flex  sm:items-center sm:gap-4 grid  grid-cols-2  gap-2 lg:grid-cols-4 sm:w-full ">
      {Object.values(items).map((item) => {
        return (
          <MiniCard item={item} />
        );
      })}
    </div>
    // </button>
  );
};

export default Card;
