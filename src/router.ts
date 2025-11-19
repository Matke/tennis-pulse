import { createBrowserRouter } from "react-router";

import TestPage from "@/pages/TestPage";

const router = createBrowserRouter([
  {
    path: "/test",
    Component: TestPage,
  },
]);

export default router;
