"use client"
import React from "react"
import { useState } from "react"

export const DropdownMenu = ({
  label,
  dropdown,
  setDesignPrefModalStatus,
  inputs,
  setInputs,
  allSelected,
  setAllSelected,
  selectedOption,
  setSelectedOption,
  logs,
  setCreateDesignReportBool,
  setDisplaySaveInputPopup,
  setSaveInputFileName,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }
  
  const handleItemClick = (item) => {
    if (item.action) {
      item.action()
    }
    setIsOpen(false)
  }
  
  return (
    <div className="dropdown">
      <div className="dropdown-label" onClick={toggleDropdown}>
        {label}
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {dropdown.map((item, index) => (
            <div key={index} className="dropdown-items" onClick={() => handleItemClick(item)}>
              <span>{item.label}</span>
              {item.shortcut && <span>{item.shortcut}</span>}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}