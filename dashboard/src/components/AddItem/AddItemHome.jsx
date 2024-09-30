import AddItem from "./AddItem.jsx";

function AdditemHome({ viewportHeight, viewportWidth, setShowAddModal, onAdd, url}) {
  return (
    <div
      className="flex flex-col justify-center items-center py-10 w-full absolute inset-0 backdrop-blur-lg z-20"
      style={{ height: `${viewportHeight}px`, width: `${viewportWidth}px` }}
    >
      <AddItem viewportHeight={viewportHeight} setShowAddModal={setShowAddModal} onAdd={onAdd} url={url} />
    </div>
  );
}

export default AdditemHome;
