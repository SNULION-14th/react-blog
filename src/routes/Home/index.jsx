import { posts } from "../../data/posts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Header, Input } from "@/shared/components";

export default function Home() {
  const allTags = Array.from(
    new Set(posts.flatMap((post) => post.tags.map((tag) => tag.content)))
  );

  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        <div className="flex flex-col justify-center items-center mb-5">
          <div className="w-full mb-16 flex justify-center">
            <h1 className="uppercase text-6xl text-black">MY BLOG</h1>
          </div>
          <div className="w-[90vw] max-w-md flex justify-center">
            <Input
              className="focus-visible:ring-amber-500 focus-visible:ring-2 focus-visible:border-transparent selection:bg-amber-300 selection:text-black"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2 mt-6 max-w-2xl px-4">
            {allTags.map((tag, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-orange-300 text-white text-sm rounded-full font-medium cursor-pointer hover:bg-amber-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto grid grid-cols-3 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]">
          {/* TODO: 검색 결과 포스트 만들기 */}
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 mt-10 lg:w-[950px] md:w-[640px] w-full">
            {posts.map((post) => (
              <Card key={post.id} className="w-full border border-neutral-100 rounded-2xl hover:shadow-md transition-shadow">
                <CardHeader className="flex items-start">
                  <CardTitle className="flex text-xl font-bold line-clamp-1">{post.title}</CardTitle>
                  <span className="text-xs font-bold text-amber-600">{post.author.username}</span>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <span key={tag.id} className="text-[10px] bg-gray-100 px-2 py-0.5 rounded text-gray-500">
                        #{tag.content}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        
      </div>
    </>
  );
}
