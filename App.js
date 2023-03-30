import ReactDOM from "react-dom/client";
import Body from "./src/components/Body/Body";
import Header from "./src/components/Header/Header";
import Footer from "./src/components/Footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact/Contact";
import Error from "./src/components/Error/Error";
import RestaurantMenu from "./src/components/RestaurantMenu/RestaurantMenu";
import Profile from "./src/components/Profile/Profile";
import { lazy, Suspense, useState } from "react";
import UserContext from "./src/utils/UserContext";
const About = lazy(() => import("./src/components/About/About"));

const AppLayout = function () {
  const [user, setUser] = useState({
    name: "Vittu Singh",
    email: "vittusingh@gmail.com",
  });
  return (
    <>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", // parentPath/{path}=> localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
