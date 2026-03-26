import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button.jsx";

function SignUp() {
  // 1. 모든 입력값을 하나의 객체(State)로 관리합니다.
  const [formData, setFormData] = useState({
    id: "",
    password: "",
    confirmPassword: "",
    name: "",
    email: "",
    school: "",
    major: "",
  });

  // 2. 입력창에 글자를 칠 때마다 실행되는 함수입니다.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 3. 회원가입 버튼을 눌렀을 때 실행되는 함수입니다.
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("회원가입 시도 데이터:", formData);
    alert("회원가입 버튼이 클릭되었습니다!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50/50 py-12 px-4">
      <Card className="w-full max-w-[450px] border-none shadow-lg p-6">
        <CardHeader className="flex flex-col items-center gap-4 pb-6">
          <div className="w-20 h-20 flex items-center justify-center">
            {/* 로고 이미지 경로가 맞는지 확인해 보세요! */}
            <img src="/src/assets/logo.png" alt="Logo" className="w-full" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">
            회원가입
          </CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSignUp} className="flex flex-col gap-5">
            {/* 아이디 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                아이디
              </label>
              <input
                type="text"
                name="id"
                placeholder="아이디를 입력하세요"
                value={formData.id}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>

            {/* 비밀번호 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                비밀번호
              </label>
              <input
                type="password"
                name="password"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>

            {/* 비밀번호 확인 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                비밀번호 확인
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="비밀번호를 입력하세요"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>

            {/* 이름 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                이름
              </label>
              <input
                type="text"
                name="name"
                placeholder="이름을 입력하세요"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>

            {/* 이메일 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                이메일
              </label>
              <input
                type="email"
                name="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>

            {/* 학교 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                학교
              </label>
              <input
                type="text"
                name="school"
                placeholder="학교를 입력하세요"
                value={formData.school}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>

            {/* 전공 */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">
                전공
              </label>
              <input
                type="text"
                name="major"
                placeholder="전공 입력하세요"
                value={formData.major}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-orange-100 transition-all text-sm"
              />
            </div>
          </form>
        </CardContent>

        <CardFooter className="pt-6">
          <Button
            onClick={handleSignUp}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-6 rounded-md transition-colors border-none shadow-none"
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default SignUp;
