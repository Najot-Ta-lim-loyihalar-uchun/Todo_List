import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import TobBar from "../components/TobBar";

import Modal from "../components/Modal";
import { FaPlus } from "react-icons/fa";

import { ToastContainer } from "react-toastify";

function PublicLayout() {
  const [show, setShow] = useState(true);
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
          onClick={() => setShow(false)}
        >
          <FaPlus size={20} />
        </button>

        <Modal hide={show} setHide={setShow} title={"NEW NOTE"} />
      </footer>
      <ToastContainer />
    </>
  );
}

export default PublicLayout;
