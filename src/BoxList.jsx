import { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box.jsx";
import NewBoxForm from "./NewBoxForm.jsx";
import "./BoxList.css";

const BoxList = () => {
  const initialState = [];
  const [boxes, setBoxes] = useState(initialState);

  const addBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };

  const delBox = (e) => {
    let boxesCopy = boxes.map((b) => {
      return { ...b };
    });
    let id = e.target.parentElement.id;
    let filteredBoxesCopy = boxesCopy.filter((b) => {
      return b.id !== id;
    });
    setBoxes(filteredBoxesCopy);
  };

  return (
    <div className="Boxes">
      <h3>Colored Boxes</h3>
      <NewBoxForm addBox={addBox} />
      <div className="box-list-div">
        {boxes.map(({ id, color, height, width }) => {
          return (
            <Box
              id={id}
              key={id}
              color={color}
              height={height}
              width={width}
              delBox={delBox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoxList;
