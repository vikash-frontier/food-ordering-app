import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import Restaurant from "./components/Restaurant.jsx";
import Error from "./components/Error.jsx";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Restaurant /> },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRoute} />
  </StrictMode>
);
