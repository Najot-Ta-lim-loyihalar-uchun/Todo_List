import React from "react";

function SortByComplated() {
  return (
    <select className="bg-[#6C63FF] text-white p-3 rounded-md cursor-pointer outline-none w-[85px] min-w-[50px] sm:w-auto">
      <option value="all">All</option>
      <option value="true">Completed</option>
      <option value="false">Not completed</option>
    </select>
  );
}

export default SortByComplated;
