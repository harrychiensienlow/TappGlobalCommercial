import { Navigate, createBrowserRouter } from "react-router-dom";

import { lazy } from "./lazy";

const LandingPage = lazy(() => import("../LandingPage"));
const TermsAndConditions = lazy(() => import("../TermsAndConditions"));
const PolicyPrivacy = lazy(() => import("../PolicyPrivacy"));
const RefundPolicy = lazy(() => import("../RefundPolicy"));

const router = createBrowserRouter([
  { path: "/tnc", element: <TermsAndConditions /> },
  { path: "/policyPrivacy", element: <PolicyPrivacy /> },
  { path: "/refundPolicy", element: <RefundPolicy /> },
  { path: "/", element: <LandingPage /> },
  { path: "/*", element: <Navigate to="/" replace /> },
]);

export default router;
