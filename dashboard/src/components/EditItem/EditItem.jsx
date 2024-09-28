import React from 'react'
import CloseIcon from "@mui/icons-material/Close";

function EditItem({setShowEditModal}) {
  return (
    <form
    className={`py-2 m-2 md:m-0 px-5 border border-green-900 rounded-md space-y-5 shadow-xl bg-white w-4/5 md:w-1/2 flex`}
  >
    <div className="space-y-2 w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Edit Item</h1>
        <button
          className="hover:scale-105 hover:bg-red-50 rounded-md p-2"
          onClick={() => {
            setShowEditModal(false);
          }}
        >
          <CloseIcon />
        </button>
      </div>

      <input
        type="text"
        placeholder="Item name"
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
        Edit Item
      </button>
    </div>
  </form>
  )
}

export default EditItem