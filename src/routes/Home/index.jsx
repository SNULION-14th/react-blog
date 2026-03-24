import { useState } from "react";
import { posts } from "../../data/posts";
import { Header, Input } from "@/shared/components";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.tags.some((tag) =>
      tag.content.toLowerCase().includes(searchTerm.toLowerCase()),
    ),
  );

  const categories = [
    "멋사",
    "치즈",
    "냠냠",
    "멋쟁이반수현",
    "회장님",
    "연예인",
    "일잘러",
    "큐트",
    "쏘스윗",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-10">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-7xl font-light tracking-tight text-black">
              my blog
            </h1>
          </div>

          <div className="w-[90vw] max-w-md flex justify-center mb-6">
            <Input
              className="h-12 px-6 rounded-lg border-gray-200 focus-visible:ring-amber-500 focus-visible:ring-2"
              type="text"
              placeholder="태그를 검색하세요"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 px-4">
            {categories.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchTerm(tag)}
                type="button"
                className="px-4 py-1.5 !bg-amber-500 !text-white rounded-full text-xs font-bold hover:bg-amber-600 transition-colors shadow-sm active:scale-95"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 w-full max-w-[1100px]">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="border-[1.5px] border-gray-100 p-10 rounded-[40px] shadow-sm bg-white hover:shadow-lg transition-all duration-300 flex flex-col gap-5"
              >
                <div>
                  <h2 className="text-4xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-400 text-xl font-medium">
                    {post.author.username}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-amber-500 text-white px-4 py-1.5 rounded-full text-sm font-bold"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-2xl">
                  <span className="text-red-500">❤️</span>
                  <span className="font-bold text-gray-700">
                    {post.like_users.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
