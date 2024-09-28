import React, { useState, useEffect } from 'react';
import CloseIcon from "@mui/icons-material/Close";

function EditItem({ setShowEditModal, foodData, onEdit }) {
  const [name, setName] = useState(foodData.name);
  const [description, setDescription] = useState(foodData.description);
  const [price, setPrice] = useState(foodData.price);
  const [category, setCategory] = useState(foodData.category);
  const [selectedImage, setSelectedImage] = useState(null); // Initialize as null
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setName(foodData.name);
    setDescription(foodData.description);
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
    if (!name || !description || !price || !category) {
      setShowError(true);
      return; 
    }
    const formData = new FormData();
    formData.append('id', foodData._id); 
    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('category', category);
    if (selectedImage) {
      formData.append('image', selectedImage); 
    }

    try {
      const response = await fetch(`http://localhost:4000/api/food/editfood/${foodData._id}`, {
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
        <textarea
          className="w-full rounded-lg p-3 border border-green-900 text-sm"
          placeholder="Description"
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)} // Update description
        ></textarea>
        {/* price and category */}
        <div className="flex flex-wrap md:flex-nowrap gap-1 w-full">
          <input
            type="number" // Change to number input for price
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-lg p-3 w-1/2 border border-green-900 text-sm"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg p-3 w-1/2 border border-green-900 text-sm"
          />
        </div>
        {/* Existing image */}
        {foodData.image && (
          <div>
            <p>Current Image:</p>
            <img
              src={`http://localhost:4000/images/${foodData.image}`} // Adjust URL as per your API
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