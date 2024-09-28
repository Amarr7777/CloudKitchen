import React from "react";
import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";

function OrderListHome({ viewportHeight }) {
  return (
    <>
      <div
        className="flex flex-col justify-start items-center py-10 w-full"
        style={{ height: `${viewportHeight}px` }}
      >
        <div className="flex  md:justify-end items-center w-4/5 md:w-4/5">
          <input
            type="text"
            placeholder="search"
            className="py-2 px-5 w-1/3 rounded-md shadow-md"
          />
        </div>
        <div
          className="grid grid-cols-[300px,1fr] gap-5 w-4/5 mt-1"
          style={{
            minHeight: `${viewportHeight * 0.7}px`,
            maxHeight: `${viewportHeight * 0.7}px`,
          }}
        >
          <div className="h-full shadow-md px-2 bg-white rounded-md">
            <p className="text-center text-gray-500 p-5">
              Select an order to view its details
            </p>
            <div
              className="flex flex-col overflow-hidden overflow-y-auto"
              style={{
                minHeight: `${viewportHeight * 0.7}px`,
                maxHeight: `${viewportHeight * 0.7}px`,
              }}
            >
              <OrderList />
            </div>
          </div>

          <div className="h-full shadow-md px-2 bg-white rounded-md max-w-full">
            <div
              className=" rounded-lg bg-white overflow-y-scroll p-5"
              style={{
                minHeight: `${viewportHeight * 0.7}px`,
                maxHeight: `${viewportHeight * 0.7}px`,
              }}
            >
              {/* {selectedOrder !== null ? ( */}
              <OrderDetails viewportHeight={viewportHeight} />
              {/* ) : (
                <div className="flex items-center justify-center content-center w-full h-full">
                  <h4 className="font-semi text-gray-400 text-lg">
                    No Order Selected
                  </h4>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderListHome;
