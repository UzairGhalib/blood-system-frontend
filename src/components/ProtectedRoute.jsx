import { Navigate, Outlet } from "react-router-dom";

const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem("bloodlinkCurrentUser") || "null");
  } catch {
    return null;
  }
};

const normalizeRole = (role = "") => {
  const value = String(role).toLowerCase().trim();

  if (value === "donar" || value === "donor") return "donor";
  if (value === "requester" || value === "requestor") return "requester";

  return "";
};

const getDashboardPath = (role) => {
  const normalizedRole = normalizeRole(role);

  if (normalizedRole === "donor") return "/donor-dashboard";
  if (normalizedRole === "requester") return "/requester-dashboard";

  return "/login";
};

const ProtectedRoute = ({ allowedRole }) => {
  const currentUser = getCurrentUser();
  const currentRole = normalizeRole(currentUser?.role);

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && currentRole !== allowedRole) {
    return <Navigate to={getDashboardPath(currentRole)} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
