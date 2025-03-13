// router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFound";
import ErrorPage from "./pages/ErrorPage";
import CharactersPage from "./pages/CharactersPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage"
import FavCharsPage from "./pages/FavoriteCharactersPage";

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
        path:'/characters/:id/',
        element: <CharacterDetailsPage/>,
      },
      {
      path:'/favorites/',
      element: <FavCharsPage/>
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