import React from "react";
import { Link } from "react-router-dom";

/* components */
import SearchBar from "../components/SearchBar";
import SortByComplated from "../components/SortByComplated";
import ThemeBtn from "../components/ThemeBtn";

function TobBar() {
  return (
    <div>
      <Link
        to={"/"}
        className="block text-2xl sm:text-3xl font-bold text-[#252525] mb-4 text-center"
      >
        TODO LIST
      </Link>

      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <SearchBar />
        <SortByComplated />
        <ThemeBtn />
      </div>
    </div>
  );
}

export default TobBar;
