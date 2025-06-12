import React, { useState } from "react";
import downCaret from "../assets/caret-down.svg"
import upCaret from "../assets/caret-up.svg"


import "./Dropdown.css";

export default function Dropdown({items, selectedItems, multiSelect, onChange}) {

    const [menuOpen, setMenuOpen] = useState(false)

    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    function itemClickHandler(item) {
        if (multiSelect) {
            let newSelectedItems = []

            if (selectedItems.includes(item)) {
                newSelectedItems = selectedItems.filter(i => (i !== item)) // unselect if selected
            } else {
                newSelectedItems = [...selectedItems, item] // select if unselected
            }
            onChange(newSelectedItems) // update state in parent
        } else {
            onChange([item])
            toggleMenu()
        }
    }

    function addMenuOptions() {
        if (multiSelect) {
            return items.map((item) => {
                return(
                    <label className="list-item" >
                        <input type="checkbox"
                            checked={selectedItems.includes(item)}
                            onClick={() => itemClickHandler(item)}
                            aria-label={item}
                        />
                        {item}
                    </label>
                )
            })
        } else {
            return items.map((item) => {
                return(
                        <div className="list-item single-select" 
                            onClick={() => itemClickHandler(item)}
                            aria-label={item}
                        >
                            {item}
                        </div>
                )
            })
        }
    }

    return (
        <div className = "dropdown">
    
            <button className="dropdown-top" onClick={toggleMenu}>               
                {selectedItems.length !== 0 ? selectedItems.join(", ") : 
                    multiSelect ? "Select items" : "Select item"
                }

                <span className="dropdown-arrow">{ menuOpen ? 
                    <img src={upCaret} /> :
                    <img src={downCaret} /> 
                }</span>
            </button>

            { menuOpen && <div className="dropdown-menu">
                <span className={multiSelect ? "select-clear-all-multi" : "select-clear-all"}  >
                    { multiSelect && <button id="select-all"
                        onClick={() => onChange(items) }
                    >
                        Select All
                    </button>
                    }
                    <button id="clear-all"
                        onClick={() => onChange([]) }
                    >
                        Clear
                    </button>
                </span>
                {addMenuOptions()}
            </div> }
        </div>        
    )
}