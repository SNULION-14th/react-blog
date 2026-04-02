import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./routes/Home";
import { Header } from "@/shared/components";
import Signin from "./routes/SignIn";
import Signup from "./routes/SignUp";
import { LoginProvider } from "@/shared/context/userContext";
// import PostPage from "./routes/Post";

function AppContent() {
  const location = useLocation();

  const HIDE_HEADER_PATHS = ["/signin", "/signup"];

  const shouldShowHeader = !HIDE_HEADER_PATHS.includes(location.pathname);

  return (
    <>
      <LoginProvider>
        {shouldShowHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/post/:postId" element={<PostPage />} /> */}
        </Routes>
      </LoginProvider>
    </>
  );
}

function App() {
  return (
    <LoginProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LoginProvider>
  );
}

export default App;
