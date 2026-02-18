import React, { useState } from "react";

/* assets && icons */
import { FaPlus } from "react-icons/fa";

/* components */
import TodoList from "../components/TodoList";
import Modal from "../components/Modal";

function TodoPage() {
  return (
    <section className="container relative  w-full max-w-4xl mx-auto px-4 py-6">
      <TodoList />
    </section>
  );
}

export default TodoPage;
