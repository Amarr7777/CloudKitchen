import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import AddIcon from "@mui/icons-material/Add";
import AddItemHome from "../AddItem/AddItemHome.jsx";

function ListItemHome({
  viewportHeight,
  viewportWidth,
  setFoodData,
  foodData,
  url
}) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const getFoodData = async () => {
    try {
      const response = await fetch(`${url}/api/food/listfoods`, {
        method: "GET",
      });
      const result = await response.json();

      if (result.success) {
        setFoodData(result.data);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (foodData.length) return;
    getFoodData();
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter food data based on the search query
  const filteredFoodData = foodData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {/* add modal */}
      {showAddModal ? (
        <AddItemHome setShowAddModal={setShowAddModal} onAdd={getFoodData} url={url}/>
      ) : null}
      <div
        className="flex flex-col justify-center items-center py-10 w-full md:w-full"
        style={{
          width: viewportWidth < 768 ? `${viewportWidth}px` : "100%",
          height: `${viewportHeight}px`,
        }}
      >
        <div className="flex md:justify-end items-center w-4/5 gap-2 mb-1">
          <input
            type="text"
            placeholder="search"
            className="py-2 px-5 md:w-1/3 w-3/4 rounded-md shadow-md"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div
            onClick={() => {
              setShowAddModal(true);
            }}
            className="py-2 px-5 bg-green-900 text-white rounded-md cursor-pointer"
          >
            <p className="font-medium hidden md:block">Add Item</p>
            <div className="block md:hidden w-1/4">
              <AddIcon />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center gap-2 shadow-xl rounded-lg p-5 w-4/5 md:m-0 overflow-hidden overflow-y-auto bg-white"
          style={{
            minHeight:
              viewportHeight > 768 ? `${viewportHeight * 0.7}px` : "90%",
            maxHeight: `${viewportHeight * 0.7}px`,
          }}
        >
          {filteredFoodData.length ? (
            filteredFoodData.map((item) => (
              <ListItem
                key={item.id}
                foodData={item}
                viewportHeight={viewportHeight}
                viewportWidth={viewportWidth}
                onDelete={getFoodData}
                url = {url}
              />
            ))
          ) : (
            <div className="flex justify-center items-center w-full h-full">
              <p className="font-medium text-gray-500">
                There is nothing in your menu, Let's add some
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ListItemHome;
