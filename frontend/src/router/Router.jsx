import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootPage from "../pages/RootPage";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ClaimsPage from "../pages/ClaimsPage";
import ResourcesPage from "../pages/ResourcesPage";
import AboutUsPage from "../pages/AboutUsPage";
import QuotePage from "../pages/QuotePage";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "claims",
        element: <ClaimsPage />,
      },
      {
        path: "resources",
        element: <ResourcesPage />,
      },
      {
        path: "aboutUs",
        element: <AboutUsPage />,
      },
      {
        path: "quote",
        element: <QuotePage />,
      },
    ],
  },
]);

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}
