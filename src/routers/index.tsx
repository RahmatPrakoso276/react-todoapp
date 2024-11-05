import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layouts/RouteLayout";

import TodoApp from "../pages/TodoApp";
import Belajar from "../pages/Belajar"; //belajar react
import Props from "../pages/Props";
import Props2 from "../pages/Props2";
import Indexes from "../pages/index";
import Profile from "../pages/Profile";
import Hooks1 from "../pages/todos/Hooks1";
import EventHandler from "../pages/EventHandler";
import TodoId from "../pages/todos/_id.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: <TodoApp />,
      },
      {
        path: "/belajar",
        element: <Belajar />,
      },
      {
        path: "/props",
        element: (
          <Props name="Rahmat" stacks={["React", "Javascript", "python"]} />
        ),
      },
      {
        path: "/props2",
        element: <Props2 title="Belajar React" childern={<div>Props</div>} />,
      },
      {
        path: "/index",
        element: <Indexes />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/hooks1",
        element: <Hooks1 />,
      },
      {
        path: "/hooks1/:id",
        element: <TodoId />,
      },
      {
        path: "/eventhandler",
        element: <EventHandler />,
      },
    ],
  },
  // contoh jika ingin menggunakan layout lain
  // {
  //   path: "/login",
  //   element: <LoginLayout />, // Menggunakan LoginLayout untuk halaman login
  //   children: [
  //     {
  //       path: "/",
  //       element: <Login />, // Halaman login Anda
  //     },
  //   ],
  // },
]);
