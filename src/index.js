import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Home, Pay, CheckLogin, Layout, Login, Product, Detail } from "./Component";

//import PrivateRouter from './Component/BaiTapBuoi6/PrivateRouter';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import counterReducer from "./Component/slice/couterSlice";
// Tao store
import { configureStore } from "@reduxjs/toolkit";

const storeNodemy = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "product/",
        element: <Outlet />,
        children: [
          {
            path: ":slug",
            element: <Product />,
          },
        ],
      },
      {
        path: "pay/",
        element: <Outlet />,
        children: [
          {
            path: ":id",
            element: <Pay />,
          },
        ],
      },
    ],
  },
  {
    path: "login/",
    element: <Login />,
  },
  {
    path: "detail/",
    element: <Detail />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={storeNodemy}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
