import React from "react";
import Header from "../components/Header/Header";
import OrderCard from "../components/Order/OrderCard";

function PrevOrders() {
  return (
    <div className="h-svh ">
      <Header />
      <div className="flex w-full justify-center items-center pt-20">
        <OrderCard />
      </div>
    </div>
  );
}

export default PrevOrders;
