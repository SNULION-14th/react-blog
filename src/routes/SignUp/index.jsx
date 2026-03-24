import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/shared/components";
import { Input } from "@/shared/components";
import logo from "@/assets/logo.png";

export default function SignUp() {
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
            <Input placeholder="아이디를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">비밀번호</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">비밀번호 확인</label>
            <Input type="password" placeholder="비밀번호를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">이름</label>
            <Input placeholder="이름을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">이메일</label>
            <Input type="email" placeholder="이메일을 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">학교</label>
            <Input placeholder="학교를 입력하세요" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">전공</label>
            <Input placeholder="전공 입력하세요" />
          </div>
          <Button className="w-full mt-2">회원가입</Button>
        </CardContent>
      </Card>
    </div>
  );
}
