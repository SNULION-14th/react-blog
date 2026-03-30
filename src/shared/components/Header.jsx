import lion from "@/assets/lion.jpeg";
import { useMediaQuery } from "@/shared/hooks";
import { Button } from "@/shared/components";
import { useUser } from "@/shared/context";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 640px)");
  const navigate = useNavigate();
  const { isLoggedIn, signOut } = useUser();

  const handleSignOut = () => {
    signOut();
    navigate("/");
  };

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
          {isLoggedIn ? (
            <Button onClick={handleSignOut}>로그아웃</Button>
          ) : (
            <>
              <Link to="/signin">
                <Button>SIGN IN</Button>
              </Link>
              <Link to="/signup">
                <Button>SIGN UP</Button>
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};
