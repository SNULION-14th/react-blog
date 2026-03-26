import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posts } from "../../data/posts";

import { Button, Header, Input } from "@/shared/components";
export default function Home() {
  const allTags = [...new Set(posts.flatMap((post) => post.tags))];
  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">my blog</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center mb-2">
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
          <div className="flex justify-center">
            {allTags.map((tags) => {
              return (
                <Button
                  className="!px-1 mx-1 uppercase text-sm !bg-amber-400 text-white"
                  size="sm"
                >
                  #{tags.content}
                </Button>
              );
            })}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {posts.map((post) => {
            return (
              <Card id={post.id}>
                <CardHeader className="flex flex-col justify-center items-start">
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.author.username}</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-start mt-10 mb-2">
                  {post.tags.map((tag) => {
                    return (
                      <Button
                        className="!px-1 mx-0.5 uppercase text-sm !bg-amber-400 text-white"
                        size="sm"
                      >
                        #{tag.content}
                      </Button>
                    );
                  })}
                </CardContent>
                <CardFooter>
                  {post.like_users.length > 0 && (
                    <span>❤️{post.like_users.length}</span>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
}
