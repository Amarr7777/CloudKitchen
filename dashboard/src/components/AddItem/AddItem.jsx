import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

function AddItem({ setShowAddModal, onAdd, url }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showError, setShowError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !quantity || !price || !category || !selectedImage) {
      setShowError(true);
    } else {
      setShowError(false);
      setShowAddModal(false);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("quantity", quantity);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("image", selectedImage);
      formData.append("stock", true);
      try {
        const response = await fetch(`${url}/api/food/add`, {
          method: "POST",
          body: formData,
        });
        const result = await response.json();

        if (result.success) {
          setSuccessMessage("Item added successfully!");
          onAdd();
        } else {
          setSuccessMessage("There was an error adding the item.");
        }
      } catch (error) {
        console.log("Error:", error);
        setSuccessMessage("An error occurred while adding the item.");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`py-2 m-2 md:m-0 px-5 border border-green-900 rounded-md space-y-5 shadow-xl bg-white w-4/5 md:w-1/2 flex`}
    >
      <div className="space-y-2 w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Add Item</h1>
          <button
            className="hover:scale-105 hover:bg-red-50 rounded-md p-2"
            onClick={() => {
              setShowAddModal(false);
            }}
          >
            <CloseIcon />
          </button>
        </div>
        {/* item name */}
        <input
          type="text"
          placeholder="Item name"
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-full rounded-lg  p-3 text-sm border border-green-900"
        />
        {/* quantity */}
        <input
          className="w-full rounded-lg  p-3 border  border-green-900 text-sm"
          placeholder="quantity"
          onChange={(e) => {
            setQuantity(e.target.value);
          }}
          id="message"
        />
        {/* price and category */}
        <div className="flex flex-wrap md:flex-nowrap gap-1 w-full">
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className="rounded-lg p-3 w-1/2 border border-green-900 text-sm"
          />
          <select
            className="rounded-lg p-3 w-1/2 border border-green-900 text-sm"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select Category
            </option>
            <option value="fruits">Fruits</option>
            <option value="vegitable">Vegitable</option>
            <option value="health">Health & wellnes</option>
            <option value="munchies">Munchies</option>
            <option value="drinks">Cold Drinks & Juice</option>
            {/* Add more categories as needed */}
          </select>
        </div>
        {/* image */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="rounded-lg p-3 border border-green-900 text-sm w-full"
          />
          {selectedImage && (
            <div>
              <p>Selected Image: {selectedImage.name}</p>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Preview"
                width="100"
              />
            </div>
          )}
        </div>
        {/* button */}
        <button
          type="submit"
          className="px-5 py-2 rounded-md bg-green-900 text-white"
        >
          Add Item
        </button>
        {/* error */}
        {showError ? (
          <p className="text-red-500 font-medium">Please fill all the fields</p>
        ) : null}
      </div>
    </form>
  );
}

export default AddItem;
