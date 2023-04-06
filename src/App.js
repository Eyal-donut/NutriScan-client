import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScannerPage from "./pages/ScannerPage/ScannerPage"
import MyScansPage from "./pages/MyScansPage/MyScansPage"
import ProfilePage from "./pages/ProfilePage/ProfilePage"
import MenuPage from "./pages/MenuPage/MenuPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";


import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const userRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <WelcomePage/> },
      { path: "my-scans", element: <MyScansPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <WelcomePage/> },
      { path: "my-scans", element: <MyScansPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

const App = () => {
const [isLoggedUser, setLoggedUser] = useState(false)

  return isLoggedUser ? <RouterProvider router={userRouter}/> : <RouterProvider router={guestRouter} />;
};
export default App;
