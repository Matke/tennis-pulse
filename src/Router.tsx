// React router
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

// layouts
import AuthLayout from "@/layouts/AuthLayout";

// pages
import Signup from "@/pages/auth/Signup";
import Login from "@/pages/auth/Login";
import NotFound from "@/pages/NotFound";
import TestPage from "@/pages/test/TestPage";
import AppLayout from "@/layouts/AppLayout";
import Home from "@/pages/Home";
import Matches from "@/pages/Matches";
import Challenge from "@/pages/Challenge";
import Tournaments from "@/pages/Tournaments";
import Head2Head from "@/pages/Head2Head";
import Settings from "@/pages/Settings";
import Profile from "@/pages/Profile";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ResetPassword from "@/pages/auth/ResetPassword";
import CheckEmail from "@/pages/auth/CheckEmail";
import VerifyEmail from "@/pages/auth/VerifyEmail";
import OnboardLayout from "@/layouts/OnboardLayout";
import Welcome from "@/pages/onboarding/Welcome";
import ProtectedRoute from "@/utils/ProtectedRoute";
import PublicRoute from "@/utils/PublicRoute";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="forgot-password"
            element={
              <PublicRoute>
                <ForgotPassword />
              </PublicRoute>
            }
          />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="email-confirmation" element={<CheckEmail />} />
          <Route path="verify-email" element={<VerifyEmail />} />
        </Route>

        <Route element={<OnboardLayout />}>
          <Route path="welcome" element={<Welcome />} />
        </Route>

        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="matches" element={<Matches />} />
          <Route path="challenge" element={<Challenge />} />
          <Route path="tournaments" element={<Tournaments />} />
          <Route path="head2head" element={<Head2Head />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* be removed, for testing components */}
        <Route path="test" element={<TestPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
