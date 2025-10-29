import React, { useState } from "react";

const checkboxesData = [
  {
    id: 1,
    name: "p1",
    children: [
      {
        id: 2,
        name: "p1-c1",
        children: [
          { id: 3, name: "p1-c1-c1" },
          {
            id: 4,
            name: "p1-c1-c2",
            children: [
              { id: 5, name: "p1-c1-c2-c1" },
              {
                id: 6,
                name: "p1-c1-c2-c2",
                children: [
                  { id: 7, name: "p1-c1-c2-c2-c1" },
                  { id: 8, name: "p1-c1-c2-c2-c2" },
                ],
              },
              { id: 9, name: "p1-c1-c2-c3" },
            ],
          },
        ],
      },
      { id: 10, name: "p1-c2" },
      { id: 11, name: "p1-c3" },
    ],
  },
  {
    id: 12,
    name: "p2",
    children: [
      { id: 13, name: "p2-c1" },
      { id: 14, name: "p2-c2" },
    ],
  },
  {
    id: 15,
    name: "p3",
    children: [{ id: 16, name: "p3-c1" }],
  },
  { id: 17, name: "p4" },
];

const CheckboxList = ({ data, checkboxState, setCheckboxState }) => {
  const handleChangeFunc = (node, isChecked) => {
    setCheckboxState((prev) => {
      let newCheckboxState = { ...prev, [node.id]: isChecked };

      const updateChildren = (node) => {
        if (!node.children) return;
        node.children.forEach((child) => {
          newCheckboxState[child.id] = isChecked;
          updateChildren(child);
        });
      };

      updateChildren(node);

      const verifyCheckbox = (node) => {
        if (!node.children) return newCheckboxState[node.id] || false;

        let allChecked = node.children.every((child) => verifyCheckbox(child));
        newCheckboxState[node.id] = allChecked;
        return allChecked;
      };
      checkboxesData.forEach((rootNode) => verifyCheckbox(rootNode));
      return newCheckboxState;
    });
  };

  return (
    <div className="ml-8">
      {data.map((node) => (
        <div key={node.id}>
          <input
            type="checkbox"
            id={`checkbox-${node.id}`}
            checked={checkboxState[node.id] || false}
            onChange={(e) => handleChangeFunc(node, e.target.checked)}
          />
          <label htmlFor={`checkbox-${node.id}`} className="ml-2">
            {node.name}
          </label>

          {node.children && (
            <CheckboxList
              data={node.children}
              checkboxState={checkboxState}
              setCheckboxState={setCheckboxState}
            />
          )}
        </div>
      ))}
    </div>
  );
};

const Checkbox = () => {
  const [checkboxState, setCheckboxState] = useState({});

  return (
    <div className="p-4">
      <CheckboxList
        data={checkboxesData}
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
      />
    </div>
  );
};

export default Checkbox;
