import React, { useState } from "react";
import { suggestionsList } from "../utils/suggestionList";

const Container = () => {
  const [val, setVal] = useState("");
  const [lists, setLists] = useState([]);
  const [focusIndex, setFocusIndex] = useState(-1);

  const handleChange = (inputVal) => {
    setVal(inputVal);

    if (inputVal.trim() === "") {
      setLists([]);
      return;
    }

    const filteredData = suggestionsList.filter((curr) =>
      curr.charAt(0).toLowerCase().includes(inputVal.toLowerCase())
    );

    setLists(filteredData);
    setFocusIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (lists.length === 0) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setFocusIndex((prev) => {
        const newIndex = prev < lists.length - 1 ? prev + 1 : 0;
        setVal(lists[newIndex]);
        return newIndex;
      });
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setFocusIndex((prev) => {
        const newIndex = prev > 0 ? prev - 1 : lists.length - 1;
        setVal(lists[newIndex]);
        return newIndex;
      });
    } else if (event.key === "Enter" && focusIndex >= 0) {
      setVal(lists[focusIndex]);
      setLists([]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h2 className="text-gray-500 mb-2">
        Use up & down arrows or hover to navigate suggestions
      </h2>

      <input
        className="border border-gray-400 rounded px-4 py-2 w-80"
        type="text"
        placeholder="Search for Country"
        value={val}
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(() => setLists([]), 150)}
      />

      {lists.length > 0 && (
        <div
          className="border border-gray-300 mt-2 w-80 bg-white rounded shadow"
          onMouseDown={(e) => e.preventDefault()}
        >
          {lists.map((list, index) => (
            <p
              key={index}
              className={`px-4 py-2 cursor-pointer ${
                focusIndex === index ? "bg-yellow-400" : "hover:bg-gray-100"
              }`}
              onMouseEnter={() => {
                setFocusIndex(index);
                setVal(list);
              }}
              onMouseDown={() => {
                setVal(list);
                setLists([]);
              }}
            >
              {list}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Container;
