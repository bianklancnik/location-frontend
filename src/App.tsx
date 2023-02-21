import { useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import AddLocation from "./components/location/AddLocation";
import EditLocation from "./components/location/EditLocation";
import ChangePassword from "./pages/ChangePassword";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Location from "./pages/Location";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import "./styles/Global.css";

type ProtectedRouteType = {
  user: any;
  redirectPath?: any;
};

const ProtectedRoute = ({ user, redirectPath = "/" }: ProtectedRouteType) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

function App() {
  const [user, setUser] = useState(localStorage.getItem("accessToken"));

  const onLogIn = () => {
    setUser(localStorage.getItem("accessToken") || "{}");
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route element={<ProtectedRoute user={!user} />}>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn onLogIn={onLogIn} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/change-password" element={<ChangePassword />} />
          </Route>
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/settings" element={<Settings />} />
            <Route path="/location" element={<Location />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/add-location" element={<AddLocation />} />
            <Route path="/edit-location" element={<EditLocation />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
