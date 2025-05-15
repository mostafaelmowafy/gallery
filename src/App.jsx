import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import MainPage from "./ui/MainPage";
import Error from "./ui/Error";
import Gallery from "./ui/Gallery";
import Contact from "./ui/Contact";

const router = createBrowserRouter(
  [
    {
      element: <Applayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <MainPage />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/gallery",
          element: <Gallery />,
        },
      ],
    },
  ],
  {
    basename: "/",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
