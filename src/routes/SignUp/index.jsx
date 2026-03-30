import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, Input } from "@/shared/components";
import { useAuth } from "@/shared/contexts/AuthContext";
import logo from "@/assets/logo.png";

export default function SignUp() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
    name: "",
    email: "",
    school: "",
    major: "",
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const isFormValid =
    Object.values(form).every((v) => v.trim()) &&
    form.password === form.passwordConfirm;

  const handleSignUp = () => {
    if (!isFormValid) return;
    login({ id: Date.now(), username: form.name });
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-10">
      <Card className="w-full max-w-md shadow-lg rounded-2xl px-4 py-6">
        <CardHeader className="flex flex-col items-center gap-4">
          <img src={logo} alt="logo" className="h-16" />
          <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">아이디</label>
            <Input
              placeholder="아이디를 입력하세요"
              value={form.username}
              onChange={handleChange("username")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">비밀번호</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={form.password}
              onChange={handleChange("password")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">비밀번호 확인</label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              value={form.passwordConfirm}
              onChange={handleChange("passwordConfirm")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">이름</label>
            <Input
              placeholder="이름을 입력하세요"
              value={form.name}
              onChange={handleChange("name")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">이메일</label>
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              value={form.email}
              onChange={handleChange("email")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">학교</label>
            <Input
              placeholder="학교를 입력하세요"
              value={form.school}
              onChange={handleChange("school")}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">전공</label>
            <Input
              placeholder="전공 입력하세요"
              value={form.major}
              onChange={handleChange("major")}
            />
          </div>
          <Button
            className="w-full mt-2 !bg-stone-600 !text-white hover:!bg-amber-500"
            onClick={handleSignUp}
            disabled={!isFormValid}
          >
            회원가입
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
