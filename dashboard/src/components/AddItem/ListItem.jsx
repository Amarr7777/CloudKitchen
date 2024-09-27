import React from "react";

function ListItem() {
  return (
    <div className="w-full md:w-4/5 py-2 px-5 shadow-md rounded-md flex justify-between items-center border border-primary">
      <p>chicken sandwich</p>
      <p>256</p>
      <div className="flex justify-between gap-3">
        <button>edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}

export default ListItem;
