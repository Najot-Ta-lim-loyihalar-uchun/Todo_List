import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TobBar from "../components/TobBar";
import Modal from "../components/Modal";
import { FaPlus } from "react-icons/fa";
import { ToastContainer } from "react-toastify";

function PublicLayout() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <header className="container mx-auto pt-10 px-4">
        <TobBar />
      </header>

      <main className="flex-grow container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <button
        onClick={() => setShow(true)}
        className="fixed bottom-8 right-6 p-5 rounded-full bg-primary hover:bg-primaryHover text-white shadow-lg transition"
      >
        <FaPlus size={20} />
      </button>

      <Modal hide={!show} setHide={setShow} title="NEW NOTE" />

      <ToastContainer />
    </div>
  );
}

export default PublicLayout;
