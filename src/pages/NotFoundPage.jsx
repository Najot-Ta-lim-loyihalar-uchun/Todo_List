import React, { useEffect } from "react";

import NotFounfImg from "../assets/images/404NotFound.png";
import { Navigate } from "react-router-dom";

function NotFoundPage({ todos }) {
  console.log(todos);

  useEffect(() => {
    <Navigate to={"/"} />;
  }, [todos]);

  return (
    <div className=" flex flex-col  items-center pt-[30px] text-center">
      <img src={NotFounfImg} alt="" />
      <p className="text-[20px] font-medium">Empty...</p>
    </div>
  );
}

export default NotFoundPage;
