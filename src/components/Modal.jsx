import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { newTodo } from "../toolkit/features/todoesSlice";
import { toast } from "react-toastify";

function Modal({ title, hide, setHide }) {
  const dispatch = useDispatch();
  const todoTitle = useRef();

  const handleSubmit = () => {
    const value = todoTitle.current.value.trim();

    if (!value) {
      toast.warning("Input bo'sh bo'lmasligi kerak");
      return;
    }

    dispatch(newTodo(value));
    todoTitle.current.value = "";
    setHide(false);
  };

  if (hide) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-gray-800 w-full max-w-md rounded-3xl p-6 flex flex-col gap-6">
        <h2 className="text-2xl font-bold text-center">{title}</h2>

        <input
          ref={todoTitle}
          type="text"
          placeholder="Input your note..."
          className="py-3 px-4 rounded-md border border-primary focus:ring-2 focus:ring-primary outline-none dark:bg-gray-700"
        />

        <div className="flex justify-between">
          <button
            onClick={() => setHide(false)}
            className="px-5 py-2 border border-primary rounded-md"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-primary hover:bg-primaryHover text-white rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
