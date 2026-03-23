import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";

const allTags = [
  ...new Set(posts.flatMap((post) => post.tags.map((tag) => tag.content))),
];

export default function Home() {
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

          <div className="flex flex-wrap gap-2 mt-4">
            {allTags.map((tag) => (
              <span className="px-3 py-1 bg-amber-500 text-white text-xs rounded-full font-medium">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col items-start text-left gap-4 p-8 bg-white border border-gray-200 rounded-3xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div>
                <h2 className="text-2xl font-bold mb-1">{post.title}</h2>
                <p className="text-gray-500 text-sm">{post.author.username}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-amber-500 text-white text-xs rounded-full font-medium"
                  >
                    #{tag.content}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-1 mt-auto">
                <span className="text-red-500 text-lg">❤️</span>
                <span className="text-gray-700 font-medium">
                  {post.like_users.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
