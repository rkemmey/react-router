// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import CharactersPage from "./pages/CharactersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about/",
        element: <AboutPage />,
      },
      {
        path: "/characters/",
        element: <CharactersPage />,
      },
      {
        //http://localhost:5173`/<anything not matching prev patterns>/`
        path: "*",
        element: <NotFoundPage />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

export default router;