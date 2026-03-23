import { posts } from "../../data/posts";
import { Header, Input } from "@/shared/components";

const featuredTags = [
  ...new Set(posts.flatMap((post) => post.tags.map((tag) => `#${tag.content}`))),
];

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col py-14">
        
        {/* 타이틀 및 검색창 영역 */}
        <div className="mb-5 flex flex-col items-center justify-center">
          <div className="mb-16 flex w-full justify-center">
            <h1 className="text-6xl uppercase text-black">my blog</h1>
          </div>
          <div className="flex w-[90vw] max-w-md justify-center">
            <Input
              className="selection:bg-amber-300 selection:text-black focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-amber-500"
              type="text"
              placeholder="태그를 검색하세요"
            />
          </div>
        </div>

        {/* 추천 태그(featuredTags) 영역 */}
        <div className="mx-auto mt-8 flex w-[320px] flex-wrap justify-center gap-2 px-5 md:w-[640px] lg:w-[950px]">
          {featuredTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#ffa200] px-3 py-1 text-sm font-semibold text-white"
            >
              {tag}
            </span>
          ))}
        </div>
        
      </div>

      {/* 포스트 리스트 영역 */}
      <section className="mx-auto mt-14 grid w-full max-w-[1060px] grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex min-h-[290px] flex-col rounded-[22px] border border-[#e3e3e3] bg-white px-8 py-8 text-left shadow-[0_3px_12px_rgba(0,0,0,0.08)]"
          >
            <h2 className="text-[28px] font-semibold leading-none tracking-tight text-[#111]">
              {post.title}
            </h2>
            <p className="mt-4 text-[15px] text-[#777]">{post.author.username}</p>

            <div className="mt-16 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={`${post.id}-${tag.id}`}
                  className="rounded-full bg-[#ffa200] px-3 py-1 text-sm font-semibold text-white"
                >
                  #{tag.content}
                </span>
              ))}
            </div>

            <p className="mt-auto pt-10 text-[20px] text-[#222]">
              <span className="mr-2">❤️</span>
              {post.like_users.length}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}