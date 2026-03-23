import { useState } from "react";
import { posts } from "../../data/posts";

import { Header, Input, PostPreview } from "@/shared/components";
export default function Home() {
  const [searchValue, setSearchValue] = useState("");

  const tags = [...new Set(posts.flatMap((post) => post.tags.map((tag) => tag.content)))];
  const filteredTags = tags.filter((tag) => tag.includes(searchValue.trim()));

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto flex max-w-6xl flex-col px-5 py-14 sm:px-8">
        <section className="flex flex-col items-center gap-8 text-center">
          <h1 className="text-6xl uppercase text-black">
            my blog
          </h1>

          <div className="w-full max-w-xl">
            <Input
              className="h-12 rounded-full border-stone-200 bg-white px-5 text-sm shadow-sm focus-visible:ring-amber-500"
              type="text"
              placeholder="태그를 검색하세요"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>

          <div className="flex max-w-4xl flex-wrap justify-center gap-2">
            {filteredTags.length > 0 ? (
              filteredTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white shadow-sm"
                >
                  #{tag}
                </span>
              ))
            ) : (
              <p className="text-sm text-stone-400">일치하는 태그가 없습니다.</p>
            )}
          </div>
        </section>

        <section className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <PostPreview key={post.id} post={post} />
          ))}
        </section>
      </main>
    </div>
  );
}
