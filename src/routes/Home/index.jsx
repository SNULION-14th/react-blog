import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
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
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {/* TODO: 검색 결과 포스트 만들기 */}
          {posts.map((post) => (
            <Card key={post.id}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.author.username}</CardDescription>
              </CardHeader>
              <CardContent>
                {post.tags.map((tag) => (
                  <div key={tag.id}>{tag.content}</div>
                ))}
              </CardContent>
              <CardFooter>
                {post.like_users.length > 0
                  ? "❤️" + post.like_users.length
                  : ""}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
