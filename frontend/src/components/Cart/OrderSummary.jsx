import React from "react";

function OrderSummary() {
  return (
    <div className="flex flex-col w-full justify-between gap-5 lg:h-[80%]">
      <div className="flex flex-col gap-5">
        <div className="flex justify-between items-center ">
          <p className="font-medium font-Quicksand text-primary">Items 3</p>
          <p className="font-medium font-Quicksand text-primary">₹120</p>
        </div>
        <div className="flex flex-col w-full gap-5">
          <p className="font-bold font-Quicksand text-primary">Address</p>
          <textarea
            name=""
            id=""
            rows="5"
            className="bg-transparent outline-none border border-primary rounded-md p-2 text-primary"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="border border-primary/20 my-3"></div>
        <button className="bg-primary p-2 rounded-md">
          <p className="font-bold font-Quicksand text-fourthColor">
            Place Order
          </p>
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
