import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./routes/Home";
import { Header } from "@/shared/components";
import Signin from "./routes/SignIn";
import Signup from "./routes/SignUp";
import { LoggedInUserProvider } from "@/context/LoggedInUser";

function AppContent() {
  const location = useLocation();

  const HIDE_HEADER_PATHS = ["/signin", "/signup"];

  const shouldShowHeader = !HIDE_HEADER_PATHS.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LoggedInUserProvider>
        <AppContent />
      </LoggedInUserProvider>
    </BrowserRouter>
  );
}

export default App;
