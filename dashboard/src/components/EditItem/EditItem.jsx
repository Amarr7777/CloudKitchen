import React, { useState, useEffect } from 'react';
import CloseIcon from "@mui/icons-material/Close";

function EditItem({ setShowEditModal, foodData, onEdit, url }) {
  const [name, setName] = useState(foodData.name);
  const [quantity, setQuatity] = useState(foodData.quantity);
  const [price, setPrice] = useState(foodData.price);
  const [category, setCategory] = useState(foodData.category);
  const [selectedImage, setSelectedImage] = useState(null); // Initialize as null
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setName(foodData.name);
    setQuatity(foodData.quantity);
    setPrice(foodData.price);
    setCategory(foodData.category);
    if (foodData.image) {
      setSelectedImage(foodData.image); 
    }
  }, [foodData]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); 
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!name || !quantity || !price || !category) {
      setShowError(true);
      return; 
    }
    const formData = new FormData();
    formData.append('id', foodData._id); 
    formData.append('name', name);
    formData.append('quantity', quantity);
    formData.append('price', price);
    formData.append('category', category);
    formData.append('stock', true);
    if (selectedImage) {
      formData.append('image', selectedImage); 
    }

    try {
      const response = await fetch(`${url}/api/food/editfood/${foodData._id}`, {
        method: "PUT",
        body: formData,
      });
      const result = await response.json();
      
      if (result.success) {
        onEdit()
        setShowEditModal(false); // Close the modal on success
      } else {
        setShowError(true); // Show error if edit failed
      }
    } catch (error) {
      console.log("Error:", error);
      setShowError(true); // Show error if there's a catch
    }
  };

  return (
    <form
      onSubmit={handleEdit}
      className={`py-2 m-2 md:m-0 px-5 border border-green-900 rounded-md space-y-5 shadow-xl bg-white w-4/5 md:w-1/2 flex`}
    >
      <div className="space-y-2 w-full">
        <div className="flex justify-between">
          <h1 className="font-bold text-lg">Edit Item</h1>
          <button
            type="button" // Change to button type to prevent form submission
            className="hover:scale-105 hover:bg-red-50 rounded-md p-2"
            onClick={() => setShowEditModal(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <input
          type="text"
          placeholder="Item name"
          className="w-full rounded-lg p-3 text-sm border border-green-900"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update name on change
        />
        <input
          className="w-full rounded-lg p-3 border border-green-900 text-sm"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuatity(e.target.value)} // Update quantity
        />
        {/* price and category */}
        <div className="flex flex-wrap md:flex-nowrap gap-1 w-full">
          <input
            type="number" 
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
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
        {/* Existing image */}
        {foodData.image && (
          <div>
            <p>Current Image:</p>
            <img
              src={`${url}/images/${foodData.image}`} 
              alt="Current"
              width="100"
            />
          </div>
        )}
        {/* Image upload */}
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="rounded-lg p-3 border border-green-900 text-sm w-full"
          />
          {selectedImage && typeof selectedImage === 'object' && (
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
          Edit Item
        </button>
        {/* error */}
        {showError && (
          <p className="text-red-500 font-medium">Please fill all the fields</p>
        )}
      </div>
    </form>
  );
}

export default EditItem;