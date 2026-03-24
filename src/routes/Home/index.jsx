import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";
export default function Home() {
  const uniqueTags = [
    ...new Set(posts.flatMap((post) => post.tags).map((tag) => tag.content)),
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
          <div className="flex gap-2 flex-wrap mt-4">
            {uniqueTags.map((tag) => (
              <span
                key={tag}
                className="bg-amber-500 text-white px-2 py-0.5 rounded-md text-xs"
              >
                {"#" + tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border p-4 rounded-lg flex flex-col gap-2"
            >
              <h2 className="text-xl font-bold text-left">{post.title} </h2>
              <p className="text-sm text-gray-500 text-left">
                {post.author.username}
              </p>
              <div className="flex gap-2 my-6">
                {post.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="bg-amber-500 px-2 py-1 rounded-md text-xs text-white"
                  >
                    {"#" + tag.content}
                  </span>
                ))}
              </div>
              {post.like_users.length > 0 && (
                <p className="text-left text-xs">❤️ {post.like_users.length}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
