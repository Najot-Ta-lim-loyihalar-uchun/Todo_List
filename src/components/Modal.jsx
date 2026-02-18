import React, { useRef } from "react";

import { newTodo } from "../toolkit/features/todoesSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function Modal({ title, hide, setHide }) {
  const dispatch = useDispatch();

  const todoTitle = useRef();

  const handelSubmit = () => {
    const value = todoTitle.current.value.trim();

    if (!value) {
      toast.warning("Ma'lumot to'gri emas");
    }

    dispatch(newTodo(value));
    todoTitle.current.value = "";
    setHide(true);
  };

  return (
    <div
      className={`${hide ? "hidden" : ""} fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4 `}
    >
      <div className="bg-white w-full max-w-[500px] h-[289px] min-h-[130px] rounded-3xl p-6 flex flex-col justify-between gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-6">{title}</h2>
          <input
            ref={todoTitle}
            type="text"
            placeholder="Input your note..."
            className="py-3 px-4 outline-none border border-[#6C63FF] rounded-md w-full"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => setHide(true)}
            className="px-5 py-2 border border-[#6C63FF] rounded-md cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={() => handelSubmit()}
            className="px-5 py-2 bg-[#6C63FF] text-white rounded-md cursor-pointer hover:bg-[#5951cb]"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
