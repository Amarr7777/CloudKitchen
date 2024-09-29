import React, { useState } from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function ItemCard({ food, url }) {
  const [quantity, setQuantity] = useState(0); 
  
  const handleAdd = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center h-[200px] w-[150px] md:h-[250px] md:w-[300px] bg-secondary shadow-md rounded-lg cursor-pointer transition relative p-2">
      {/* image */}
      <div>
        <img
          src={`${url}/images/${food.image}`}
          alt="image"
          className="w-[150px] h-[70px] md:w-[250px] md:h-[150px] object-cover p-1 md:p-2 rounded-md border-2 border-thirdColor"
        />
      </div>
      {/* details */}
      <div className="flex flex-col w-full items-start justify-start p-2">
        <div className="flex justify-between w-full">
          <p className="font-bold font-Quicksand text-thirdColor">
            ₹{food.price}{" "}
          </p>
          <p className="font-light font-Quicksand text-thirdColor">
            {food.quantity}{" "}
          </p>
        </div>
        <p className="font-medium font-Quicksand text-thirdColor">
          {food.name}{" "}
        </p>
      </div>
      {/* add to cart */}
      <div className="absolute bottom-0 right-0 p-2 flex items-center gap-2">
        <button
          className="rounded-full bg-red-400 hover:scale-105"
          onClick={handleRemove}
        >
          <RemoveRoundedIcon className="text-white" />
        </button>
        <div>{quantity}</div>
        <button
          className="rounded-full bg-green-400 hover:scale-105"
          onClick={handleAdd}
        >
          <AddRoundedIcon className="text-white" />
        </button>
      </div>
    </div>
  );
}

export default ItemCard;
