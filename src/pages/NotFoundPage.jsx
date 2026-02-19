import { useSelector } from "react-redux";
import NotFounfImg from "../assets/images/404NotFound.png";
import { Navigate } from "react-router-dom";
import { use, useEffect } from "react";

function NotFoundPage() {
  const todos = useSelector((state) => state.todos.todoes);

  return (
    <div className=" flex flex-col  items-center pt-[30px] text-center">
      <img src={NotFounfImg} alt="" />
      <p className="text-[20px] font-medium">Empty...</p>
    </div>
  );
}

export default NotFoundPage;
