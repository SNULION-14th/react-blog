//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import logo from "@/assets/logo.png";

export default function SignUp() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
        <Card className="w-[450px] px-8 pb-8 pt-2 flex flex-col items-center bg-white">
          <CardHeader className="flex flex-col items-center gap-4">
            <div className="w-40 h-40 -mt-9">
              <img src={logo} alt="logo" className="w-full object-contain" />
            </div>
            <CardTitle className="text-2xl font-bold">회원가입</CardTitle>
          </CardHeader>

          <CardContent className="w-full flex flex-col gap-3 mt-4">
            <p className="text-left text-xs font-bold">아이디</p>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
            <p className="text-left text-xs font-bold">비밀번호</p>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
              bo
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
            <p className="text-left text-xs font-bold">비밀번호 확인</p>
            <input
              type="password check"
              placeholder="비밀번호를 입력하세요"
              bo
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
            <p className="text-left text-xs font-bold">이름</p>
            <input
              type="name"
              placeholder="이름을 입력하세요"
              bo
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
            <p className="text-left text-xs font-bold">이메일</p>
            <input
              type="e-mail"
              placeholder="이메일을 입력하세요"
              bo
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
            <p className="text-left text-xs font-bold">학교</p>
            <input
              type="school"
              placeholder="학교를 입력하세요"
              bo
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
            <p className="text-left text-xs font-bold">전공</p>
            <input
              type="major"
              placeholder="전공을 입력하세요"
              bo
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-amber-500 text-sm"
            />
          </CardContent>

          <CardFooter className="w-full flex gap-2 justify-center mt-4">
            <button className="flex-1 !bg-gray-200 hover:!bg-yellow-300 hover:text-white text-black py-3 rounded-xl text-sm !font-bold transition-colors">
              회원가입
            </button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
