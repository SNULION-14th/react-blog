import { posts } from "../../data/posts";
import { useState } from "react";
import { Header, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? posts.filter((post) =>
        post.tags.some((tag) =>
          tag.content.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    : posts;

  const allTags = [
    ...new Map(
      posts.flatMap((post) => post.tags).map((tag) => [tag.id, tag]),
    ).values(),
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
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-1 mt-4">
            {allTags.map((tag) => (
              <span
                key={tag.id}
                className="text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full"
              >
                #{tag.content}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {filtered.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-gray-500">{post.author.username}</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full"
                    >
                      #{tag.content}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="text-sm text-gray-500">
                ❤️ {post.like_users.length}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
