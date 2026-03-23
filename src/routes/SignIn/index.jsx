//TODO: 로그인 페이지 구현
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Input
} from "@/components/ui/input";

export default function SignIn() {
  return (
  <main className="flex items-center justify-center min-h-screen">
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-lg">
      <CardHeader>
        <img src="src/assets/logo.png" alt="LOGO" className="h-30 w-30 object-cover self-center"></img>
        <CardTitle className="text-center">로그인</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3">
          <Input
            type="id"
            placeholder="아이디를 입력하세요"
            className="h-12 rounded-lg"
          />
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="h-12 rounded-lg"
          />
        </form>
        <div className="flex w-full justify-center gap-3 mt-2">
          <button
            type="button"
            hover="bg-amber-500"
            className="w-24 rounded-lg p-3 bg-[#cacaca] hover:!bg-amber-500 hover:text-white">
          로그인
          </button>
          <button
            type="button"
            className="w-24 rounded-lg p-3 bg-[#cacaca] hover:!bg-amber-500 hover:text-white">
          회원가입
          </button>
        </div>
      </CardContent>
    </Card>
  </main>
  );
}
