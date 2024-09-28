import React from 'react'

function ToggleSwitch({ isChecked, onToggle }) {
    return (
      <label className={`relative inline-block h-8 w-14 cursor-pointer rounded-full transition ${isChecked ? 'bg-green-900' : 'bg-gray-300'}`}>
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isChecked}
          onChange={onToggle}
        />
        <span className={`absolute inset-y-0 start-0 m-1 z-10 size-6 rounded-full bg-white transition-all ${isChecked ? 'start-6' : 'start-0'}`}></span>
      </label>
    );
  }

export default ToggleSwitch