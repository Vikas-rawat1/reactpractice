import { useState } from "react";

function Array() {
  let [arr, setArr] = useState(["moves pass"]); //passing / initializing with array
  return (
    <>
      <div>
        <p>Array and State Practice</p>
      </div>
    </>
  );
}
export default Array;
