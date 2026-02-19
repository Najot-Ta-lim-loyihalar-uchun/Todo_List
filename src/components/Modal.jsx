import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodo, updateTodo } from "../toolkit/features/todoesSlice";
import { toast } from "react-toastify";
import { modalPort } from "../toolkit/features/modalPortSlice";

function Modal() {
  const modalPortState = useSelector((state) => state.modal.open);
  const modalPortID = useSelector((state) => state.modal.id);
  const modalPortValue = useSelector((state) => state.modal.value);
  const [text, setText] = React.useState(modalPortValue);
  useEffect(() => {
    setText(modalPortValue);
  }, [modalPortValue]);
  const title = modalPortID ? "EDIT NOTE" : "NEW NOTE";

  const dispatch = useDispatch();

  const todoTitle = useRef();
  const handleSubmit = () => {
    const value = todoTitle.current.value.trim();
    if (!value) {
      toast.warning("Input bo'sh bo'lmasligi kerak");
      return;
    }
    if (modalPortID) {
      dispatch(updateTodo({ title: value, id: modalPortID }));
      dispatch(modalPort({ open: false }));
      return;
    }

    dispatch(newTodo(value));
    todoTitle.current.value = "";
    dispatch(modalPort({ open: false }));
  };
  if (!modalPortState) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white dark:bg-[#252525] dark:border border-white w-full max-w-md h-[300px] rounded-3xl p-6 flex flex-col justify-between gap-6">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center mb-3">{title}</h2>
          <input
            ref={todoTitle}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={"Input your note..."}
            className="py-3 px-4 w-full rounded-md border border-[#6C63FF] dark:border-[#fff] outline-none "
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => dispatch(modalPort({ open: false }))}
            className="px-5 py-2 border border-[#6C63FF] text-[#6C63FF] rounded-md cursor-pointer uppercase"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-[#6C63FF] hover:bg-[#6C63FF] text-white rounded-md cursor-pointer uppercase"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modal;
