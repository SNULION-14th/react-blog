import { useState } from "react";
import { posts } from "../../data/posts";
import { Card } from "../../components/ui/card";
import { TagList } from "../../components/ui/tag";
import { Header, Input } from "@/shared/components";
import { searchTags } from "@/lib/utils";

export default function Home() {
  const [input, setInput] = useState("");

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
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                console.log(input);
              }}
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <TagList contents={searchTags(posts, input)}></TagList>
          </div>
          <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px] gap-10">
            {posts.map((post) => (
              <Card cardId={post.id} post={post}></Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
