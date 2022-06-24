import React, { useState } from "react";

function useSuggestionInput(data) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputField, setInputField] = useState(null);
  const [inputEvent, setInputEvent] = useState(null);
  const handleInput = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setInputEvent(e);
    setInputField(e.target);
    if (inputValue.length > 1) {
      const filteredData = data.filter((item) =>
        item.toLowerCase().includes(inputValue)
      );
      setSuggestions(filteredData);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };
  const handleSelected = (e, handleChange) => {
    const target = e.target;
    const index = target.dataset.index;
    const selected = suggestions[index];
    if (inputField) inputField.value = selected;
    if (inputEvent) handleChange(inputEvent);
    setShowSuggestions(false);
    console.log(selected);
  };
  return {
    suggestions,
    handleInput,
    showSuggestions,
    handleSelected,
  };
}

export default useSuggestionInput;
