import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { Link } from "react-router-dom";
import { useLoggedIn } from "../context";

//TODO: 로그인 상태에 따라 버튼을 바꾸고, 로그아웃 기능 추가
export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  // 로그인 상태에 따라 버튼을 바꾸고, 로그아웃 기능 추가

  //1. Context에서 isLoggedIn 상태와 logout 함수 가져오기
  const { isLoggedIn, logout } = useLoggedIn();

  return (
    <div
      className={`sticky bg-white shadow-accent shadow-lg top-0 left-0 z-50 flex items-center justify-between w-full gap-5 px-5 py-2.5 h-20`}
    >
      <Link to="/">
        <div className="flex flex-row items-center gap-5">
          <img src={lion} alt="lion" className="max-h-16 rounded-full" />
          <div className="text-xl">SNULION BLOG</div>
        </div>
      </Link>

      {isMobile ? null : (
        <div className="flex flex-row gap-5">
          {/* 3. 로그인 상태에 따라 버튼 교체 */}
          {isLoggedIn ? (
            //로그인 상태: 로그아웃 버튼 표시
            <Link to="/">
              <Button onClick={logout}>로그아웃</Button>
            </Link>
          ) : (
            //로그아웃 상태: signin, signup 버튼 표시 ({} 내의 내용도 <></> fragment로 감싸야 함!!)
            <>
              <Link to="/signin">
                <Button>sign in</Button>
              </Link>
              <Link to="/signup">
                <Button>sign up</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
