import React from "react";

function OrderPlaced() {
  return (
    <div className="absolute inset-0 flex z-30 backdrop-blur-sm w-full justify-center items-center">
      <div className="w-fit md:w-1/2 lg:w-1/4 h-1/4 bg-thirdColor rounded-md shadow flex justify-center items-center">
        {/* Form */}
        <p className="font-bold font-Raleway text-lg text-wrap text-secondary">
          Order Placed Successfully
        </p>
      </div>
    </div>
  );
}

export default OrderPlaced;
