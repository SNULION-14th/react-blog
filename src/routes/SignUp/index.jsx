import { Button, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignUp() {
  return (
    // 전체 페이지 패딩 추가 (스크롤 시 여유 공간)
    <div className="flex flex-col justify-center items-center py-10 px-4 min-h-screen">
      <Card className="w-full max-w-[450px] border-gray-200 shadow-lg rounded-3xl p-2">
        <CardHeader className="flex flex-col items-center pb-6">
          <div className="w-32 h-20 mb-2 flex items-center justify-center">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="w-full object-contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold tracking-tight text-gray-800">
            회원가입
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          {/* 입력 세트 (아이디) */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">
              아이디
            </label>
            <Input
              type="text"
              placeholder="아이디를 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>

          {/* 비밀번호 */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">
              비밀번호
            </label>
            <Input
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>

          {/* 비밀번호 확인 */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">
              비밀번호 확인
            </label>
            <Input
              type="password"
              placeholder="비밀번호를 다시 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>

          {/* 이름 */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">이름</label>
            <Input
              type="text"
              placeholder="이름을 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>

          {/* 이메일 */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">
              이메일
            </label>
            <Input
              type="email"
              placeholder="이메일을 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>

          {/* 학교 */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">학교</label>
            <Input
              type="text"
              placeholder="학교를 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>

          {/* 전공 */}
          <div className="flex flex-col items-start gap-1.5">
            <label className="text-sm font-bold text-gray-700 ml-2">전공</label>
            <Input
              type="text"
              placeholder="전공을 입력하세요"
              className="focus-visible:ring-amber-500 border-gray-200 rounded-xl h-12"
            />
          </div>
        </CardContent>

        <CardFooter className="pt-2">
          {/* 가로로 꽉 차는 버튼 */}
          <Button>
            <b>회원가입</b>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
