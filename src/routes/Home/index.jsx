import { posts } from "../../data/posts";
import { Header, Input } from "@/shared/components";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const allTags = [...new Set(posts.flatMap((post) => post.tags.map((t) => t.content)))];

  return (
    <>
      <Header />
      <div className="flex flex-col py-14 bg-white min-h-screen">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black font-light tracking-tight">MY BLOG</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              className="h-12 focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-8 px-10 max-w-3xl">
            {allTags.map((tagContent) => (
              <div
                key={tagContent}
                className="bg-amber-500 text-white px-3 py-1 rounded-md text-xs font-bold cursor-pointer hover:bg-amber-600"
              >
                #{tagContent}
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[1000px] md:w-[700px] w-full">
          {posts.map((post) => (
            <Card key={post.id} className="rounded-[40px] border-2 border-gray-100 shadow-none p-8 h-80 flex flex-col justify-between transition-transform hover:scale-[1.02]">
              <CardContent className="p-0 flex flex-col h-full">
                <div className="mb-4">
                  <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-400 text-sm font-medium">{post.author.username}</p>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-nowrap gap-2 mb-6 overflow-hidden">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded-md whitespace-nowrap flex-shrink-0"
                      >
                        #{tag.content}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-red-500 text-lg">❤️</span>
                    <span className="text-sm font-bold text-gray-700">{post.like_users.length}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}