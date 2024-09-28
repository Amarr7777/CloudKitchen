import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ListItem() {
  return (
    <div className="w-full py-2 px-5 shadow-md rounded-md flex flex-wrap justify-between items-center border border-green-900 ">
      <p>chicken sandwich</p>
      <label
        htmlFor="AcceptConditions"
        className="relative inline-block h-8 w-14 cursor-pointer rounded-full bg-gray-300 transition [-webkit-tap-highlight-color:_transparent] has-[:checked]:bg-green-900"
      >
        <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

        <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
      </label>
      <p>256</p>
      <div className="flex justify-between gap-3">
        <button>
          <EditIcon className="text-green-900" />
        </button>
        <button>
          <DeleteIcon className="text-red-600" />
        </button>
      </div>
    </div>
  );
}

export default ListItem;
