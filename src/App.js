import React, { useState } from "react";
import "./styles.css";
import { Card, Badge, Button } from "react-bootstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const optionsToppings = [
  { value: "extra-cheese", label: "🧀 Extra Cheese" },
  { value: "onions", label: "🧅 Onions" },
  { value: "bacon", label: "🥓 Bacon" },
  { value: "basil", label: "🌿 Basil" }
];

export default function App() {
  const [toppings, setToppings] = useState([]);

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "orange",
        primary: "green"
      }
    };
  }

  return (
    <div className="App">
      <h1>Testing react-select library</h1>
      <Select
        onChange={setToppings}
        options={optionsToppings}
        components={makeAnimated()}
        theme={customTheme}
        className={"mb-3"}
        placeholder={"Select a topping"}
        isSearchable
        noOptionsMessage={() => "No other pizza toppings"}
        isMulti
        autoFocus
      />
    </div>
  );
}
