import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, Input } from "@/shared/components";
import { useAuth } from "@/shared/contexts/AuthContext";
import logo from "@/assets/logo.png";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username) return;
    login({ id: Date.now(), username });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <Card className="w-full max-w-md shadow-lg rounded-2xl px-4 py-6">
        <CardHeader className="flex flex-col items-center gap-4">
          <img src={logo} alt="logo" className="h-16" />
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input
            placeholder="아이디를 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center gap-3 mt-2">
            <Button onClick={handleLogin}>로그인</Button>
            <Link to="/signup">
              <Button>회원가입</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
