import { RiHeartFill } from "@remixicon/react";
import { useState } from "react";

function Like() {
  const[]=useState(false)
  return (
    <>
      <RiHeartFill size={36} color="white" className="my-icon" />
      <RiHeartFill size={36} color="red" className="my-icon" />
    </>
  );
}

export default Like;
