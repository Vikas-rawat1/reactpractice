import React, { useState } from "react";

function Update() {
  const [inputVal, setInputVal] = useState("Add a task");
  console.log(inputVal)
  return (
    <>
      {/* Update The array */}
      <div>
        <input type="text" placeholder="Add a task" />
        <button>ADD</button>
      </div>
    </>
  );
}

export default Update;