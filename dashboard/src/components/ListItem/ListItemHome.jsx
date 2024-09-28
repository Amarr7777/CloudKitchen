import ListItem from "./ListItem";

function ListItemHome({ viewportHeight,viewportWidth }) {
  return (
    <>
      <div
        className="flex flex-col justify-start items-center py-10 md:w-full "
        style={{ height: `${viewportHeight}px`,width: `${viewportWidth}px`}}
      >
        <div className="flex  md:justify-end items-center w-4/5  mb-1">
          <input
            type="text"
            placeholder="search"
            className="py-2 px-5 w-1/3 rounded-md shadow-md"
          />
        </div>
        <div
          className="flex flex-col justify-start items-center gap-2 shadow-xl rounded-lg p-5 w-4/5  md:m-0  overflow-hidden overflow-y-auto bg-white "
          style={{
            minHeight: `${viewportHeight * 0.7}px`,
            maxHeight: `${viewportHeight * 0.7}px`,
          }}
        >
          <ListItem />
        </div>
      </div>
    </>
  );
}

export default ListItemHome;
