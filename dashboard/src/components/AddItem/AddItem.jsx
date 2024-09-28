import React from "react";

function AddItem({ viewportHeight }) {
  return (
    <form
      className="py-2 m-2 md:m-0 px-5 border border-green-900 rounded-md space-y-5 shadow-xl bg-white w-1/2"
      style={{ height: `${viewportHeight * 0.5}px` }}
    >
      <h1 className="font-bold text-lg">Add Item</h1>
      <input
        type="text"
        placeholder="Enter item name"
        className="w-full rounded-lg  p-3 text-sm border border-green-900"
      />
      <textarea
        className="w-full rounded-lg  p-3 border  border-green-900 text-sm"
        placeholder="Description"
        rows="4"
        id="message"
      ></textarea>
      <div className="flex flex-wrap gap-2">
        <input
          type="text"
          placeholder="Price"
          className="rounded-lg  p-3 border border-green-900 text-sm"
        />
        <input
          type="text"
          placeholder="Category"
          className="rounded-lg  p-3 border border-green-900 text-sm"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2 rounded-md bg-green-900 text-white"
      >
        Add Item
      </button>
    </form>
  );
}

export default AddItem;
