// React router
import { BrowserRouter, Route, Routes } from "react-router";

// layouts
import AuthLayout from "@/layouts/AuthLayout";

// pages
import Signup from "@/pages/auth/Signup";
import Login from "@/pages/auth/Login";
import NotFound from "@/pages/NotFound";
import TestPage from "@/pages/test/TestPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* be removed, for testing components */}
        <Route path="test" element={<TestPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
