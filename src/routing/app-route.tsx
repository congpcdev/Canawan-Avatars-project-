import {
  BrowserRouter,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Layout from "../components/layouts";
import { CustomAvatar } from "../pages";
import Centralized from "../pages/centralized";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Centralized />,
//     // loader: rootLoader,
//     children: [],
//   },
//   {
//     path: "/custom-avatar/:id",
//     element: <CustomAvatar />,
//     // loader: rootLoader,
//     children: [],
//   },
//   {
//     path: "/sign-in",
//     element: <CustomAvatar />,
//     // loader: rootLoader,
//     children: [],
//   },
// ]);
export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout>
              <Outlet />
            </Layout>
          }
        >
          <Route path="/" element={<Centralized />}></Route>
          <Route path="/custom-avatar/:id" element={<CustomAvatar />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
