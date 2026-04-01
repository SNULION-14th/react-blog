import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./routes/Home";
import { Header } from "@/shared/components";
import Signin from "./routes/SignIn";
import Signup from "./routes/SignUp";
<<<<<<< HEAD
import { UserProvider } from "@/shared/context/userContext";
=======
>>>>>>> 8bd667ae521a4b890bfdc16c768f0f1e683d7f2a

// import PostPage from "./routes/Post";
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
        {/* <Route path="/post/:postId" element={<PostPage />} /> */}
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <UserProvider>
        <AppContent />
      </UserProvider>
=======
      <AppContent />
>>>>>>> 8bd667ae521a4b890bfdc16c768f0f1e683d7f2a
    </BrowserRouter>
  );
}

export default App;
