import AddItem from "./AddItem";

function AdditemHome({ viewportHeight,viewportWidth }) {
  return (
    <div
      className="flex flex-col justify-center items-center py-10 w-full "
      style={{ height: `${viewportHeight}px`,width: `${viewportWidth}px` }}
    >
      <AddItem viewportHeight={viewportHeight}/>
    </div>
  );
}

export default AdditemHome;
