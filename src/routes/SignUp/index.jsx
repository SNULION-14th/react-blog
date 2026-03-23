import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.png";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-10">
      <Card className="w-[500px] border-none shadow-none lg:border lg:shadow-sm">
        <CardHeader className="flex flex-col items-center space-y-4 pt-10 px-10">
          <div className="w-32 h-32 mb-2 flex items-center justify-center">
            <img 
              src={logoImg} 
              alt="Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
          <CardTitle className="text-2xl font-bold italic tracking-tighter text-center">
            회원가입
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-5 px-10">
          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">아이디</label>
            <Input 
              placeholder="아이디를 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">비밀번호</label>
            <Input 
              type="password" 
              placeholder="비밀번호를 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">비밀번호 확인</label>
            <Input 
              type="password" 
              placeholder="비밀번호를 다시 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">이름</label>
            <Input 
              placeholder="이름을 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">이메일</label>
            <Input 
              type="email" 
              placeholder="이메일을 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">학교</label>
            <Input 
              placeholder="학교를 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>

          <div className="space-y-2 text-left">
            <label className="text-sm font-bold text-gray-700 block">전공</label>
            <Input 
              placeholder="전공 입력하세요" 
              className="h-12 bg-gray-50 border-gray-200 focus-visible:ring-amber-500" 
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col items-center gap-4 px-10 pb-10 mt-4">
          <Button className="w-full h-12 bg-gray-100 text-black focus-visible!:bg-amber-500 hover:text-white border-none shadow-none font-bold text-center transition-all duration-300 variant=ghost">
            회원가입
          </Button>
          <Link to="/signin" className="text-sm text-gray-500 hover:underline text-center">
            이미 계정이 있으신가요? 로그인하기
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}