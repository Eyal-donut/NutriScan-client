import RootPage from "./pages/RootPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import ScannerPage from "./pages/ScannerPage/ScannerPage";
import MyScansPage from "./pages/MyScansPage/MyScansPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
// import MenuPage from "./pages/MenuPage/MenuPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import ProductPage from "./pages/ProductPage/ProductPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useLoggedUserContext } from "./context/loggedUserContext";

import { useEffect } from "react";
import { useLoggedUser } from "./hooks/useLoggedUser";

const App = () => {
  const { isLoggedUser } = useLoggedUserContext();
  const { setLoggedUserFromLocal } = useLoggedUser();

  const userRouter = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: "", element: isLoggedUser ? <ScannerPage /> : <ProfilePage/>},
        { path: "product", element: <ProductPage /> },
        { path: "my-scans", element: <MyScansPage /> },
        { path: "profile", element: <ProfilePage /> },
        // { path: "menu", element: <MenuPage /> },
      ],
    },
  ]);
  
  const guestRouter = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
      errorElement: <ErrorPage />,
      children: [{ path: "", element: <ScannerPage /> }],
    },
  ]);

  useEffect(() => {
    setLoggedUserFromLocal();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {isLoggedUser === true && <RouterProvider router={userRouter} />}
      {isLoggedUser === false && <RouterProvider router={guestRouter} />}
    </>
  );
};
export default App;
