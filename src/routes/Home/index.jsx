import { Header, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { posts } from "@/data/posts";

const nameTags = Array.from(
  new Map(
    posts.flatMap((post) => post.tags).map((tag) => [tag.id, tag]),
  ).values(),
);

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
        </div>
        <div className="flex flex-wrap justify-center gap-2 pt-1 pb-2">
          {nameTags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-md bg-amber-400 px-2 py-1 text-xs text-white"
            >
              #{tag.content}
            </span>
          ))}
        </div>
        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[850px] md:w-[640px] w-[320px]">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="w-55 h-50 mx-auto max-w-md rounded-2xl shadow-md border bg-white"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex text-lg font-bold text-black">
                  {post.title}
                </CardTitle>
                <p className="flex text-sm text-gray-500">
                  {post.author.username}
                </p>
              </CardHeader>
              <CardFooter className="flex flex-col items-start gap-3 pt-0">
                <div className="flex flex-wrap gap-2 pt-6 pb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="rounded-md bg-amber-400 px-2 py-1 text-xs text-white"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
                {post.like_users.length > 0 && (
                  <div className="text-sm text-gray-500">
                    ❤️ {post.like_users.length}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
