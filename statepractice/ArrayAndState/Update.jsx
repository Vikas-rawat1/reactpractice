import { RiDeleteBinFill } from "@remixicon/react";
import React, { useState } from "react";

function Update() {
  const [inputVal, setInputVal] = useState("");
  const [task, setTask] = useState([]);

  let handleClick = (val) => {
    setTask([...task, (val = inputVal)]);
    setInputVal("");
  };

  let updateTaskUpper = () => {
    {
      setTask(task.map((task) => task.toUpperCase()));
    }
  };
  let updateTaskLower = () => {
    {
      setTask(task.map((task) => task.toUpperCase()));
    }
  };

  // console.log(inputVal)
  return (
    <>
      {/* Update The array */}
      <div>
        <input
          type="text"
          placeholder="Add a task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleClick}>ADD</button>
        <div>
          {task.map((val, inx) => (
            <div key={inx}>
              {val}
              <button
                onClick={() => {
                  return setTask(task.filter((val, index) => index !== inx));
                }}
              >
                <RiDeleteBinFill />
              </button>
            </div>
          ))}
        </div>

        {/* Update all todos  */}
        <button onClick={updateTaskUpper}>Update Task</button>
        <button onClick={updateTaskLower}>Update Task</button>
      </div>
    </>
  );
}

export default Update;
