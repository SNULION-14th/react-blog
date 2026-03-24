import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";
export default function Home() {
  const allTags = posts.reduce((acc, post) => {
    post.tags.forEach((tag) => acc.add(tag.content));
    return acc;
  }, new Set());

  const uniqueTags = Array.from(allTags);
  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">my blog</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input type="text" placeholder="태그를 검색하세요" />
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-[80%] mx-auto">
            {uniqueTags.map((tagName) => (
              <span
                key={tagName}
                className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-medium cursor-pointer hover:bg-amber-600 transition-colors shadow-sm"
              >
                #{tagName}
              </span>
            ))}
          </div>
        </div>

        {/* TODO: 검색 결과 포스트 만들기 */}
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border border-gray-200 aspect-square rounded-2xl p-6 shadow-sm flex flex-col justify-between min-h-[200px] items-start text-left"
            >
              <div>
                <h2 className="text-2xl font-bold mb-1">{post.title}</h2>
                <p className="text-gray-400 text-sm mb-4">
                  {post.author.username}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="bg-amber-400 text-white text-xs px-2 py-1 rounded-full"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-red-500">
                  <span className="mr-1">❤️</span>
                  <span className="text-sm font-bold">
                    {post.like_users.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
