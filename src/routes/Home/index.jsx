import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";
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
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl px-4">
            {(() => {
              const allTagContents = posts.flatMap((post) =>
                post.tags.map((t) => t.content),
              );
              const uniqueTags = Array.from(new Set(allTagContents));

              return uniqueTags.map((tagContent, index) => (
                <div
                  key={index}
                  className="mt-8 bg-amber-500 text-white px-4 py-1 rounded-md text-xs font-bold shadow-sm h-auto cursor-pointer"
                >
                  #{tagContent}
                </div>
              ));
            })()}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl mt-1 px-4 mx-auto">
            {posts.map((post) => (
              <div className="flex flex-col h-full p-5 border border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all bg-white text-left">
                <div className="text-2xl font-bold">{post.title}</div>
                <p className="text-sm text-gray-500 mt-1">
                  {post.author.username}
                </p>
                <div className="flex flex-row justify-start flex-wrap gap-2 w-full mt-4">
                  {post.tags.map((tag) => (
                    <div
                      key={tag.id}
                      className="mt-8 bg-amber-500 text-white px-4 py-1 rounded-md text-xs font-bold shadow-sm h-auto cursor-pointer"
                    >
                      {tag.content}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row justify-start mt-6 items-center text-black font-bold">
                  <span className="mr-1">❤️</span>
                  {post.like_users.length}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]"></div>
    </>
  );
}
