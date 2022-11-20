import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./styles/Global.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
