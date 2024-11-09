import React from "react";
import expertsData from "../data";
import Expert from "./Expert";

const Experts1 = () => {
  return (
    <>
      <ul>
        <Expert experts={expertsData}></Expert>
      </ul>
    </>
  );
};

export default Experts1;
