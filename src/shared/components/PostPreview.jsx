import { Card, CardContent } from "@/components/ui/card";

export const PostPreview = ({ post }) => {
  return (
    <Card className="h-full rounded-3xl border-stone-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="flex h-full min-h-72 flex-col gap-5 p-6 text-left">
        <div className="space-y-2">
          <h2 className="text-4xl font-black tracking-tight text-stone-950">
            {post.title}
          </h2>
          <p className="text-sm font-medium text-stone-500">
            {post.author.username}
          </p>
        </div>

        <p className="line-clamp-3 text-sm leading-6 text-stone-600">
          {post.content}
        </p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-white"
            >
              #{tag.content}
            </span>
          ))}
        </div>

        <div className="mt-auto text-base font-semibold text-stone-700">
          <span className="mr-1" aria-hidden="true">
            ❤️
          </span>
          {post.like_users.length}
        </div>
      </CardContent>
    </Card>
  );
};
