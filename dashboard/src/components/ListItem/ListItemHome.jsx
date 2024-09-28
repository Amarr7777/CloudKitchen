import { useEffect, useState } from "react";
import ListItem from "./ListItem";
import AddIcon from "@mui/icons-material/Add";
import AdditemHome from "../AddItem/AdditemHome";

function ListItemHome({ viewportHeight, viewportWidth, setFoodData, foodData }) {
  const [showAddModal, setShowAddModal] = useState(false);
  

  const getFoodData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/food/listfoods", {
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

  return (
    <>
      {/* add modal */}
      {showAddModal ? <AdditemHome setShowAddModal={setShowAddModal} onAdd = {getFoodData}/> : null}
      <div
        className={`flex flex-col justify-start items-center py-10 md:w-full w-[${viewportWidth}]`}
        style={{
          height: `${viewportHeight}px`,
        }}
      >
        <div className="flex  md:justify-end items-center w-4/5 gap-2 mb-1">
          <input
            type="text"
            placeholder="search"
            className="py-2 px-5 md:w-1/3 w-3/4 rounded-md shadow-md "
          />
          <div
            onClick={() => {
              setShowAddModal(true);
            }}
            className="py-2 px-5 bg-green-900 text-white rounded-md cursor-pointer"
          >
            <p className="font-medium  hidden md:block">Add Item</p>
            <div className="block md:hidden">
              <AddIcon />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-start items-center gap-2 shadow-xl rounded-lg p-5 w-4/5  md:m-0  overflow-hidden overflow-y-auto bg-white "
          style={{
            minHeight: `${viewportHeight * 0.7}px`,
            maxHeight: `${viewportHeight * 0.7}px`,
          }}
        >
          {foodData.length ?(
            foodData.map((item) => (
              <ListItem
                key={item.id} 
                foodData={item} 
                viewportHeight={viewportHeight}
                viewportWidth={viewportWidth}
                onDelete = {getFoodData}
              />
            ))):(
              <div className="flex justify-center items-center w-full h-full">
                <p className="font-medium text-gray-500">There is nothing in your menu, Let's add some</p>
              </div>
            )
            }
        </div>
      </div>
    </>
  );
}

export default ListItemHome;
