import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* Layout */
import PublicLayout from "./layout/PublicLayout";

/* pages  */
import TodoPage from "./pages/TodoPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <PublicLayout />,
      children: [
        {
          index: true,
          element: <TodoPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
