import { useState } from "react";
import "../DropdownStyle.css";

function Dropdown({ items }) {
  // State to show/hide the menu
  const [dropdown, setDropdown] = useState(false);
  
  // State to show the selected option
  const [select, setSelect] = useState("Select");
  return (
    <div className="main-container">
      <div
        className="dropdown-head"
        onMouseOver={(e) => {
          setDropdown(!dropdown);
        }}
      >
        {select}
      </div>
      {dropdown && (
        <div className="dropdown-container">
          {items.map((item, index) => (
            <div
              className="dropdown-items"
              key={index}
              onClick={(e) => {
                setSelect(item);
                setDropdown(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
