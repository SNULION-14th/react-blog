import { posts } from "../../data/posts";
import { Header, Input } from "@/shared/components";

export default function Home() {
  const tags = [
    "#멋사",
    "#치즈",
    "#냠냠",
    "#멋쟁이김세안",
    "#회장님",
    "#연예인",
    "#일잘러",
    "#큐트",
    "#쏘스윗",
  ];

  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">my blog</h1>
          </div>

          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>

          <div className="tag-section w-[90vw] max-w-md">
            {tags.map((tag) => (
              <div key={tag} className="tag-block">
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          <div className="container !bg-yellow-100">
            <p className="post">#1 Post</p>
            <p className="postDes">지호</p>
            <br></br>
            <br></br>
            <div className="tag-section-box">
              <span className="tag-block">#멋사</span>
              <span className="tag-block">#치즈</span>
              <span className="tag-block">#냠냠</span>
            </div>
            <br></br>
            <p style={{ display: "flex", justifyContent: "flex-start" }}>
              ❤️ 2
            </p>
          </div>

          <div className="container !bg-red-100">
            <p className="post">#2 Post</p>
            <p className="postDes">수빈</p>
            <br></br>
            <br></br>
            <div className="tag-section-box">
              <span className="tag-block">#멋사</span>
              <span className="tag-block">#멋쟁이김세안</span>
            </div>
            <br></br>
            <p style={{ display: "flex", justifyContent: "flex-start" }}>
              ❤️ 1
            </p>
          </div>

          <div className="container">
            <p className="post">#3 Post</p>
            <p className="postDes">록희</p>
            <br></br>
            <br></br>
            <div className="tag-section-box">
              <span className="tag-block">#회장님</span>
              <span className="tag-block">#연예인</span>
            </div>
          </div>

          <div className="container !bg-red-100">
            <p className="post">#4 Post</p>
            <p className="postDes">지원</p>
            <br></br>
            <br></br>
            <div className="tag-section-box">
              <span className="tag-block">#일잘러</span>
              <span className="tag-block">#큐트</span>
            </div>
            <br></br>
            <p style={{ display: "flex", justifyContent: "flex-start" }}>
              ❤️ 3
            </p>
          </div>

          <div className="container !bg-yellow-100">
            <p className="post">#5 Post</p>
            <p className="postDes">예빈</p>
            <br></br>
            <br></br>
            <div className="tag-section-box">
              <span className="tag-block">#멋사</span>
              <span className="tag-block">#쏘스윗</span>
            </div>
            <br></br>
            <p style={{ display: "flex", justifyContent: "flex-start" }}>
              ❤️ 1
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
