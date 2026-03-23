//TODO: 회원가입 페이지 구현
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

export default function SignUp() {
  return (<main className="flex items-center justify-center min-h-screen">
    <Card className="w-full max-w-md rounded-xl border bg-white shadow-lg">
      <CardHeader>
        <img src="src/assets/logo.png" alt="LOGO" className="h-30 w-30 object-cover self-center"></img>
        <CardTitle>회원가입</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="flex flex-col gap-3">
          <label className="flex text-sm font-semibold text-gray-700">
            아이디
          </label>
          <Input
            type="id"
            placeholder="아이디를 입력하세요"
            className="h-12 rounded-lg"
          />
          <label className="flex text-sm font-semibold text-gray-700">
              비밀번호
          </label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="h-12 rounded-lg"
          />
          <label className="flex text-sm font-semibold text-gray-700">
              비밀번호 확인
          </label>
          <Input
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="h-12 rounded-lg"
          />
          <label className="flex text-sm font-semibold text-gray-700">
              이름
          </label>
          <Input
            type="name"
            placeholder="이름을 입력하세요"
            className="h-12 rounded-lg"
          />
          <label className="flex text-sm font-semibold text-gray-700">
              이메일
          </label>
          <Input
            type="email"
            placeholder="이메일을 입력하세요"
            className="h-12 rounded-lg"
          />
          <label className="flex text-sm font-semibold text-gray-700">
              학교
          </label>
          <Input
            type="school"
            placeholder="학교를 입력하세요"
            className="h-12 rounded-lg"
          />
          <label className="flex text-sm font-semibold text-gray-700">
              전공
          </label>
          <Input
            type="major"
            placeholder="전공을 입력하세요"
            className="h-12 rounded-lg"
          />
        </form>
        <div className="flex w-full justify-center gap-3 mt-2">
          <button
            type="button"
            className="w-full rounded-lg p-3 bg-[#cacaca] hover:!bg-amber-500 hover:text-white">
          회원가입
          </button>
        </div>
      </CardContent>
    </Card>
  </main>
  );
}