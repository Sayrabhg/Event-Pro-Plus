import { Navigate } from "react-router-dom";
import { getToken } from "../utils/token";

/* Default export */
export default function ProtectedRoute({ children }) {
    const token = getToken();
    if (!token) {
        return <Navigate to="/auth" replace />;
    }
    return children;
}

/* Named export */
export function RoleRoute({ children, allowedRoles = [] }) {
    const token = getToken();
    const role = localStorage.getItem("role");

    if (!token || (allowedRoles.length && !allowedRoles.includes(role))) {
        return <Navigate to="/auth" replace />;
    }

    return children;
}
