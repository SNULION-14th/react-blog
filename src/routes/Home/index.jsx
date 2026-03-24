import { posts } from "../../data/posts";

import { Header, Input } from "@/shared/components";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

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
        <div className="mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-2 lg:grid-cols-3 px-10 mt-10 lg:w-[950px] md:w-[640px] w-[320px]"></div>
      </div>
    </>
  );
}
