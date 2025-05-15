import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./ui/Applayout";
import MainPage from "./ui/MainPage";
import Error from "./ui/Error";
import Gallery from "./ui/Gallery";
import Contact from "./ui/Contact";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
        errorElement: <Error />,
      },
      {
        path: "/gallary",
        element: <Gallery />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <Error />,
      },

      {
        path: "/gallery",
        element: <h1>Gallery</h1>,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
