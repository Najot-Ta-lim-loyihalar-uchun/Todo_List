import React, { use, useState } from "react";
import { modalPort } from "../toolkit/features/modalPortSlice";

import { Outlet } from "react-router-dom";
import TobBar from "../components/TobBar";

import Modal from "../components/Modal";
import { FaPlus } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

function PublicLayout() {
  const dispatch = useDispatch();

  return (
    <>
      <header className="container  pt-10 ">
        <TobBar />
      </header>
      <main className="grow">
        <Outlet />
      </main>
      <footer className="container relative bottom-0">
        <button
          className=" absolute right-2 bottom-8 flex justify-center items-center 
        p-5 rounded-full bg-[#6C63FF] hover:bg-[#5951cb] 
        text-white cursor-pointer shadow-lg"
          onClick={() => dispatch(modalPort({ open: true }))}
        >
          <FaPlus size={20} />
        </button>

        <Modal title={"NEW NOTE"} />
      </footer>
      <ToastContainer />
    </>
  );
}

export default PublicLayout;
