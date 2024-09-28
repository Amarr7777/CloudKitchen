import AddItem from "./AddItem";

function AdditemHome({ viewportHeight, viewportWidth, setShowAddModal, onAdd}) {
  return (
    <div
      className="flex flex-col justify-center items-center py-10 w-full absolute inset-0 backdrop-blur-lg z-20"
      style={{ height: `${viewportHeight}px`, width: `${viewportWidth}px` }}
    >
      <AddItem viewportHeight={viewportHeight} setShowAddModal={setShowAddModal} onAdd={onAdd} />
    </div>
  );
}

export default AdditemHome;
