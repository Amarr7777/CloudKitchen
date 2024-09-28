import React from 'react'

function OrderItem() {
  return (
    <div className="flex items-center justify-between p-5 border border-gray-200">
      <div className="flex flex-col">
        <p className="text-green-900">Chicken Sandwich</p>
        <p className="text-gray-500 font-light">Non-veg</p>
      </div>
      <div>
        <p className="text-black font-semibold">₹256</p>
      </div>
    </div>
  )
}

export default OrderItem