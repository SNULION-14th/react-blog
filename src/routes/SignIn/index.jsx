import { Link } from "react-router-dom";
import { Button, Input, AuthCard } from "@/shared/components";
export default function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,_#fef3c7_0%,_#fff7ed_30%,_#ffffff_68%)] px-5 py-10">
      <AuthCard
        title="로그인"
        description="아이디와 비밀번호를 입력하고 SNULION BLOG를 시작해보세요."
      >
        <form className="space-y-4">
          <div className="space-y-2 text-left">
            <label htmlFor="signin-id" className="text-sm font-semibold text-stone-700">
              아이디
            </label>
            <Input
              id="signin-id"
              type="text"
              placeholder="아이디를 입력하세요"
              className="h-12 rounded-xl border-stone-200 bg-stone-50"
            />
          </div>

          <div className="space-y-2 text-left">
            <label
              htmlFor="signin-password"
              className="text-sm font-semibold text-stone-700"
            >
              비밀번호
            </label>
            <Input
              id="signin-password"
              type="password"
              placeholder="비밀번호를 입력하세요"
              className="h-12 rounded-xl border-stone-200 bg-stone-50"
            />
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <Button className="h-12 flex-1 rounded-xl bg-stone-900 text-sm text-white hover:!bg-amber-500">
              로그인
            </Button>
            <Button
              asChild
              className="h-12 flex-1 rounded-xl border border-stone-200 bg-white text-sm text-stone-700 hover:!bg-stone-100"
            >
              <Link to="/signup">회원가입</Link>
            </Button>
          </div>
        </form>
      </AuthCard>
    </main>
  );
}
