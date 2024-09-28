import React from 'react'
import EditItem from './EditItem'

function EditItemHome({viewportHeight, viewportWidth, setShowEditModal}) {
  return (
    <div
    className="flex flex-col justify-center items-center py-10 w-full absolute inset-0 backdrop-blur-lg z-20"
    style={{ height: `${viewportHeight}px`, width: `${viewportWidth}px` }}
  >
   <EditItem setShowEditModal={setShowEditModal}/>
  </div>
  )
}

export default EditItemHome