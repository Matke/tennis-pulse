import { createBrowserRouter } from "react-router";

import TestPage from "@/pages/TestPage";
import LoginLayout from "@/pages/LoginLayout";
import NotFoundPage from "@/pages/NotFoundPage";


const router = createBrowserRouter([
  {
    path: "/test",
    Component: TestPage,
  },
  {
    path: "/loginTest",
    Component: LoginLayout,
  },
  {
    path: "*",
    Component: NotFoundPage,
  }
]);

export default router;
