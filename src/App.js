import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScannerPage from "./pages/ScannerPage/ScannerPage"
import MyScansPage from "./pages/MyScansPage/MyScansPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import MenuPage from "./pages/MenuPage/MenuPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <ScannerPage /> },
      { path: "my-scans", element: <MyScansPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
