import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error from "./Components/ErrorPage/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <div>Hello world!</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
  </React.StrictMode>
);
