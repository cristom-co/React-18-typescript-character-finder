import { createBrowserRouter } from "react-router-dom";

import Root from "../pages/root";
import ErrorPage from "../pages/error-page";
import Character from "../pages/character";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "character/:characterId",
        element: <Character />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
