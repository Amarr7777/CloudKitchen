import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditItemHome from "../EditItem/EditItemHome";

function ListItem({ viewportHeight, viewportWidth, foodData, onDelete }) {
  const [showEditModal, setShowEditModal] = useState(false);
  // handleDelete
  const handleDelete = async () => {
    try {
      const response = await fetch(
        "http://localhost:4000/api/food/deletefood",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: foodData._id }),
        }
      );
      const result = await response.json();

      if (result.success) {
        onDelete();
        console.log("done");
      } else {
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <>
      {showEditModal ? (
        <EditItemHome
          onEdit={onDelete}
          foodData = {foodData}
          viewportHeight={viewportHeight}
          viewportWidth={viewportWidth}
          setShowEditModal={setShowEditModal}
        />
      ) : null}
      <div className="w-full py-2 px-5 shadow-md rounded-md flex flex-wrap justify-between items-center border border-green-900 ">
        <p className="w-2/4">{foodData.name}</p>
        <label
          htmlFor="AcceptConditions"
          className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-900"
        >
          <input
            type="checkbox"
            id="AcceptConditions"
            className="peer sr-only"
          />

          <span className="absolute inset-y-0 start-0 m-1 z-10 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
        <p className="w-1/4 text-center">{foodData.price}</p>
        <div className="flex justify-between gap-3">
          <button
            onClick={() => {
              setShowEditModal(true);
            }}
            className="p-2 hover:bg-green-100 rounded-md"
          >
            <EditIcon className="text-green-900" />
          </button>
          <button
            onClick={handleDelete}
            className="p-2 hover:bg-red-100 rounded-md"
          >
            <DeleteIcon className="text-red-600" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ListItem;
