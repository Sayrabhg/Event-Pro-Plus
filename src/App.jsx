
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import './App.css'
import './global.css'
import Auth from "./pages/Auth";
import Dashboard from "./components/pages/Dashboard";
import  { RoleRoute } from "./routes/ProtectedRoute";
// import Demo from "./Demo";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route
            path="/auth"
            element={
              // <PublicRoute>
              <Auth />
              // </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              <RoleRoute allowedRoles={["USER", "ADMIN"]}>
                <Dashboard />
              </RoleRoute>
            }
          />
          {/* <Route
            path="/admin"
            element={
              <RoleRoute allowedRoles={["ADMIN"]}>
                <AdminDashboard />
              </RoleRoute>
            }
          /> */}

          {/* <Route path="/demo" element={<Demo />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
