import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";

function SignIn() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("로그인 시도:", { id, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 p-4">
      <Card className="w-full max-w-[400px] border-none shadow-lg p-6">
        <CardHeader className="flex flex-col items-center gap-4 pb-8">
          <div className="w-20 h-20 flex items-center justify-center relative">
            <img src="/src/assets/logo.png" alt="Logo" className="w-full" />
          </div>
          <CardTitle className="text-2xl font-bold">로그인</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
            />
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-200 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
            />
          </form>
        </CardContent>
        <CardFooter className="flex justify-center gap-3 pt-6">
          <Button
            onClick={handleLogin}
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-6 rounded-md transition-colors border-none shadow-none"
          >
            로그인
          </Button>
          <Button
            variant="outline"
            className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold px-8 py-6 rounded-md border-none shadow-none transition-colors"
          >
            회원가입
          </Button>
        </CardFooter>{" "}
      </Card>
    </div>
  );
}

export default SignIn;
