import React, { useState } from "react";

const ChessBoard = () => {
  const [storeIndex, setStoreIndex] = useState({
    keyVal1: null,
    keyVal2: null,
  });

  const cells = Array.from({ length: 8 }, (_, row) =>
    Array.from({ length: 8 }, (_, col) => ({ row, col }))
  ).flat();

  const handleOnClick = (cell) => {
    const keyVal1 = cell.row - cell.col;
    const keyVal2 = cell.row + cell.col;
    setStoreIndex({ keyVal1, keyVal2 });
  };

  return (
    <div className="flex justify-center items-center h-[850px]">
      <div className="grid grid-cols-8">
        {cells.map((cell) => {
          const isBlack = (cell.row + cell.col) % 2 === 0;
          const isSelected =
            cell.row - cell.col === storeIndex.keyVal1 ||
            cell.row + cell.col === storeIndex.keyVal2;

          return (
            <div
              key={`${cell.row}-${cell.col}`}
              onClick={() => handleOnClick(cell)}
              className={`w-24 h-24 border-2 transition-colors duration-300 
                ${
                  isSelected ? "bg-red-800" : isBlack ? "bg-black" : "bg-white"
                }`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChessBoard;
