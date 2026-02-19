import React from "react";
import { useDispatch, useSelector } from "react-redux";

/* assets && icons */
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoPencil } from "react-icons/go";

/* rdxsf */
import { deleteTodo, complateTodo } from "../toolkit/features/todoesSlice";
import { Navigate } from "react-router-dom";
import NotFoundPage from "../pages/NotFoundPage";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todoes);
  const searched = useSelector((state) => state.search.value);

  const filtered = todos.filter((item) =>
    item.title.toLowerCase().includes(searched.toLowerCase()),
  );

  if (todos.length < 1) {
    <NotFoundPage todos={todos} />;
    return <Navigate to={"*"} />;
  }

  return (
    <ul className="max-w-[580px] mx-auto ">
      {filtered.map((item) => {
        let { id, completed, title } = item;

        return (
          <li
            key={id}
            className="flex flex-row justify-between items-center 
            gap-4 py-4 border-b border-[#6C63FF]"
          >
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(complateTodo(id))}
                className="cursor-pointer h-6 w-6"
              />

              <h2
                className={`text-lg font-bold break-words ${
                  completed ? "line-through text-gray-400" : ""
                }`}
              >
                {title}
              </h2>
            </div>

            <div className="flex gap-4 text-xl">
              <GoPencil className="cursor-pointer" />
              <RiDeleteBin5Line
                onClick={() => dispatch(deleteTodo(id))}
                className="cursor-pointer text-red-500 hover:text-red-700"
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
