import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import logo from "@/assets/logo.png";

//TODO: 회원가입 페이지 구현
export default function SignUp() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-neutral-50 p-4">
      <Card className="w-full max-w-md border border-neutral-100 rounded-2xl">
        <CardHeader className="flex flex-col items-center pt-2 pb-5">
          <img src={logo} className="w-40 h-40 object-contain mx-px" />
          <CardTitle className="text-3xl font-bold tracking-tight text-black mx-px">
            회원가입
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-3 px-10">
          <label className="flex text-sm font-bold text-black ml-1">
            아이디
          </label>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <label className="flex text-sm font-bold text-black ml-1">
            비밀빈호
          </label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <label className="flex text-sm font-bold text-black ml-1">
            비밀번호 확인
          </label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <label className="flex text-sm font-bold text-black ml-1">이름</label>
          <Input
            type="password"
            placeholder="이름을 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <label className="flex text-sm font-bold text-black ml-1">
            이메일
          </label>
          <Input
            type="password"
            placeholder="이메일을 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <label className="flex text-sm font-bold text-black ml-1">학교</label>
          <Input
            type="password"
            placeholder="학교를 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
          <label className="flex text-sm font-bold text-black ml-1">전공</label>
          <Input
            type="password"
            placeholder="전공을 입력하세요"
            className="w-full text-base py-3 border-neutral-200 placeholder:text-neutral-400 focus-visible:ring-black"
          />
        </CardContent>

        {/* 4. CardFooter: 하단 버튼들 */}
        <CardFooter className="flex justify-center pt-1 pb-6 px-10">
          <Button
            variant="secondary"
            className="w-full text-base font-semibold text-black bg-neutral-100 hover:bg-neutral-200"
          >
            회원가입
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
