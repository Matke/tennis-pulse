import { createBrowserRouter } from "react-router";

import TestPage from "@/pages/TestPage";
import LoginLayout from "@/pages/LoginLayout";

const router = createBrowserRouter([
  {
    path: "/test",
    Component: TestPage,
  },
  {
    path: "/loginTest",
    Component: LoginLayout,
  },
]);

export default router;
