import { Header, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

const posts = [
  {
    id: 1,
    title: "#1 Post",
    writer: "지호",
    tags: ["멋사", "치즈", "냠냠"],
    likes: 2,
  },
  {
    id: 2,
    title: "#2 Post",
    writer: "수빈",
    tags: ["멋사", "멋쟁이김세안"],
    likes: 1,
  },
  {
    id: 3,
    title: "#3 Post",
    writer: "록희",
    tags: ["회장님", "연예인"],
    // likes: 2,
  },
  {
    id: 4,
    title: "#4 Post",
    writer: "지원",
    tags: ["일잘러", "큐트"],
    likes: 3,
  },
  {
    id: 5,
    title: "#5 Post",
    writer: "예빈",
    tags: ["멋사", "쏘스윗"],
    likes: 1,
  },
];

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
          {[...new Set(posts.flatMap((post) => post.tags))].map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-amber-400 px-2 py-1 text-xs text-white"
            >
              #{tag}
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
                <p className="flex text-sm text-gray-500">{post.writer}</p>
              </CardHeader>
              <CardFooter className="flex flex-col items-start gap-3 pt-0">
                <div className="flex flex-wrap gap-2 pt-6 pb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-amber-400 px-2 py-1 text-xs text-white"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                {post.likes > 0 && (
                  <div className="text-sm text-gray-500">❤️ {post.likes}</div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
