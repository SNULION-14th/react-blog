import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./routes/Home";
import { Header } from "@/shared/components";
import Signin from "./routes/SignIn";
import Signup from "./routes/SignUp";
import { UserProvider } from "./shared/context";

// import PostPage from "./routes/Post";
function AppContent() {
  const location = useLocation();

  const HIDE_HEADER_PATHS = ["/signin", "/signup"];

  const shouldShowHeader = !HIDE_HEADER_PATHS.includes(location.pathname);

  return (
    <>
      <UserProvider>
        {shouldShowHeader && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/post/:postId" element={<PostPage />} /> */}
        </Routes>
        <Header></Header>
      </UserProvider>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
