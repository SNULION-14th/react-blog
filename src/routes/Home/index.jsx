import { posts } from "../../data/posts";
import { useState } from "react";
import { Header, Input } from "@/shared/components";
export default function Home() {
  const [search, setSearch] = useState("");
  const color_palette = [
    "bg-gray-100",
    "bg-orange-100",
    "bg-yellow-100",
    "bg-blue-100",
    "bg-pink-100",
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
          <div className="max-w-full flex justify-center mt-5">
            <p className="text-sm text-gray-500">
              {posts
                .flatMap((post) => post.tags)
                .filter(
                  (tag, index, self) =>
                    self.findIndex((t) => t.content === tag.content) === index,
                )
                .filter((tag) =>
                  tag.content.toLowerCase().includes(search.toLowerCase()),
                )
                .slice(0, 10)
                .map((tag, index) => (
                  <span
                    key={tag.id}
                    onClick={() => setSearch(tag.content)}
                    className="inline-block bg-orange-400 text-white font-bold text-xs px-2.5 py-1 rounded-md mr-2"
                  >
                    #{tag.content}
                  </span>
                ))}
            </p>
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 gap-x-6 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => {
            const bg_color =
              color_palette[post.id % color_palette.length] || "bg-gray-100";
            return (
              <div
                key={post.id}
                className={`border min-h-[250px] rounded-xl p-4 flex flex-col items-start ring-2 ring-gray-300/50 ${bg_color}`}
              >
                <h2 className="text-2xl font-bold capitalize">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-500">
                  {post.author.username}
                </p>
                <div className="flex-1 w-full flex items-center">
                  <div className="flex flex-wrap justify-start gap-2 ml-4">
                    {post.tags.map((tag) => {
                      return (
                        <span
                          key={tag.id}
                          className="inline-block bg-orange-400 text-white font-bold text-xs px-2.5 py-1 rounded-md"
                        >
                          #{tag.content}
                        </span>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-auto h-7">
                  {post.like_users.length > 0 && (
                    <span className="text-base font-bold">
                      ❤️ {post.like_users.length}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
