import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScannerPage from "./pages/ScannerPage/ScannerPage";
import MyScansPage from "./pages/MyScansPage/MyScansPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
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
      { path: "", element: <ScannerPage /> },
      { path: "my-scans", element: <MyScansPage /> },
      { path: "profile", element: <ProfilePage /> },
      { path: "menu", element: <MenuPage /> },
    ],
  },
]);

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  //! Make sure that there is a loggedUser in every situation except from the first entry to the app. So with useEffect in every page (manage the logged user and local storage), and when there's no logged user, create a generic one that operates locally. Also, the loggedUser state should be initiated here as false, and it should be a global state, that you approach to from here AND from the myScans page, and from the Navbar component (so the profile page will appear for logged users, and the log in modal for not logged users)
  // eslint-disable-next-line
  const [isLoggedUser, setLoggedUser] = useState(true);

  return isLoggedUser ? (
    <RouterProvider router={userRouter} />
  ) : (
    <RouterProvider router={guestRouter} />
  );
};
export default App;
