import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import Home from "./routes/Home";
import { Header } from "@/shared/components";
import Signin from "./routes/SignIn";
import Signup from "./routes/SignUp";
// 1. UserProvider 임포트 추가 (경로를 확인하세요!)
import { UserProvider } from "@/shared/context/userContext";

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
    // 2. UserProvider로 AppContent 전체를 감싸줍니다.
    <UserProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
