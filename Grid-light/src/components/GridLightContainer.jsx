import React, { useState } from "react";

const GridLightContainer = () => {
  const [storeIndex, setStoreIndex] = useState([]);

  const handleClick = (index) => {
    if (storeIndex.length < 9 && !storeIndex.includes(index)) {
      setStoreIndex([...storeIndex, index]);
    }

    if (storeIndex.length === 8 && !storeIndex.includes(index)) {
      let timer = setInterval(() => {
        setStoreIndex((prev) => {
          if (prev.length === 0) {
            clearInterval(timer);
            return [];
          }

          let newArr = [...prev];
          newArr.pop();
          return newArr;
        });
      }, 500);
    }
  };
  console.log(storeIndex);

  return (
    <div className="flex flex-col justify-center items-center h-screen-[100px] mt-6 ">
      <div>
        <p>
          Click on cells to select them. Once all cells are selected, they will
          be unselected one by one in the reverse order they were selected.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-12">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            onClick={() => handleClick(index)}
            className={`h-52 w-52 border ${
              storeIndex.includes(index) ? "bg-green-500" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default GridLightContainer;
