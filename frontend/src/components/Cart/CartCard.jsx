import React from "react";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

function CartCard({url}) {
  return (
    <div className="w-full flex flex-wrap justify-between items-center p-2 shadow bg-secondary/50 rounded-lg">
      {/* image */}
      <div className="w-1/3">
        <img
            // src={`${url}/images/${food.image}`}
          alt="image"
          className="w-[150px] h-[70px] md:w-[100px] md:h-[100px] object-cover p-1 md:p-2 rounded-md border-2 border-thirdColor"
        />
      </div>
      {/* quantity */}
      <div className="flex items-center justify-center  gap-2  bg-white w-fit rounded-full ">
        <button
          className="rounded-full bg-red-400 hover:scale-105 p-2"
          //   onClick={handleRemove}
        >
          <RemoveRoundedIcon className="text-white" />
        </button>
        <div> 1 </div>
        <button
          className="rounded-full bg-green-400 hover:scale-105 p-2"
          //   onClick={handleAdd}
        >
          <AddRoundedIcon className="text-white" />
        </button>
      </div>
      {/* price */}
      <div className="w-1/3 flex justify-end">
        <p className="font-medium font-Raleway text-fourthColor">₹ 100</p>
      </div>
    </div>
  );
}

export default CartCard;
