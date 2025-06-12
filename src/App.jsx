import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import "./App.css";

export default function App() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Figs", "Grapes", "Huckleberry"];
  
  const [selectedFruits, setSelectedFruits] = useState([]);
    const [selectedFruit, setSelectedFruit] = useState([]);

  return (
    <div className = "test-app">

      <div id="multi">
        <h2>Multi-select</h2>
        <Dropdown
          items={items}
          selectedItems={selectedFruits}
          multiSelect={true}
          onChange={setSelectedFruits}
        />
      </div>


      <div id="single">
        <h2>Single-select</h2>
        <Dropdown
          items={items}
          selectedItems={selectedFruit}
          multiSelect={false}
          onChange={setSelectedFruit}
        />
      </div>
    </div>
  );
}
