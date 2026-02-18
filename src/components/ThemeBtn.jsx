import React from "react";

/* redux */
import { useDispatch, useSelector } from "react-redux";

/* rdxs */
import { toggleTheme } from "../toolkit/features/themeToggleSlice";

/* assets && icons */
import { CiCloudMoon, CiCloudSun } from "react-icons/ci";

function ThemeBtn() {
  const dispatch = useDispatch();
  const mode = useSelector((store) => store.theme.mode);

  return (
    <button
      className="cursor-pointer p-3 bg-[#6C63FF] text-white rounded-lg text-2xl w-full sm:w-auto"
      onClick={() => dispatch(toggleTheme())}
    >
      {mode === "dark" ? <CiCloudSun /> : <CiCloudMoon />}
    </button>
  );
}

export default ThemeBtn;
