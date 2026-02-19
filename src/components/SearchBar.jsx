import React, { useState } from "react";
import { useRef } from "react";

/* assets && icons */
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../toolkit/features/searchedSlice";

function SearchBar() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.search.value);

  return (
    <div className="flex items-center px-4 py-3 border-2 rounded-md border-primary w-full">
      <input
        value={value}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        type="text"
        placeholder="Search..."
        className="w-full outline-none"
      />
      <CiSearch size={21} className="text-[#6C63FF]" />
    </div>
  );
}

export default SearchBar;
