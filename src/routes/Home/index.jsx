import React from "react";
import { Button } from "../../components/ui/button";
// 1. 더미 데이터 임포트 (경로 확인 필수!)
import { posts } from "../../data/posts";
import { Link } from "react-router-dom";

const Home = () => {
  // 중복 없는 태그 목록 추출 (검색창 아래 표시용)
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags.map((t) => t.content))),
  );

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b border-gray-50">
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="text-[#FF7A00] font-black text-2xl tracking-tighter cursor-pointer"
          >
            SNULION BLOG
          </Link>
        </div>
        <div className="flex gap-4">
          <Link to="/signin">
            <Button variant="ghost" className="font-bold hover:text-[#FF7A00]">
              SignIn
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="ghost" className="font-bold hover:text-[#FF7A00]">
              SignUp
            </Button>
          </Link>
        </div>
      </header>

      {/* 2. Main Section */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-6xl font-bold text-center mb-16 tracking-tight text-gray-900">
          MY BLOG
        </h1>

        {/* 3. Search & Tags */}
        <div className="flex flex-col items-center gap-8 mb-20">
          <div className="w-full max-w-lg">
            <input
              type="text"
              placeholder="태그를 검색하세요"
              className="w-full border-2 border-gray-100 rounded-full py-3 px-8 focus:outline-none focus:border-[#FF7A00] transition-all text-center shadow-sm"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {allTags.map((tagContent, index) => (
              <Button
                key={index}
                className="bg-[#FF7A00] hover:bg-[#e66e00] text-white rounded-full px-5 py-1 h-auto text-sm font-semibold border-none"
              >
                #{tagContent}
              </Button>
            ))}
          </div>
        </div>

        {/* 4. Post Grid (데이터 매핑) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group bg-white border border-gray-100 rounded-[32px] p-10 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* 제목 */}
                <h2 className="text-3xl font-black mb-2 group-hover:text-[#FF7A00] transition-colors">
                  {post.title}
                </h2>
                {/* 작성자 (객체 내부의 username 접근) */}
                <p className="text-gray-400 font-medium mb-8">
                  {post.author.username}
                </p>

                {/* 태그 목록 (객체 내부의 content 접근) */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-[#FF7A00] text-white px-3 py-1 rounded-lg text-[11px] font-black tracking-wider"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
              </div>

              {/* 좋아요 (like_users 배열의 길이) */}
              <div className="flex items-center gap-2 text-red-500 font-bold">
                <span className="text-xl">❤️</span>
                <span className="text-gray-700">{post.like_users.length}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
