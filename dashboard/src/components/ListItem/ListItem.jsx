import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import EditItemHome from "../EditItem/EditItemHome";
import { alpha, styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import ToggleSwitch from "./ToggleSwitch";

function ListItem({ viewportHeight, viewportWidth, foodData, onDelete, url }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [stock, setStock] = useState(foodData.stock);

  // handleDelete
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `${url}/api/food/deletefood`,
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

  const handleEditStock = async (newStockValue) => {
    try {
      const response = await fetch(`${url}/api/food/editstock/${foodData._id}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ stock: newStockValue })
      });

      const result = await response.json();

      if (result.success) {
        onDelete(); 
        setShowEditModal(false); 
      } else {
        console.error("Failed to update stock:", result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const toggleStock = () => {
    const newStockValue = !stock; // Toggle the stock value
    setStock(newStockValue); // Update the local state
    handleEditStock(newStockValue); // Call the edit function with the new value
  };

  return (
    <>
      {showEditModal ? (
        <EditItemHome
          onEdit={onDelete}
          foodData={foodData}
          viewportHeight={viewportHeight}
          viewportWidth={viewportWidth}
          setShowEditModal={setShowEditModal}
          url = {url}
        />
      ) : null}
      <div className="w-full py-2 px-5 shadow-md rounded-md flex flex-wrap justify-between items-center border border-green-900 ">
        <p className="w-2/4">{foodData.name}</p>
        {/* toggle switch */}
        <ToggleSwitch isChecked={stock} onToggle={toggleStock} />
        <p className="w-1/4 text-center">{foodData.price}</p>
        <div className="flex justify-between gap-3">
          {/* edit icon */}
          <button
            onClick={() => {
              setShowEditModal(true);
            }}
            className="p-2 hover:bg-green-100 rounded-md"
          >
            <EditIcon className="text-green-900" />
          </button>
          {/* delete icon */}
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
